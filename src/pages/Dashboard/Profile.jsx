import { useContext } from "react";
import useSingleUser from "../../hooks/useSingleUser";
import { AuthContext } from "../../authentications/AuthProvider";
import Loading from "../../components/shared/Loading";


const Profile = () => {
    const { user } = useContext(AuthContext)
    const { singleUser, loading } = useSingleUser(user?.email)



    return (
        <div>
            {
                loading
                    ? <>
                        <Loading />
                    </>
                    : <div >
                        <div className="flex flex-col mt-10 justify-center w-full">
                            <img src={singleUser[0]?.image} alt="" className="w-44 h-44 mb-4 rounded-full" />
                            <p className="text-lg font-medium"><span className="lg:text-3xl font-bold uppercase mx-4">{singleUser[0]?.name}</span></p>
                            <p className="text-lg font-medium">Email : <span className="text-xl font-bold mx-4">{singleUser[0]?.email}</span></p>
                        </div>
                    </div>
            }

        </div>
    );
};

export default Profile;