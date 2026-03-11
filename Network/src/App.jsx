import { useState } from "react";
import FetchUsers from "./FetchUsers";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Unmount Component" : "Mount Component"}
      </button>

      <hr />

      {show && <FetchUsers />}
    </div>
  );
}

export default App;