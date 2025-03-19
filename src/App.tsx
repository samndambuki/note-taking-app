import "./App.css";
//react-router-dom is used for navigation
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
//this is the main application file
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/add" element={<Add />} /> */}
      {/* <Route path="/edit/:id" element={<Edit />} /> */}
    </Routes>
  );
}

export default App;

//1. we have three pages
//2. we use dynamic routing for edit
