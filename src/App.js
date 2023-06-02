import './App.css';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import Slideshow from './Components/Slideshow';
import Itemslist from './Components/Items_list';
function App() {
  return (
    <div className="App">
      <Home />

      <Sidebar/>
      <Slideshow />
      <Itemslist />
    </div>
  );
}

export default App;
