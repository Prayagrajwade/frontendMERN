import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Todo() {
    const [todoList, setTodoList] = useState([]);
    const [editableId, setEditableId] = useState(null);
    const [editedTask, setEditedTask] = useState("");
    const [editedStatus, setEditedStatus] = useState("");
    const [newTask, setNewTask] = useState("");
    const [newStatus, setNewStatus] = useState("");
    const [newDeadline, setNewDeadline] = useState("");
    const [editedDeadline, setEditedDeadline] = useState("");

    // Fetch tasks from database
    useEffect(() => {
        axios
            .get("https://backendmern-r876.onrender.com/getTodoList")
            .then((result) => {
                setTodoList(result.data);
            })
            .catch((err) => console.log(err));
    }, []);

    // Function to toggle the editable state for a specific row
    const toggleEditable = (id) => {
        const rowData = todoList.find((data) => data._id === id);
        if (rowData) {
            setEditableId(id);
            setEditedTask(rowData.task);
            setEditedStatus(rowData.status);
            setEditedDeadline(rowData.deadline || "");
        } else {
            setEditableId(null);
            setEditedTask("");
            setEditedStatus("");
            setEditedDeadline("");
        }
    };

    // Function to add task to the database
    const addTask = (e) => {
        e.preventDefault();
        if (!newTask || !newStatus || !newDeadline) {
            toast.error("All fields must be filled out.");
            return;
        }

        const newTodo = { task: newTask, status: newStatus, deadline: newDeadline };

        axios
            .post("https://backendmern-r876.onrender.com/addTodoList", newTodo)
            .then((res) => {
                setTodoList((prev) => [...prev, res.data]);
                setNewTask("");
                setNewStatus("");
                setNewDeadline("");
                toast.success("Todo added successfully!");
            })
            .catch((err) => console.log(err));
    };

    // Function to save edited data to the database
    const saveEditedTask = (id) => {
        const editedData = {
            task: editedTask,
            status: editedStatus,
            deadline: editedDeadline,
        };

        if (!editedTask || !editedStatus || !editedDeadline) {
            toast.error("All fields must be filled out.");
            return;
        }

        axios
            .post("https://backendmern-r876.onrender.com/updateTodoList/" + id, editedData)
            .then((result) => {
                setTodoList((prev) =>
                    prev.map((item) => (item._id === id ? result.data : item))
                );
                setEditableId(null);
                setEditedTask("");
                setEditedStatus("");
                setEditedDeadline("");
                toast.success("Todo updated successfully!");
            })
            .catch((err) => console.log(err));
    };

    // Delete task from database
    const deleteTask = (id) => {
        axios
            .delete("https://backendmern-r876.onrender.com/deleteTodoList/" + id)
            .then(() => {
                setTodoList((prev) => prev.filter((item) => item._id !== id));
                toast.success("Todo deleted successfully!");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="container mx-auto mt-10 p-6">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-2/3 px-4 mb-6 lg:mb-0">
                    <h2 className="text-2xl font-semibold text-center mb-6">Todo List</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="py-2 px-4 border-b">Task</th>
                                    <th className="py-2 px-4 border-b">Status</th>
                                    <th className="py-2 px-4 border-b">Deadline</th>
                                    <th className="py-2 px-4 border-b">Actions</th>
                                </tr>
                            </thead>
                            {Array.isArray(todoList) ? (
                                <tbody>
                                    {todoList.map((data) => (
                                        <tr key={data._id} className="border-b">
                                            <td className="py-2 px-4">
                                                {editableId === data._id ? (
                                                    <input
                                                        type="text"
                                                        className="w-full p-2 border rounded"
                                                        value={editedTask}
                                                        onChange={(e) => setEditedTask(e.target.value)}
                                                    />
                                                ) : (
                                                    data.task
                                                )}
                                            </td>
                                            <td className="py-2 px-4">
                                                {editableId === data._id ? (
                                                    <input
                                                        type="text"
                                                        className="w-full p-2 border rounded"
                                                        value={editedStatus}
                                                        onChange={(e) => setEditedStatus(e.target.value)}
                                                    />
                                                ) : (
                                                    data.status
                                                )}
                                            </td>
                                            <td className="py-2 px-4">
                                                {editableId === data._id ? (
                                                    <input
                                                        type="datetime-local"
                                                        className="w-full p-2 border rounded"
                                                        value={editedDeadline}
                                                        onChange={(e) => setEditedDeadline(e.target.value)}
                                                    />
                                                ) : data.deadline ? (
                                                    new Date(data.deadline).toLocaleString()
                                                ) : (
                                                    ""
                                                )}
                                            </td>
                                            <td className="py-2 px-4 flex space-x-2">
                                                {editableId === data._id ? (
                                                    <button
                                                        className="bg-green-500 text-white px-4 py-2 rounded"
                                                        onClick={() => saveEditedTask(data._id)}
                                                    >
                                                        Save
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="bg-blue-500 text-white px-4 py-2 rounded"
                                                        onClick={() => toggleEditable(data._id)}
                                                    >
                                                        Edit
                                                    </button>
                                                )}
                                                <button
                                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                                    onClick={() => deleteTask(data._id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            ) : (
                                <tbody>
                                    <tr>
                                        <td colSpan="4" className="text-center py-4">Loading tasks...</td>
                                    </tr>
                                </tbody>
                            )}
                        </table>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 px-4">
                    <h2 className="text-2xl font-semibold text-center mb-6">Add Task</h2>
                    <form className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Task</label>
                            <input
                                className="w-full p-2 border rounded"
                                type="text"
                                placeholder="Enter Task"
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Status</label>
                            <input
                                className="w-full p-2 border rounded"
                                type="text"
                                placeholder="Enter Status"
                                value={newStatus}
                                onChange={(e) => setNewStatus(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Deadline</label>
                            <input
                                className="w-full p-2 border rounded"
                                type="datetime-local"
                                value={newDeadline}
                                onChange={(e) => setNewDeadline(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={addTask}
                            className="w-full bg-green-500 text-white py-2 rounded"
                        >
                            Add Task
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={2000} />
        </div>
    );
}

export default Todo;
