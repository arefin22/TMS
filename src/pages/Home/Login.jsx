import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authentications/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";


const Login = () => {
    const { signInUser, signInUsingPopup } = useContext(AuthContext)
    const location = useLocation();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleLogin = async e => {
        try {
            e.preventDefault()
            const form = e.target
            const email = form.email.value;
            const password = form.password.value;
            // const loginData = { email, password };
            // console.log(loginData);



            const result = await signInUser(email, password);
            const loggedInUser = result.user
            console.log(loggedInUser);
            navigate(location?.state ? location?.state : '/')
            // toast('Log In Successful')
            const loggedUser = { email }
            const res = await axiosPublic.post('/jwt', loggedUser)
            toast('Log In Successful', res);
            console.log(res);
        }
        catch (err) { console.log('Invalid Email or Password', err) }
    }

    return (
        <div>
            <div className="mx-auto w-full bg-white h-dvh text-center">
                <h2 className="text-2xl font-bold p-6">Log In</h2>
                <form onSubmit={handleLogin} className="flex flex-col items-center justify-center gap-4">
                    <input type="email" placeholder="Email Address" name="email" className="input w-full max-w-xs" />
                    <input type="password" placeholder="Password" name="password" className="input w-full max-w-xs" />
                    <input type="submit" className="btn hover:bg-yellow-200 hover:text-black" value="Log In" />
                </form>
                <p className="mt-6">New Here ?
                    <NavLink className="text-blue-700" to='/register'> Register</NavLink>
                </p>
                <button onClick={signInUsingPopup} className="btn hover:bg-yellow-200 hover:text-black border-0 mt-5">Login Using Google</button>
            </div>
        </div>
    );
};

export default Login;