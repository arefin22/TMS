import { useContext } from "react";
import {  NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authentications/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Login = () => {
    const location = useLocation();
    const { signInUser } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginedData = {email, password}
        console.log(loginedData);
    }
    return (
        <div>
            <div className="mx-auto w-full text-center">
                <h2 className="text-2xl font-bold p-6">Log In</h2>
                <form onSubmit={handleLogin} className="flex flex-col items-center justify-center gap-4">
                    <input type="email" placeholder="Email Address" name="email" className="input w-full max-w-xs" />
                    <input type="password" placeholder="Password" name="password" className="input w-full max-w-xs" />
                    <input type="submit" className="btn hover:bg-yellow-200 hover:text-black" value="Log In" />
                </form>
                <p className="mt-6">New Here ? 
                    <NavLink className="text-blue-700" to='/register'> Register</NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;