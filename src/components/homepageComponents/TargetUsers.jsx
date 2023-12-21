

const TargetUsers = () => {
    return (
        <div>
            <h2 className="text-3xl text-gray-700 font-bold text-center underline pt-10 -mb-16 ">Usable For</h2>
            <div className="h-96 text-black carousel w-full mx-auto flex justify-center gap-5 rounded-box">
                <div className="carousel-item flex justify-center items-center h-full">
                    <div>
                        <p className="text-8xl">👩‍💻</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Developers</h2>
                        <p>→ Organizing Coding Tasks</p>
                        <p>→ Bug Fixes</p>
                        <p>→ Future Implementations</p>
                    </div>
                </div>
                <div className="carousel-item flex justify-center items-center h-full">
                    <div>
                        <p className="text-8xl">🤵</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Corporate Professional</h2>
                        <p>→ Managing Project Tasks</p>
                        <p>→ Team Collaboration</p>
                        <p>→ Deadline</p>
                    </div>
                </div>
                <div className="carousel-item flex justify-center items-center h-full">
                    <div>
                        <p className="text-8xl">🏦</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Financial Professionals</h2>
                        <p>→ Handling Financial Project Tasks</p>
                        <p>→ Audits</p>
                        <p>→ Regulatory Tasks</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TargetUsers;