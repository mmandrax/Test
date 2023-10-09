import { useContext } from 'react';
import classes from './ActionsButtons.module.css'
import { SoundContext } from './SoundContextProvider';

function ActionsButtons () {
  const {selection} = useContext(SoundContext);
   
  return (
    <>
    <div className={classes.group45} onClick={() => {console.log(selection)}}>
        <img
        className={classes.img2}
        alt="Group"
        src="./folder.png"
       />
        <div className={classes.web6}>Save</div>
    </div>



    <div className={classes.group46}>        
        <img
        className={classes.img2}
        alt="Group"
        src="./download.png"
        />
        <div className={classes.web6}>Download all</div>
    </div>
  

      

    </>
   )
}

export default ActionsButtons