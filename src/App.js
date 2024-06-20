import BiddingAiTester from "./bidding-ai-tester/bidding-ai-tester";
import "./App.css";

function App() {
  const handleData = (value) => {
    console.log("To: ", value);
  };
  return (
    <div className="App">
      <BiddingAiTester sendData={handleData} />
    </div>
  );
}

export default App;
