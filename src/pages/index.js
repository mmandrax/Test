
import classes from '../styles/Home.module.css'
import SonifiqHeader from './components/SonifiqHeader';
import ThemesTable from './components/ThemesTable';
import Sonigram from "./components/Sonigram";
import {useState} from 'react';
import SonigramHeader from './components/SonigramHeader';
import { getData } from './getData';
import SoundContextProvider from './components/SoundContextProvider';




function Home ({sounds, gesturelist, categoryName}) {

  const [soundsmatrix, setNewCategory] = useState({sounds, gesturelist, categoryName})

return (
<SoundContextProvider> 
<div className={classes.container}>
<SonifiqHeader />
<ThemesTable setNewCategory={setNewCategory}/>       
  
<div className={classes.overlap}>

  <SonigramHeader categoryName={soundsmatrix.categoryName}/>
  <div className={classes.rectangle} /> 
 
   {soundsmatrix.gesturelist.map((gesture,i) => {

    return <Sonigram title={gesture} soundsmatrix={soundsmatrix.sounds[i]} categoryName={soundsmatrix.categoryName} key={i}/>
   
   })}   
  
</div>  
</div>
</SoundContextProvider>  


)}

export default Home;



export const getStaticProps = async () => {

const data = await getData("Basic_Sounds")

return {
    props: {
      categoryName : data.categoryName,
      sounds: data.sounds,
      gesturelist: data.gestureList
    
    }
  }
}

  

