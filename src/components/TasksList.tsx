import Task from "./Task";

type TasksListProps = {
	tasksList: string[];
	deleteTask: (index: number) => void;
};

const TasksList = ({ tasksList, deleteTask }: TasksListProps) => {
	return (
		<div className="tasks-list">
			{tasksList.map((task, index) => (
				<Task
					key={index}
					task={task}
					deleteTask={() => deleteTask}
				></Task>
			))}
		</div>
	);
};

export default TasksList;
