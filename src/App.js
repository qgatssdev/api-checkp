import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Userlist from './Userlist';

function App() {
  const [user, setUser] = useState('');
  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>User List</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Phone no</th>
          <th>Website</th>
        </tr>

        <Userlist Users={user} />
      </table>
      <p>working?</p>
    </div>
  );
}

export default App;
