import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (

        <div className="bg-slate-500 p-4 text-white">
            <div className="flex justify-around items-center">
                <div className="flex gap-3">
                    <NavLink className='hover:bg-yellow-200 hover:text-black px-4 py-2 rounded-lg' to='/'>Home</NavLink>
                    <NavLink to='/about' className='hover:bg-yellow-200 hover:text-black px-4 py-2 rounded-lg' >About</NavLink>
                    <NavLink to='/contact' className='hover:bg-yellow-200 hover:text-black px-4 py-2 rounded-lg' >Contact Us</NavLink>
                    <NavLink className='hover:bg-yellow-200 hover:text-black px-4 py-2 rounded-lg'  to='/dashboard'>Dashboard</NavLink>
                </div>
                <div className="text-3xl font-extrabold">
                    <h2>TMS</h2>
                </div>
                <div className="flex justify-center gap-3">
                    <p className='hover:bg-yellow-200 hover:text-black px-4 py-2 rounded-lg' >dark</p>
                    <p className='hover:bg-yellow-200 hover:text-black px-4 py-2 rounded-lg' >Log In</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;