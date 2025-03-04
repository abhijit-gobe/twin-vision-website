
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-2xl mb-6">Oops! Page not found</p>
        <p className="text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
