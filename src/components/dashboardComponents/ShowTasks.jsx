import { useState } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { SortableItem } from './SortableItem';
import Draggable from './Draggable';
import { Droppable } from './Droppable';

function ShowTasks() {
    const [items, setItems] = useState(['Task 1', 'Task 2', 'Task 3']);
    const [isDropped, setIsDropped] = useState(false);
    const [activeId, setActiveId] = useState(null);
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: (sortableKeyboardCoordinates),
        })
    );

    // console.log(activeId);
    function handleDragStart(event) {
        setActiveId(event.active.id);
        // console.log(event.active.id);
    }

    function handleDragEnd(event) {
        console.log(event);
        const { active, over } = event;
        setActiveId(null);
        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
        if (event.over && event.over.id === 'droppable') {
            setIsDropped(true);
        }
    }

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd} >
            <div className='flex justify-around items-center gap-5'>
                <div>
                    <SortableContext items={items} strategy={verticalListSortingStrategy} >
                        {items.map(id => (
                            <Draggable key={id} id={id}>
                                <div className='p-4 bg-yellow-200 m-2'>
                                    <SortableItem id={id} />
                                </div>
                            </Draggable>
                        ))}
                    </SortableContext>
                    <DragOverlay>
                        {activeId && (
                            <SortableItem id={activeId} />
                        )}
                    </DragOverlay>
                </div>
            </div>
            <div className='bg-black min-h-28 w-96'>
                <SortableContext items={items} strategy={verticalListSortingStrategy} >
                    <Droppable>
                        {isDropped ? <SortableItem id={activeId} /> : 'Drop here'}
                    </Droppable>
                </SortableContext>

            </div>
        </DndContext>
    );
}

export default ShowTasks