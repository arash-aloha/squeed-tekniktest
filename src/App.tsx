import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/NavBar";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Users from "./pages/UserGrid";
import UserProfile from "./pages/User[id]";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users title={"Users"} />} />
          <Route path="/users/:id" element={<UserProfile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
