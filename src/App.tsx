import { useState } from 'react'
import eursLogo from './assets/eurs.svg'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://stasis.net/eurs-info" target="_blank">
          <img src={eursLogo} className="logo" alt="EURS logo" />
        </a>
      </div>
      <h1>STASIS App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
