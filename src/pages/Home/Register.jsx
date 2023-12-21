import { NavLink } from "react-router-dom";

const Register = () => {
    const handleRegister = e => {
        e.preventDefault()
    }
    return (
        <div>
            <div className="mx-auto w-full text-center">
                <h2 className="text-2xl font-bold p-6">Register</h2>
                <form onSubmit={handleRegister} className="flex flex-col items-center justify-center gap-4">
                    <input type="name" placeholder="Full Name" name="name" className="input w-full max-w-xs" />
                    <input type="email" placeholder="Email Address" name="email" className="input w-full max-w-xs" />
                    <input type="text" placeholder="Image Url" name="img" className="input w-full max-w-xs" />
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