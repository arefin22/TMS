import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div className="hero lg:h-[700px] text-black" style={{ backgroundImage: 'url(https://i.ibb.co/vZgLGH4/kier-in-sight-archives-n-NWb8l-N1bqw-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="flex justify-between items-center"> 
                <div className="hero-content w-full justify-start text-neutral-content">
                    <div className="w-96 lg:w-[500px]">
                        <h1 className="mb-5 text-5xl font-bold text-white">Trouble in <br /> Management!</h1>
                        <p className="mb-5 text-slate-200">The Ultimate Solution for your any type of task management problems. Test By yourself...</p>
                        <Link className="btn bg-white text-black hover:bg-yellow-200 border-0 hover:text-black" to='/login'>Let&apos;s Explore</Link>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/XXdsxvP/7893714.png" className="" alt="confused" />
                </div>
            </div>
        </div>
    );
};

export default Hero;