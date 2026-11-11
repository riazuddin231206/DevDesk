import { Outlet } from "react-router";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;