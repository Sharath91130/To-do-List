import { useState } from "react";

export default function Home() {
    const [inputValue, setInputValue] = useState(""); // Current input value
    const [tasks, setTasks] = useState([]); // List of tasks
    const [completedTasks, setCompletedTasks] = useState([]); // List of completed tasks
    const [ongoingTasks, setOngoingTasks] = useState([]); // List of ongoing tasks

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload
        if (inputValue.trim()) {
            setTasks([...tasks, inputValue]); // Add the current input value to tasks
            setInputValue(""); // Clear the input field
        } else {
            alert("Task cannot be empty!");
        }
    };

    const handleDelete = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const handleComplete = (index) => {
        const completedTask = tasks[index];
        setTasks(tasks.filter((_, i) => i !== index));
        setCompletedTasks([...completedTasks, completedTask]);
    };

    const handleOngoing = (index) => {
        const ongoingTask = tasks[index];
        setTasks(tasks.filter((_, i) => i !== index));
        setOngoingTasks([...ongoingTasks, ongoingTask]);
    };

    return (
        <div className="home">
            <form className="task-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter task..."
                    className="task-input"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button className="add-task-button">ADD TASK</button>
            </form>
            <div className="task-sections">
                <div className="task-section">
                    <h2>To-Do Tasks</h2>
                    <ul>
                        {tasks.map((task, index) => (
                            <li
                                key={index}
                                style={{ color: "skyblue", fontSize: "x-large" }}
                            >
                                {task}
                                <button
                                    onClick={() => handleComplete(index)}
                                    style={{ marginLeft: "10px" }}
                                >
                                    Completed
                                </button>
                                <button
                                    onClick={() => handleOngoing(index)}
                                    style={{ marginLeft: "10px" }}
                                >
                                    Ongoing
                                </button>
                                <button
                                    onClick={() => handleDelete(index)}
                                    style={{ marginLeft: "10px" }}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="task-section">
                    <h2>Ongoing Tasks</h2>
                    <ul>
                        {ongoingTasks.map((task, index) => (
                            <li
                                key={index}
                                style={{ color: "orange", fontSize: "x-large" }}
                            >
                                {task}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="task-section">
                    <h2>Completed Tasks</h2>
                    <ul>
                        {completedTasks.map((task, index) => (
                            <li
                                key={index}
                                style={{ color: "green", fontSize: "x-large" }}
                            >
                                {task}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
