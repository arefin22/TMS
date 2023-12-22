import { useState } from "react";
import AddATask from "../../components/dashboardComponents/AddATask";
// import ShowTasks from "../../components/dashboardComponents/ShowTasks";
import Tasks from "../../components/dashboardComponents/Tasks";


const TaskManager = () => {

    let [tasks, setTasks] = useState([])

    // console.log(tasks);
    return (
        <div>
            <div className="mx-auto text-center mt-24">
                <div>
                    <AddATask tasks={tasks} setTasks={setTasks} />
                </div>
                <div className="h-36">
                    {/* <ShowTasks tasks={tasks} /> */}
                    <Tasks tasks={tasks}></Tasks>
                </div>
            </div>
        </div>
    );
};

export default TaskManager;