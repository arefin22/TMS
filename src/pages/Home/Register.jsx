import { NavLink } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../authentications/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {

    const axiosPublic = useAxiosPublic()
    const { registerUser } = useContext(AuthContext)

    const handleRegister = async e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const image = form.image.value
        const password = form.password.value

        const data = { name, email, image, password }
        console.log(data);

        await axiosPublic.post('/user', data)
            .then(res => {
                console.log(res);
            })
        registerUser(email, password)
            .then(res => toast('Congratulations! For Being A Member', res))
            .catch(err => toast('Try Again Please', err))
    }
    return (
        <div>
            <div className="mx-auto w-full bg-white h-screen text-center">
                <h2 className="text-2xl font-bold p-6">Register</h2>
                <form onSubmit={handleRegister} className="flex flex-col items-center justify-center gap-4">
                    <input type="name" placeholder="Full Name" name="name" className="input w-full max-w-xs" />
                    <input type="email" placeholder="Email Address" name="email" className="input w-full max-w-xs" />
                    <input type="text" placeholder="Image Url" name="image" className="input w-full max-w-xs" />
                    <input type="password" placeholder="Password" name="password" className="input w-full max-w-xs" />
                    <input type="submit" className="btn hover:bg-yellow-200 hover:text-black" value="Register" />
                </form>
                <p className="mt-6">Already Have An Account ?
                    <NavLink className="text-blue-700" to='/login'> Log In</NavLink>
                </p>
            </div>
        </div>
    );
};

export default Register;