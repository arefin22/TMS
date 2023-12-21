import Hero from "../../components/homepageComponents/Hero";
import TargetUsers from "../../components/homepageComponents/TargetUsers";
import Usibility from "../../components/homepageComponents/Usibility";

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Hero />
            <Usibility />
            <TargetUsers />
        </div>
    );
};

export default Home;