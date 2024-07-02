import axios from "axios";
import { useEffect, useState } from "react";

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
        axios.get('https://backendmern-r876.onrender.com/getTodoList')
            .then(result => {
                setTodoList(result.data)
            })
            .catch(err => console.log(err))
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
            alert("All fields must be filled out.");
            return;
        }

        axios.post('https://backendmern-r876.onrender.com/addTodoList', { task: newTask, status: newStatus, deadline: newDeadline })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    // Function to save edited data to the database
    const saveEditedTask = (id) => {
        const editedData = {
            task: editedTask,
            status: editedStatus,
            deadline: editedDeadline,
        };

        if (!editedTask || !editedStatus || !editedDeadline) {
            alert("All fields must be filled out.");
            return;
        }

        axios.post('https://backendmern-r876.onrender.com/updateTodoList/' + id, editedData)
            .then(result => {
                console.log(result);
                setEditableId(null);
                setEditedTask("");
                setEditedStatus("");
                setEditedDeadline("");
            })
            .catch(err => console.log(err));
    }

    // Delete task from database
    const deleteTask = (id) => {
        axios.delete('https://backendmern-r876.onrender.com/deleteTodoList/' + id)
            .then(result => {
                console.log(result);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container mx-auto mt-5">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/3">
                    <h2 className="text-center text-2xl mb-4">Todo List</h2>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse">
                            <thead>
                                <tr className="bg-blue-200">
                                    <th className="border px-4 py-2">Task</th>
                                    <th className="border px-4 py-2">Status</th>
                                    <th className="border px-4 py-2">Deadline</th>
                                    <th className="border px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(todoList) ? (
                                    todoList.map((data) => (
                                        <tr key={data._id} className="bg-white">
                                            <td className="border px-4 py-2">
                                                {editableId === data._id ? (
                                                    <input
                                                        type="text"
                                                        className="form-input"
                                                        value={editedTask}
                                                        onChange={(e) => setEditedTask(e.target.value)}
                                                    />
                                                ) : (
                                                    data.task
                                                )}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {editableId === data._id ? (
                                                    <input
                                                        type="text"
                                                        className="form-input"
                                                        value={editedStatus}
                                                        onChange={(e) => setEditedStatus(e.target.value)}
                                                    />
                                                ) : (
                                                    data.status
                                                )}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {editableId === data._id ? (
                                                    <input
                                                        type="datetime-local"
                                                        className="form-input"
                                                        value={editedDeadline}
                                                        onChange={(e) => setEditedDeadline(e.target.value)}
                                                    />
                                                ) : (
                                                    data.deadline ? new Date(data.deadline).toLocaleString() : ''
                                                )}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {editableId === data._id ? (
                                                    <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => saveEditedTask(data._id)}>
                                                        Save
                                                    </button>
                                                ) : (
                                                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => toggleEditable(data._id)}>
                                                        Edit
                                                    </button>
                                                )}
                                                <button className="bg-red-500 text-white px-4 py-2 rounded ml-2" onClick={() => deleteTask(data._id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="border px-4 py-2 text-center">Loading tasks...</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="w-full md:w-1/3 mt-5 md:mt-0">
                    <h2 className="text-center text-2xl mb-4">Add Task</h2>
                    <form className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label className="block mb-2">Task</label>
                            <input
                                className="form-input w-full"
                                type="text"
                                placeholder="Enter Task"
                                onChange={(e) => setNewTask(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Status</label>
                            <input
                                className="form-input w-full"
                                type="text"
                                placeholder="Enter Status"
                                onChange={(e) => setNewStatus(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Deadline</label>
                            <input
                                className="form-input w-full"
                                type="datetime-local"
                                onChange={(e) => setNewDeadline(e.target.value)}
                            />
                        </div>
                        <button onClick={addTask} className="bg-green-500 text-white px-4 py-2 rounded">
                            Add Task
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Todo;
