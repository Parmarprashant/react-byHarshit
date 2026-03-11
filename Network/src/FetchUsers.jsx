import { useEffect, useState } from 'react';

const URL = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setUsers(data);   // ✅ now works
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;