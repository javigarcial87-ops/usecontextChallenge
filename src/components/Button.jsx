import { useContext } from "react";
import{ThemeContext} from "../themes/ThemeContext" 

const Button = ()=>{
    const {theme,toggleTheme} = useContext(ThemeContext)

    return(
        
        <button onClick={toggleTheme}>
        Cambiar tema{theme==="light"?"Dark":"Light"}
        </button>
        
    )
}

export default Button