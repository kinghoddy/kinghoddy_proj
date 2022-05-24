import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

function Auth() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const handler = (e) => {
    e.preventDefault();
    setError(null);
  };
  return (
    <form className="root" onSubmit={handler}>
      <Typography variant="h5" gutterBottom>
        Sign In
      </Typography>
      {error && <div className="error">{error}</div>}
      <TextField
        fullWidth
        style={{ marginBottom: 30 }}
        label="User"
        variant="standard"
        type="email"
        required
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        value={formData.email}
      />
      <TextField
        fullWidth
        style={{ marginBottom: 30 }}
        variant="standard"
        label="Password"
        type="password"
        required
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        value={formData.password}
      />
      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
      <style jsx>{`
        .root {
          max-width: 40rem;
        }
        .error {
          background: #f002;
          color: #f00;
          padding: 15px;
          margin-bottom: 20px;
          font-size: 14px;
        }
      `}</style>
    </form>
  );
}

export default Auth;
