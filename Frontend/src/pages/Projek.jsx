import { useState } from "react";

export default function Projek() {
  const [title, setTitle] = useState("");
  
  const handleSubmit = () => {
    console.log("Upload projek", title);
  }

  return (
    <div>
      <h1>Projek</h1>

      <input 
        placeholder="Judul Projek"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}