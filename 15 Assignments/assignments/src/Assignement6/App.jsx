import { useState } from "react";
import Input from "./Input";
import Display from "./Display";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Lifting State Up</h1>

      <Input name={name} setName={setName} />

      <Display name={name} />
    </div>
  );
}

export default App;