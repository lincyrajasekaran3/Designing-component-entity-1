import Usercard from "../src/components/usercard"; // Ensure the file name matches exactly

function App() {
  const cards = Array.from({ length: 10 }); // Creating an array of 10 user cards

  return (
    <div className="app-container">
      <h1 className="title">Admin Portal</h1>
      <div className="user-grid">
        {cards.map((_, index) => (
          <Usercard key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
