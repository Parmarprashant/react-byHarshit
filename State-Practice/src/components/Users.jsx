function Users({ users, increaseId , deleteuser}) {
  return (
    <div>
      {users.map((data) => (
        <div className = "users" key={data.id}>
            <p>Id : {data.id}</p>
          <p>Firstname: {data.firstname}</p>
          <p>lastname: {data.lastname}</p>
          <p>age: {data.age}</p>
          <button onClick={()=>{
            increaseId(data.id)
          }}>increase age</button>

          <button onClick={()=>{
            deleteuser(data.id)
          }}>delete user </button>
        </div>
      ))}
    </div>
  );
}

export default Users;
