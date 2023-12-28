import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList"
import { useState } from "react"
import s from "./style.module.css"


function App() {

  const [currentDifficulty, setCurrentDifficulty] = useState("")

  function updateDifficulty(difficulty){
      setCurrentDifficulty(difficulty)
  }

  return (
    <div className="app">
      <h1 className={s.title}>Select your React difficulty</h1>
      <div className={s.workspace}>
          <MenuList 
            onItemClick={updateDifficulty} 
            difficulty={currentDifficulty}
           
          />
          <DisplayDifficulty difficulty={currentDifficulty}/>
      </div>

     
    </div>
  );
}

export default App;
