import logo from './logo.svg';
import './App.css';

const SampleArticles = {
  
}

function App() {
  return (
    <div className="App">
      <HelpCenter/>
    </div>
  );
}

function HelpCenter(){
  return (
    <div>
      <HCHeader>

      </HCHeader>
      <HCBody></HCBody>
    </div>
  )
}

function HCHeader(){
  return (
    <div>
      <HCSearchBar></HCSearchBar>
    </div>
  )
}

function HCSearchBar(){
  return (
    <div>

    </div>
  )
}

function HCBody(){
  return (
    <div></div>
  )
}

export default App;
