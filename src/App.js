import './App.css';
import { Home, About } from './components';
import { Header, Footer } from './constans';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
