import { useState } from "react";
import API from "../services/api";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!form.name || !form.email || !form.password) {
      return setError("All fields are required");
    }

    if (form.password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await API.post("/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password
      });

      setSuccess("Account created successfully 🎉");

      setTimeout(() => {
        window.location.href = "/";
      }, 1500);

    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.response?.data?.errors?.[0]?.msg ||
        "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="container">

        <h2>Create Account 🚀</h2>

        <form onSubmit={handleSubmit}>

          {/* ERROR */}
          {error && (
            <p style={{ color: "red", fontSize: "13px", marginBottom: "8px" }}>
              {error}
            </p>
          )}

          {/* SUCCESS */}
          {success && (
            <p style={{ color: "green", fontSize: "13px", marginBottom: "8px" }}>
              {success}
            </p>
          )}

          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

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

          <input
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
          />

          <button disabled={loading}>
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        <div
          className="link"
          onClick={() => (window.location.href = "/")}
        >
          Already have an account? Login
        </div>
      </div>
    </div>
  );
}