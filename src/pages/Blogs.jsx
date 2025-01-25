import React from "react";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        This page is under construction!
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
        I'm currently working on this page. Please check back later.
      </p>
      <img
        src="/under_construction.jpg" // Replace with the path to your image
        alt="Under Construction"
        style={{ width: "300px", marginBottom: "1.5rem" }}
      />
      <button
        onClick={handleGoBack}
        style={{
          padding: "0.8rem 1.5rem",
          fontSize: "1rem",
          color: "#fff",
          backgroundColor: "#0070f3",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default Blogs;
