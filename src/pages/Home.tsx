//useState - react hook that manages state inside a functional component
//useEffect - react hook that runs side effects in functional components
//axios - a library for making http requests
import axios from "axios";
import { useState, useEffect } from "react";
//link - allows navigation without reloading
import { Link } from "react-router-dom";

//this is a typescript interface
interface Note {
  id: number;
  title: string;
  content: string;
}

//define home component using arrow syntax
const Home = () => {
  //notes - an array for storing notes
  //setNotes - a function to update notes
  //initializes as an empty array
  //Note[] is an array of notes objects
  const [notes, setNotes] = useState<Note[]>([]);
  //runs once when the compomnent mounts
  useEffect(() => {
    axios.get("http://localhost:5000/notes").then((res) => setNotes(res.data));
  }, []);

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:5000/notes/${id}`);
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-lg font-bold mb-2">Notes</h1>
      <Link
        to="/add"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 text-xs flex items-center justify-center"
      >
        Add Note
      </Link>

      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            className="border-white p-3 mt-4 shadow-lg rounded-lg"
          >
            <h2 className="font-semibold">{note.title}</h2>
            <p>{note.content}</p>
            <Link to={`/edit/${note.id}`} className="text-blue-500">
              Edit
            </Link>
            <button
              onClick={() => handleDelete(note.id)}
              className="text-red-500 ml-2 cursor-pointer"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
