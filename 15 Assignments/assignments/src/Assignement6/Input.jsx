function Input({ name, setName }) {
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter name"
      />
    </div>
  );
}

export default Input;