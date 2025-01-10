import { useState } from "react";
import TasksList from "./TasksList";

export const App = () => {
	const [newTask, setNewTask] = useState<string>("");
	const [tasksList, setTasksList] = useState<string[]>([]);

	const handleAddTask = () => {
		if (newTask.trim() === "") return;
		setTasksList((prevTasks) => [...prevTasks, newTask]); // add new task
		setNewTask(""); // delete the input content
	};

	const handleDeleteTask = (index: number) => {
		setTasksList((currentTasks) => currentTasks.filter((_, i) => i !== index)); // filter only the tasks that have a different index
	};

	return (
		<div className="app-container">
			<h1>Tasks List</h1>
			<div>
				<input
					type="text"
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
					placeholder="New task"
				/>
			</div>
			<button onClick={handleAddTask}>Add Task</button>
			<TasksList
				tasksList={tasksList}
				deleteTask={handleDeleteTask}
			></TasksList>
		</div>
	);
};
