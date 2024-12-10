import './App.css'
import { NavMenu } from './components/NavMenu'
import { GooeyCursor } from './components/GooeyCursor'
import { ScreenFilter } from './components/ScreenFilter'
import { IconBar } from './components/IconBar'
import { HackerConsole } from './components/HackerConsole'
import { DraggableMenu } from './components/DraggableMenu'

function App() {
  return (
    <>
      <div className="noise-blur"></div>
      <ScreenFilter />
      <GooeyCursor />
      <div className="pixel-blur"></div>
      <NavMenu />

      <HackerConsole />
      <DraggableMenu />
      <IconBar />
    </>
  )
}

export default App