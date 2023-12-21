import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="bg-white min-h-screen" >
            <div className="grid grid-cols-5">
                <div className="col-span-1 m-3 rounded-lg pb-80 p-3 bg-slate-500">
                    <div className="flex justify-center pt-12">
                        <NavLink to='/' className='text-3xl font-extrabold text-white' >TMS</NavLink>
                    </div>
                    <div className="flex flex-col gap-3 py-12 px-4 text-xl">
                        <NavLink to='/' className='hover:bg-yellow-200 text-white hover:text-black px-6 py-2 rounded-full'>🔙 Home</NavLink>
                        <hr />
                        <NavLink to='/dashboard' className='hover:bg-yellow-200 text-white hover:text-black px-6 py-2 rounded-full'>👩‍💻 Profile</NavLink>
                        <NavLink to='/dashboard/task' className='hover:bg-yellow-200 text-white hover:text-black px-6 py-2 rounded-full'>🏢 Task Manager</NavLink>
                    </div>
                </div>
                <div className="col-span-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;