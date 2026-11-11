import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import { useSchool } from "../../context/useSchool";

const PublicLayout = () => {
  const { schoolInfo, loading } = useSchool();

  if (loading) {
    return <Loader fullScreen text="Loading school information..." />;
  }

  if (!schoolInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Unable to load school information.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar name={schoolInfo.fullname} shortname={schoolInfo.shortname} />

      <main>
        <Outlet />
      </main>

      <Footer
        name={schoolInfo.fullname}
        shortname={schoolInfo.shortname}
        location={schoolInfo.location}
      />
    </div>
  );
};

export default PublicLayout;
