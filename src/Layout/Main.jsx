import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/NavBar/Navbar";



const Main = () => (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer />
    </div>
);

export default Main;