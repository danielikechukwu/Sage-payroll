import './App.css'
import Header from "./components/headerComponent/Header";
import Body from './components/section/Main/Body';
import Navigator from './components/section/Navigator/Navigator';

function App() {
  return (
    <div className="App">
      
      <Header />

      <div className='lower__layer'>

          <Navigator />

          <Body />

      </div>

    </div>
  );
}

export default App;
