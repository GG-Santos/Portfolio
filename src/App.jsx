import './App.css'
import { NavMenu } from './components/NavMenu'
import { GooeyCursor } from './components/GooeyCursor'
import { ScreenFilter } from './components/ScreenFilter'

import { Typewriter } from './components/Typewriter'
import { IconBar } from './components/IconBar'


function App() {
  return (
    <>
      <div className="noise-blur"></div> {/* Changed class to className */}
      <ScreenFilter />
      <GooeyCursor />
      <div className="pixel-blur"></div> {/* Changed class to className */}
      <NavMenu />

      <Typewriter /> 
      <IconBar />
    </>
  )
}

export default App