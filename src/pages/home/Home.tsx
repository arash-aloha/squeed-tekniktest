import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="main-wrapper">
      <h1>Hola Mundo!</h1>
      <h4>
        <Link to="/Products"> Enter </Link>
      </h4>
    </main>
  );
}

export default Home;
