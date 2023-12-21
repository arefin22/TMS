/* eslint-disable react/prop-types */


const ShowTasks = ({ tasks }) => {

    const singleTask = tasks?.map(task => task.title)
    console.log(singleTask);

    return (
        <div>
            <div className="w-1/3 mx-auto flex flex-col gap-3 mt-10">
                {
                    tasks?.map((task, i) =>
                        <p className="p-4 bg-slate-600" draggable key={i}> {task.title}</p>
                    )
                }
            </div>
        </div>
    );
};

export default ShowTasks;