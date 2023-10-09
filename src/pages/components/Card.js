
import classes from "./Card.module.css"


const Card = ({title, setNewCategory}) => {

const getSoundCategory = async (category) => {


try{
   const jsonData = await fetch('/api/getsoundcategory', 
   {
    method: "GET",
     headers: {
       "Content-type": "text/plain",
       "Message": category.replace(/\s/g, "_"),
     }
     })

   const data = await jsonData.json()
   setNewCategory({  
      categoryName : data.categoryName,
      sounds: data.sounds,
      gesturelist: data.gestureList  
    });
}
catch {
  alert("Not available")
}
}

return (
  
<>
<input type="radio" 
id={title}
name={"Category Group"} 
className={classes.inputasbutton} 
onChange={() =>  getSoundCategory(title)}
/>
<label className={classes.buttonlabel} htmlFor={title} >
{title}
</label>
</>
)}

export default Card