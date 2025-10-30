import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";

function PageLoader({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 800); // giả delay 0.8s
        return () => clearTimeout(timer);
    }, [location]);

    if (loading) return <Loading />;
    return <>{children}</>;
}

export default PageLoader;