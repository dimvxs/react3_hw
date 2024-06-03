import logo from './logo.svg';
import './App.css';
import {Block1} from './components/block1';
import { Block2 } from './components/block2';
import { Block3 } from './components/block3';

function App() {
  return (
    <div className="App">
<Block1 price = "14.99$" name = "summer" gbValue ="5GB" limit = "no"></Block1>
<Block2 price = "19.99$" name = "winter" gbValue ="15GB" limit = "yes"></Block2>
<Block3 price = "29.99$" name = "autmn" gbValue ="10GB" limit = "no"></Block3>
    </div>
  );
}

export default App;
