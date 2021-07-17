import './App.css';
import Header from './components/header/Header';
import Cards from './components/cards/Cards'
import SwipeButtons from './components/SwipeButtons/SwipeButtons'

function App() {
  return (
    // BEM class naming convention
    <div className="app">
       <Header />
       <Cards />
       <SwipeButtons />
    </div>
  );
}

export default App;