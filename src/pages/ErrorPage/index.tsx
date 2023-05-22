import { NavigateOptions, useNavigate } from "react-router-dom";
import { navigateBackClickHandler } from "../../utils/helpers";
import "./errorpage.css";

function ErrorPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    const url: string = "/users";
    const config: NavigateOptions = { replace: true };

    navigateBackClickHandler(url, config, navigate);
  };

  return (
    <section className="section-wrapper">
      <h1> Oops! </h1>
      <p> Something went wrong </p>
      <button
        style={{ padding: "0.5rem", fontWeight: "bold", cursor: "pointer" }}
        onClick={handleClick}
      >
        Back to Users
      </button>
    </section>
  );
}

export default ErrorPage;
