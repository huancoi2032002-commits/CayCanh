import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import sharp from "sharp";

// === 🔧 CẤU HÌNH CLOUDINARY ===
cloudinary.config({
    cloud_name: "duxzzujph",
    api_key: "879465776654446",
    api_secret: "bi9RO6-ZO4-gNcSmUCzo76TGL0M",
});

// === 🖼️ THƯ MỤC CHỨA ẢNH GỐC ===
// ⚠️ Sửa đường dẫn này theo máy bạn
const inputDir = "E:\\Duc\\HinhAnh\\Monstera";

// === 📤 THƯ MỤC TẠM SAU KHI NÉN ===
const tempDir = "./compressed";
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

// 🔹 Kiểm tra ảnh đã tồn tại trên Cloudinary chưa
async function checkImageExists(publicId) {
    try {
        await cloudinary.api.resource(`plants/${publicId}`);
        return true; // Đã tồn tại
    } catch (err) {
        if (err.http_code === 404) return false; // Chưa có, được phép upload
        console.error("❌ Lỗi kiểm tra ảnh:", err.message);
        return false;
    }
}

// 🔹 Nén & upload nếu chưa tồn tại
async function compressAndUpload(filePath) {
    const fileName = path.basename(filePath);
    const publicId = path.parse(fileName).name; // Dùng tên file làm ID

    // Kiểm tra có sẵn chưa
    const exists = await checkImageExists(publicId);
    if (exists) {
        console.log(`⚠️ Bỏ qua (đã có trên Cloudinary): ${fileName}`);
        return null;
    }

    const compressedPath = path.join(tempDir, fileName);

    // Nén ảnh
    await sharp(filePath)
        .resize({ width: 1500, withoutEnlargement: true })
        .jpeg({ quality: 80 })
        .toFile(compressedPath);

    // Upload lên Cloudinary
    const result = await cloudinary.uploader.upload(compressedPath, {
        folder: "plants", // 🌿 Thư mục trên Cloudinary
        public_id: publicId, // Giữ tên gốc
        unique_filename: false,
        overwrite: false,
    });

    // Xóa file tạm
    fs.unlinkSync(compressedPath);

    return result.secure_url;
}

// 🔹 Hàm chính
async function main() {
    const files = fs
        .readdirSync(inputDir)
        .filter((f) => /\.(jpg|jpeg|png)$/i.test(f))
        .map((f) => path.join(inputDir, f));

    console.log(`🔍 Tìm thấy ${files.length} ảnh trong thư mục ${inputDir}\n`);
    const urls = [];

    for (const file of files) {
        console.log(`📤 Đang xử lý: ${path.basename(file)} ...`);
        try {
            const url = await compressAndUpload(file);
            if (url) {
                console.log(`✅ Upload thành công: ${url}\n`);
                urls.push(url);
            }
        } catch (err) {
            console.error(`❌ Lỗi upload ${file}:`, err.message);
        }
    }

    console.log("\n=== ✅ DANH SÁCH LINK CLOUDINARY ===");
    urls.forEach((u) => console.log(u));

    // Ghi link ra file JSON
    fs.writeFileSync("uploaded_links.json", JSON.stringify(urls, null, 2));
    console.log("\n💾 Đã lưu link vào file: uploaded_links.json");
}

main().catch(console.error);
