import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-slate-500 text-white">
            <div className="flex justify-around items-center py-20">
                <div className="flex flex-col items-center justify-center">
                    <NavLink className='hover:bg-yellow-200 hover:text-black px-4 py-2 rounded-lg' to='/'>Home</NavLink>
                    <NavLink className='hover:bg-yellow-200 hover:text-black px-4 py-2 rounded-lg' to='/about'>About</NavLink>
                    <NavLink className='hover:bg-yellow-200 hover:text-black px-4 py-2 rounded-lg' to='/contact'>Contact</NavLink>
                    <NavLink className='hover:bg-yellow-200 hover:text-black px-4 py-2 rounded-lg' to='/dashboard'>Dashboard</NavLink>
                </div>
                <div className="text-3xl font-extrabold">
                    <h2>TMS</h2>
                </div>
                <div>
                    Info
                </div>
            </div>
            <div className="text-center bg-slate-700 p-3">
                <h2>All Right Reserved | TMS @ 2024</h2>
            </div>
        </div>
    );
};

export default Footer;