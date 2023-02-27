import './App.css';
import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';
import declarative from './images/icon1.png';
import components from './images/icon2.png';
import singleWay from './images/icon3.png';
import jsx from './images/icon4.png';

function App() {
  const header = <nav className='navbar-flex'><img src={logo} className="App-Logo" alt="logo" /> <img src={menu} className="App-Logo" alt="menuBtn" /></nav>
  const h1 = <h1 className='titulo'>Say hello to ReactJS</h1>
  const parag = <p className='parag'>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
  const button = <button>Awesome!</button>
  const footer = <footer className='flex'>
    <div className='footDiv'>
      <img src={declarative} className="image" alt="images" />
      <h2>Declarative</h2>
      <p>React makes it painless to create interactive UIs.</p>
    </div>
    <div className='footDiv'>
      <img src={components} className="image" alt="images" />
      <h2>Components</h2>
      <p>Build encapsulated components that manage their state.</p>
    </div>
    <div className='footDiv'>
      <img src={singleWay} className="image" alt="images" />
      <h2>Single-Way</h2>
      <p>A set of immutable values are passed to the component's.</p>
    </div>
    <div className='footDiv'>
      <img src={jsx} className="image" alt="images" />
      <h2>JSX</h2>
      <p>Statically-typed, designed to run on modern browsers.</p>
    </div>
  </footer>

  return (
    <div className="App">
      {header}
      <main className='App-header'>
        {h1}
        {parag}
        {button}
      </main>
      <div className='App-footer'>
        {footer}
      </div>
    </div>
  );
}

export default App;
