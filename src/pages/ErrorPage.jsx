import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="flex flex-col mt-80 gap-6 justify-center items-center">
                <p className="text-9xl">🥹</p>
                <p className="text-3xl font-semibold">Did You Lost? </p>
                <Link to='/' className="px-8 py-2 rounded-lg bg-slate-500 hover:bg-yellow-200 hover:text-black rounded-lg' text-white">Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;