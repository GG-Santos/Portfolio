import './App.css'
import { NavMenu } from './components/NavMenu'
import { GooeyCursor } from './components/GooeyCursor'
import { ScreenFilter } from './components/ScreenFilter'
import { IconBar } from './components/IconBar'
import { HackerConsole } from './components/HackerConsole'

function App() {
  return (
    <>
      <div className="noise-blur"></div> {/* Changed class to className */}
      <ScreenFilter />
      <GooeyCursor />
      <div className="pixel-blur"></div> {/* Changed class to className */}
      <NavMenu />

      <HackerConsole />

      <IconBar />
    </>
  )
}

export default App