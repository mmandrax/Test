import classes from './SonifiqHeader.module.css'
import MenuBar from "./MenuBar";
import LeftBar from "./LeftBar";
import ActionsButtons from "./ActionsButtons";
import {memo} from 'react'

function SonifiqHeader () {
    
    return (
        <div className={classes.overlap2}>
        <MenuBar /> 
         <img
            className={classes.union2}
            alt="Union"
            src="https://generation-sessions.s3.amazonaws.com/bae34e3f8c45a4d2012214a57efe7dcf/img/union-1.svg"
        />
        <div className={classes.web4}>Brandfit and customize</div>
        <p className={classes.p}>Select a theme and customize the sound</p>
        <LeftBar />
        <ActionsButtons />  
     
        
        </div>
    )
}

export default memo(SonifiqHeader)