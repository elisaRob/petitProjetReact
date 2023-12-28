import s from "./style.module.css";
import {useState} from "react"
export function MenuListItem({onClick, difficulty, isSelected}){

    const [isHovered, setIsHovered] = useState(false);
    //console.log(isHovered)

    function sourisQuiEntre(){
        setIsHovered(true)
    }

    function sourisQuiPart(){
        setIsHovered(false)
    }

    function getBackgroundColor(){
        if( isHovered ){
            return "#a5e9ff";
        }else if(isSelected){
            return "#26baea";
        }else{
            return "#eff0ef";
        }
    }

    return(
        <div 

            onClick={()=>onClick(difficulty)}

            style= {{
                backgroundColor:getBackgroundColor()
            }}
            className={s.container} 
            onMouseEnter={sourisQuiEntre} 
            onMouseLeave={sourisQuiPart}
        >
            Set to : {difficulty}
        </div>
    );
}