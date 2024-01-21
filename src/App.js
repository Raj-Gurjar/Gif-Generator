import './App.css';
import RandomGif from './components/RandomGif';
import SearchGif from './components/SearchGif';
import Loader from './components/Loader';

function App() {
  return (
    <div className="App">
      <h1 className='text-3xl text-red-500 bg-slate-300 my-5'>Gif- Generator</h1>

      <div className="mega-cntnr
       bg-amber-300 
       flex justify-center align-middle  gap-10 flex-wrap items-center
       p-5">
        <RandomGif />
        <SearchGif />
      </div>
     

    </div>
  );
}

export default App;

