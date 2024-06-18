import { useState } from 'react';
import stasisLogo from './assets/stasis-logo.svg';
import foxImage from './assets/fox.png';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://stasis.net/eurs-info" target="_blank">
          <img src={stasisLogo} className="logo" alt="Stasis logo" />
        </a>
      </div>
      <h2>Tap on funny fox!</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <img 
          src={foxImage} 
          className="picture" 
          alt="Fox" 
          onClick={() => setCount(count + 1)}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </>
  )
}

export default App
