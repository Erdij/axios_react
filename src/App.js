import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState("");
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data[id].title));
  }, [data, id]);

  return (
    <div className="App">
      <h1>{data}</h1>
      <p>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </p>
    </div>
  );
}
export default App;
