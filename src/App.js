import './App.css';
import Header from './components/header'
import Navbar from './components/navbar';
import MediaCard from './components/card';
import cardData from './components/cardsData';
import FetchData from './components/fitchApi';


function App() {
  return (
    <>
    <Header />
    <Navbar />
    <MediaCard details = {cardData} />
    <FetchData />
    </>
  );
}

export default App;
