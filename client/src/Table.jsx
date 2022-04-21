// import { useState, useEffect } from "react";
// import axios from "axios";

const Table = ({ users }) => {
  // const [Query, setQuery] = useState("");
  // const [Results, setResults] = useState(users);

  // const searchTable = async (e) => {
  //   setQuery(e.target.value);
  // };

  // useEffect(() => {
  //   const searchTerm = async () => {
  //     const res = await axios.get(`http://localhost:3001/api/?q=${Query}`);
  //     console.log(Query);
  //     setResults(res.data);
  //   };

  //   searchTerm();
  // }, [Query]);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>ID:</th>
            <th>Name:</th>
            <th>Email:</th>
            <th>Gender:</th>
          </tr>
          {users &&
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.first_name + " " + user.last_name} </td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
