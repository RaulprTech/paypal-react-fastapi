import "./App.css";
import PaypalButton from "./components/PaypalButton";

function App() {
  return (
    <div className="container">
      <div className="card">
        <header className="header">
          <h1 className="title">Paga Aqui</h1>
        </header>
        <PaypalButton />
      </div>
    </div>
  );
}

export default App;