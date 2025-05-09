import TopBar from './Components/TopBar';
import './App.css';
import Container from './Components/Container';

function App() {
  return (
    <div className="App">
      <TopBar />
      <main className="App-header">
        <Container />
      </main>
    </div>
  );
}

export default App;
