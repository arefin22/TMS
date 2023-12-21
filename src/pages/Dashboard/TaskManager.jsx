import { useState } from "react";
import AddATask from "../../components/dashboardComponents/AddATask";
import ShowTasks from "../../components/dashboardComponents/ShowTasks";


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
                    <ShowTasks tasks={tasks} />
                </div>
            </div>
        </div>
    );
};

export default TaskManager;