import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";

import "./App.css";

// Lets fetch data from backend

const App = () => {
  const [Users, setUsers] = useState(null);
  const [SearchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3001/?q=${SearchTerm}`);
      setUsers(res.data);
    };
    fetchData();
  }, [SearchTerm]);

  return (
    <div>
      <div>
        <input
          type="text"
          className="search"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
      </div>
      {/* <p>{SearchTerm}</p> */}
      <Table users={Users} />
    </div>
  );
};

export default App;
