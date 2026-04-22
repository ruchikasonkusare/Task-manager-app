import { useState } from "react";
import API from "../services/api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!form.email || !form.password) {
      return setError("All fields are required");
    }

    try {
      setLoading(true);
      setError("");

      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      // redirect
      window.location.href = "/dashboard";
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="container">

        <h2>Welcome Back 👋</h2>

        <form onSubmit={handleSubmit}>
          
          {/* Error Message */}
          {error && (
            <p style={{ color: "red", fontSize: "13px", marginBottom: "8px" }}>
              {error}
            </p>
          )}

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div
          className="link"
          onClick={() => (window.location.href = "/register")}
        >
          Don’t have an account? Register
        </div>
      </div>
    </div>
  );
}