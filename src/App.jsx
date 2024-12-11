import './App.css'
import { NavMenu } from './components/NavMenu'
import { GooeyCursor } from './components/GooeyCursor'
import { ScreenFilter } from './components/ScreenFilter'
import { IconBar } from './components/IconBar'
import { HackerConsole } from './components/HackerConsole'
import { AlertButtons } from './components/AlertButtons'
import { BibleVerse } from './components/BibleVerse'
import { ParticleImage } from './components/ParticleImage/ParticleImage'


function App() {
  return (
    <>
      {/* <div className="noise-blur"></div>
      <ScreenFilter />
      <GooeyCursor />
      <div className="pixel-blur"></div>
      <NavMenu />
      <HackerConsole />

      <BibleVerse />
      <AlertButtons />
      <IconBar /> */}
      <ParticleImage />
      <div className="ParticleImage"></div>
    </>
  )
}

export default App