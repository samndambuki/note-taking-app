import "./App.css";
//react-router-dom is used for navigation
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";
//this is the main application file
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddNote />} />
      <Route path="/edit/:id" element={<EditNote />} />
    </Routes>
  );
}

export default App;

//1. we have three pages
//2. we use dynamic routing for edit
