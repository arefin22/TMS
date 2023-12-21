import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";

const User = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default User;