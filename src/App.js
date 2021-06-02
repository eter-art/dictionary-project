import './App.css';
import Dictionary from "./Dictionary";


 export default function App() {
  return (
    <div className="App">
      <div className="container">
     <header className="App-header"> </header>
<main>
    <Dictionary defaultKeyword= "Love" />
  </main> 
   <footer className="App-footer"><small>coded by Eter Artmeladze</small></footer>
 </div>
 </div>
  );
}


