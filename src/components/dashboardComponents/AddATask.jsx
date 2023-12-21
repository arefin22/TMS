/* eslint-disable react/prop-types */


const AddATask = ({ tasks, setTasks }) => {

    const handleAddTask = e => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const description = form.description.value
        const deadline = form.deadline.value
        const priority = form.priority.value
        const status = "todo"
        const taskData = { title, description, deadline, priority, status }
        console.log(taskData);

        setTasks([...tasks, taskData])
        form.reset()
    }

    return (
        <div className="bg-white">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn hover:bg-yellow-200 hover:text-black border-0" onClick={() => document.getElementById('my_modal_2').showModal()}>Add A Task</button>
            <dialog id="my_modal_2" className="modal" >
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-3xl p-10 underline">Add A Task</h3>

                    <form onSubmit={handleAddTask} className="flex flex-col gap-5">
                        <input type="text" placeholder="Task Title" name="title" className="input border-b-2 border-b-black bg-white w-full" />
                        <textarea className="textarea w-full bg-white border-b-2 h-5 border-b-black" placeholder="Description" name="description"></textarea>
                        <div className="grid grid-cols-5 items-end w-full" >
                            <label htmlFor="deadline" className="col-span-1 w-full">Deadline</label>
                            <input type="date" name="deadline" placeholder="Dead Line" className="col-span-4 input border-b-2 border-b-black bg-white w-full" />
                        </div>
                        <select name="priority" className="select w-full border-b-2 border-b-black bg-white">
                            <option value='low'>Low</option>
                            <option value='moderate'>Moderate</option>
                            <option value='high'>High</option>
                        </select>
                        <input type="submit" value="Add A Task" className="btn hover:bg-yellow-200 hover:text-black border-0 text-white" />
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default AddATask;