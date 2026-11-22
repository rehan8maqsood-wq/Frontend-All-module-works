function Child({ studentName, changeName }) {
  const sendNewName = () => {
    changeName("Rahul");
  };

  return (
    <div>
      <h2>Child Component</h2>

      <p>Student Name: {studentName}</p>

      <button onClick={sendNewName}>
        Change Name
      </button>
    </div>
  );
}

export default Child;