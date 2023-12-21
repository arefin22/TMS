import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (

        <div className="bg-slate-500 p-4 text-white">
            <div className="flex justify-around items-center">
                <div className="flex gap-3">
                    <NavLink className='hover:bg-yellow-200 hover:text-black px-4 py-2 rounded-lg' to='/'>Home</NavLink>
                    <NavLink to='/about' className='hover:bg-yellow-200 hover:text-black px-4 py-2 rounded-lg' >About</NavLink>
                    <NavLink to='/contact' className='hover:bg-yellow-200 hover:text-black px-4 py-2 rounded-lg' >Contact Us</NavLink>
                </div>
                <div className="text-3xl font-extrabold">
                    <NavLink to='/' className='text-3xl font-extrabold text-white' >TMS</NavLink>
                </div>
                <div className="flex justify-center gap-3">
                    <NavLink className='hover:bg-yellow-200 hover:text-black px-4 py-2 rounded-lg text-yellow-400' to='/dashboard'>Dashboard</NavLink>
                    <NavLink className='hover:bg-yellow-200 hover:text-black px-4 py-2 rounded-lg' to='/login'>Log In</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;