import classes from './ThemesTable.module.css'
import Card from './Card'
import { useState, memo } from 'react';
import {titlesArray,filtersArray} from "./constants.js"


function ThemesTable ({setNewCategory}) {

 const [filtersVisible, showFilters] = useState(false)
 const [filters, setFilters] = useState([])

 function onCheck (e, index) {
  if (filters.includes(e.target.name)) {

  setFilters(filters.filter(el => !el.includes(e.target.name)))
  return
  }

  setFilters([...filters, e.target.name])
  
 }

 const filteredThemes = titlesArray.filter(el => filters.every(filter => el.attributes.includes(filter)))


return (
    <div className={classes.overlap4}>
        <div className={classes.header}>
            <p className={classes.headertext2}>Themes</p>
            <button className={classes.rectangle18} onClick={() => showFilters(!filtersVisible)}> 
               <div className={classes.headertext3}>Filter</div>
               <img
                className={classes.img2}
                alt="Group"
                src="./filter.png"
              />
            </button>
        </div>

{filtersVisible &&
        <div className={classes.frame5}>
           {filtersArray.map((el,i) => {
              
               return (
                     <div className={classes.cat} key={i}>
                        <label>
                            <input type="checkbox" name={el}  
                            checked={filters.includes(el) ? true : false}
                            onChange={(e) =>onCheck(e,i)}
                            />
                            <span>{el}</span>
                        </label>
                      </div>)})
             }
        </div> 
}
        
        <div className={classes.cardscontainer}>

           {filteredThemes.map(el => {
            return(<Card  title={el.name} key={el.name} setNewCategory={setNewCategory}/>)})  
           } 

        </div>

</div>
   )
}

export default memo(ThemesTable)