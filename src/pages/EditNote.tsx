import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditNote = () => {
  //extracts id from the url
  const { id } = useParams();
  //title and content store the note's existing details
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  //runs whenever the component is mounted
  //[id] is the dependency array which runs useEffect whenever the id for the note changes
  useEffect(() => {
    axios.get(`http://localhost:5000/notes/${id}`).then((res) => {
      //updates title and content with the response data
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/notes/${id}`, { title, content });
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        className="border p-2 mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="border p-2 mb-2"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button className="bg-blue-500 text-white px-4 py-2">Update</button>
    </form>
  );
};

export default EditNote;
