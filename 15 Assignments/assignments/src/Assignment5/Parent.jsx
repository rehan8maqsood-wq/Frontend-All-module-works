import Child from "./Child";

function Parent() {
  const receiveMessage = (message) => {
    alert(message);
  };

  return (
    <div>
      <h1>Parent Component</h1>

      <Child sendMessage={receiveMessage} />
    </div>
  );
}

export default Parent;