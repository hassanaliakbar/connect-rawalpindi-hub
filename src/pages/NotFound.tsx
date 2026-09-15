import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    document.title = "Page Not Found | AgriDrone Spares";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", "This page does not exist. Browse agricultural drone spare parts at AgriDrone Spares, Rawalpindi.");
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", "Page Not Found | AgriDrone Spares");
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", "This page does not exist. Browse agricultural drone spare parts at AgriDrone Spares.");
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", "https://connect-rawalpindi-hub.lovable.app/");
  }, [location.pathname]);


  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
