import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="city-name-section">
          <h1>Aranan Şehir</h1>
        </div>
        <div className="search-bar-section">
          <select className="search-bar"></select>
        </div>
        <div className="daily-status-section">
          <div className="status-container">
            <div className="status-left"></div>
            <div className="status-right"></div>
          </div>
        </div>
        <div className="weather-week">
          <div className="days"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
