import TopBar from './Components/TopBar';
import './App.css';
import Container from './Components/Container';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
