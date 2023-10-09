
import { createContext, useState } from 'react';

export const SoundContext = createContext({
    selection: [],    
    toggleSelection: () => {}
 })



function SoundContextProvider ({children}) {

   const [selection, setSelection] = useState([])

    const toggleSelection = (category, gesture, sound) => {
    
    const search = selection.find(el => el.categoryName === category)

    if (selection.length === 0 || !search) {
      setSelection([...selection, {categoryName: category, gestures: [{gestureName: gesture, sound}] }])
      return
    }


    setSelection(selection.map(el => {
    if (el.categoryName === category && !search.gestures.find(el => el.gestureName === gesture)) {
        el.gestures =[...el.gestures, {gestureName: gesture, sound}]
        return el
    }
    el.gestures.map(e => {
      if (e.gestureName === gesture) {
        e.sound = sound
       }
    })
      return el
  }))
    }
   const value = {
    selection, 
    toggleSelection
   }

   return (
    <SoundContext.Provider value={value}>
      {children}
    </SoundContext.Provider>
  );
};

export default SoundContextProvider
