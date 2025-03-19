import axios from "axios";
import React, { useState } from "react";
//allows navigation to different routes programmatically
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  //title and content are state variables
  //setTitle and setContent are functions that update title and content
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //used to navigate programmatically
  const navigate = useNavigate();

  //define an event handler for the form submission
  const handleSubmit = async (e: React.FormEvent) => {
    //prevents the default form submission behaviou which would cause a page reload
    e.preventDefault();
    await axios.post("http://localhost:5000/notes", { title, content });
    navigate("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-md font-bold">Add Note</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          className="border p-2 mb-2 rounded-lg shadow-lg text-sm"
          placeholder="Title"
          //   bind to title state
          value={title}
          //   updates title when user types
          onChange={(e) => setTitle(e.target.value)}
          //   ensures that this field must be filled before submitting
          required
        />
        {/* allows multiple lines of text  */}
        <textarea
          className="border p-2 mb-2 rounded-lg shadow-lg text-sm"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button className="bg-green-500 text-white py-2 text-xs rounded-lg cursor-pointer">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddNote;
