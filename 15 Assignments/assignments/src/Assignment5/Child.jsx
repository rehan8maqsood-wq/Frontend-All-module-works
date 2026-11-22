function Child({ sendMessage }) {
  const handleClick = () => {
    sendMessage("Hello Parent!");
  };

  return (
    <div>
      <h2>Child Component</h2>

      <button onClick={handleClick}>
        Send Message
      </button>
    </div>
  );
}

export default Child;