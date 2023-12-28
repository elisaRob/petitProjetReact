import s from "./style.module.css"

export function DisplayDifficulty(props){
    //on part du principe qu'on va recevoir une props qui va être la difficulté 
    //et on va afficher la difficulté qu'on nous envoie en props
    return(
    <div className={s.container}>
        {props.difficulty
            ? `Difficulty set to : ${props.difficulty}`
            : "No difficulty set"
        }
    </div>
    );
}