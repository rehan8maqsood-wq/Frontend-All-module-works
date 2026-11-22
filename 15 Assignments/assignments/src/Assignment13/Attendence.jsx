import { useState } from "react";

function Attendance() {
  const [present, setPresent] = useState(0);

  return (
    <div>
      <h2>Attendance</h2>

      <p>Present: {present}</p>

      <button
        onClick={() => setPresent(present + 1)}
      >
        Present +
      </button>

      <button
        onClick={() => {
          if (present > 0) {
            setPresent(present - 1);
          }
        }}
      >
        Present -
      </button>
    </div>
  );
}

export default Attendance;