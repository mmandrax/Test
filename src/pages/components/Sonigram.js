import classes from './Sonigram.module.css'
import { useRef, useContext } from 'react';
import { SoundContext } from './SoundContextProvider';




const ButtonGroup = ({styleClass, title, onPlay, group, value}) => {
  return (
  <div className={styleClass}>

    <input type="radio" 
            id={title + "group" + group + "a"} 
            name={title + "group" + group} 
            className={classes.inputasbutton} 
            onClick={() => onPlay(value[0])}
            defaultChecked={true}
            
    />
      <label className={classes.buttonlabel} htmlFor={title + "group" + group + "a"} >
        <img
          className={classes.img2}
          alt="One"
          src= "./one-star.png"
        />
      </label>

    <input type="radio" 
           id={title + "group" + group + "b"} 
           name={title + "group" + group} 
           className={classes.inputasbutton} 
           onClick={() => onPlay(value[1])}
    /> 
    <label className={classes.buttonlabel} htmlFor={title + "group" + group + "b"}>
      <img
        className={classes.img2}
        alt="Two"
        src="./two-stars.png"
      />
    </label>

    <input type="radio" 
           id={title + "group" + group + "c"} 
           name={title + "group" + group} 
           className={classes.inputasbutton} 
           onClick={() => onPlay(value[2])}
    />
    <label className={classes.buttonlabel}htmlFor={title + "group" + group + "c"}>
      <img
        className={classes.img2}
        alt="Three"
        src="./three-stars.png"
     />
    </label>

  </div>
  )
}


function Sonigram({soundsmatrix, title, categoryName}) {
  const {toggleSelection} = useContext(SoundContext);

 const sound = useRef(null)
 const matrixindex = useRef([1,"reduced"])


function onPlay(value) {

switch (typeof value) {
  case "object" :
  
    sound.current.play()
  break;

  case "number":
    matrixindex.current = [value, matrixindex.current[1]]
    sound.current.src= soundsmatrix.find(sound => sound.url.includes(matrixindex.current[1] + matrixindex.current[0])).url
    sound.current.play()
  break;

  case "string":
    matrixindex.current = [matrixindex.current[0], value]
    sound.current.src= soundsmatrix.find(sound => sound.url.includes(matrixindex.current[1] + matrixindex.current[0])).url
    sound.current.play()
  break;

}
toggleSelection(categoryName.replace(/\s/g, "_"), title, soundsmatrix.find(el => el.url === sound.current.src))

}


return (

    <div className={classes.flexsonigram}>
     
       <div className={classes.textwrapper6}>LENGTH</div>
       <div className={classes.LENGTH}>DETAILS</div>

      <div className={classes.option} onClick={() => onPlay({})}>
         <img
           className={classes.img3}
           alt="One"
           src= "./icon-play.png"
         />
          <div className={classes.option2}>{title}</div> 
      </div> 

      <ButtonGroup title={title} styleClass={classes.framewrapper1} group={1} onPlay={onPlay} value={[1,2,3]}/> 
      <ButtonGroup title={title} styleClass={classes.framewrapper2} group={2} onPlay={onPlay} value={["reduced", "moderate", "complex"]}/>  
       
       <audio ref={sound} src={soundsmatrix[0].url}></audio>

       <div className={classes.elementdownloadwrapper}>
       <img
        className={classes.img4}
        alt="Group"
        src="./download.png"
       />
       </div>

       <div className={classes.rectangle2} />
    </div>

)

}

export default Sonigram;