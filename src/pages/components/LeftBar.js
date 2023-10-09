import classes from './LeftBar.module.css'
// import  ElementBulb  from "../../icons/ElementBulb/ElementBulb";
// import  ElementFolder  from "../../icons/ElementFolder/ElementFolder";
// import  TwentyX20Ic20ArrowLeft1  from "../../icons/TwentyX20Ic20ArrowLeft1";

function LeftBar () {
    return (
    <div className={classes.group42}>
    <div className={classes.bulbwrapper}>
      <img
        className={classes.img2}
        alt="Group"
        src="./wave.png"
      />
    </div>
    <div className={classes.bulbwrapper}>
    <img
        className={classes.img2}
        alt="Group"
        src="./folder.png"
      />

    </div>
    <div className={classes.bulbwrapper}>
    <img
        className={classes.img2}
        alt="Group"
        src="./licht.png"
      />
  
    </div>
    <div className={classes.group44}>
    <img
        className={classes.img2}
        alt="Group"
        src="./back.png"
      />
      Back
    </div>
  </div>
    )
}

export default LeftBar;