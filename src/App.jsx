import "./styles/App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <>
      <div className="header-fixed">
        <Header />
      </div>
      <div className="container-center">
        <Outlet />
      </div>
    </>
  );
}

export default App;
