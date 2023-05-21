import { Link, NavLink, useNavigate } from "react-router-dom";
import "./errorpage.css";

function ErrorPage() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/users", { replace: true });
  };

  return (
    <section className="section-wrapper">
      <h1> Oops! </h1>
      <p> Something went wrong </p>
      <button
        style={{ padding: "0.5rem", fontWeight: "bold", cursor: "pointer" }}
        onClick={clickHandler}
      >
        Back to Users
      </button>
    </section>
  );
}

export default ErrorPage;
