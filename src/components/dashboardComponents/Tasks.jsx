import { DndContext } from "@dnd-kit/core";
import Draggable from "./Draggable";
import { Droppable } from "./Droppable";
import { useState } from "react";


const Tasks = () => {

    const [isDropped, setIsDropped] = useState(false);
    const draggableMarkup = (
        <Draggable>Drag me</Draggable>
    );

    function handleDragEnd(event) {
        if (event.over && event.over.id === 'droppable') {
            setIsDropped(true);
        }
    }


    return (
        <div className="container p-10 mt-10">

            <DndContext onDragEnd={handleDragEnd}>
                <div className="grid grid-cols-3 justify-center items-center gap-5">
                    <div className=" bg-white rounded-lg drop-shadow-2xl h-96">
                        <h3 className="text-black font-bold text-2xl p-2">To Do</h3>
                        <hr />
                        <div className="w-full">
                            {!isDropped ? draggableMarkup : null}
                            <Droppable>
                                {isDropped ? draggableMarkup : 'Drop here'}
                            </Droppable>
                        </div>
                    </div>
                    <div className=" bg-white rounded-lg drop-shadow-2xl h-96">
                        <h3 className="text-black font-bold text-2xl p-2">On Going</h3>
                        <hr />
                    </div>
                    <div className=" bg-white rounded-lg drop-shadow-2xl h-96">
                        <h3 className="text-black font-bold text-2xl p-2">Completed </h3>
                        <hr />
                    </div>
                </div>
            </DndContext>


        </div>
    );
};

export default Tasks;