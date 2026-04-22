import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add task
  const addTask = async () => {
    if (!title.trim()) return alert("Enter task");

    try {
      await API.post("/tasks", { title });
      setTitle("");
      fetchTasks();
    } catch {
      alert("Error adding task");
    }
  };

  // Delete
  const deleteTask = async (id) => {
    if (!window.confirm("Delete this task?")) return;

    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  // Save edit
  const saveEdit = async (id) => {
    if (!editText.trim()) return;

    await API.put(`/tasks/${id}`, { title: editText });
    setEditId(null);
    fetchTasks();
  };

  // Toggle
  const toggleStatus = async (task) => {
    await API.put(`/tasks/${task._id}`, {
      status: task.status === "pending" ? "completed" : "pending",
    });
    fetchTasks();
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard">

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
          <h2>Task Dashboard</h2>
          <button onClick={logout} style={{ width: "auto", padding: "6px 12px" }}>
            Logout
          </button>
        </div>

        {/* Add Task */}
        <div className="task-input">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add new task..."
          />
          <button onClick={addTask}>Add</button>
        </div>

        {/* Loading */}
        {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

        {/* Empty State */}
        {!loading && tasks.length === 0 && (
          <p style={{ textAlign: "center", color: "gray" }}>
            No tasks yet. Add your first task 🚀
          </p>
        )}

        {/* Task List */}
        <div className="task-list">
          {tasks.map((task) => (
            <div key={task._id} className="task-card">

              {editId === task._id ? (
                <>
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />

                  <div className="actions">
                    <button className="toggle" onClick={() => saveEdit(task._id)}>
                      Save
                    </button>
                    <button className="delete" onClick={() => setEditId(null)}>
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <span
                    className={`task-title ${
                      task.status === "completed" ? "completed" : ""
                    }`}
                  >
                    {task.title}
                  </span>

                  <div className="actions">
                    <button
                      className="toggle"
                      onClick={() => toggleStatus(task)}
                      title="Mark Complete"
                    >
                      ✔
                    </button>

                    <button
                      className="edit"
                      onClick={() => {
                        setEditId(task._id);
                        setEditText(task.title);
                      }}
                      title="Edit"
                    >
                      ✏️
                    </button>

                    <button
                      className="delete"
                      onClick={() => deleteTask(task._id)}
                      title="Delete"
                    >
                      ✖
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}