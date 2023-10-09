import {storage} from '../../configfb';
import {listAll, getDownloadURL, ref} from 'firebase/storage'

export async function getData (category) {
    const res = await fetch(`https://philosophers-469d2-default-rtdb.firebaseio.com/${category}.json`)
    const data = await res.json()
    const List = (await listAll(ref(storage, `${category}/`))).items
    const urls = await Promise.all(List.map(async (el) => {
          const url = await getDownloadURL(el)
          return url
   }))
  
   
  
    const sounds = Object.values(data.sounds)
  
     sounds.map(sound => {
       sound.map(obj => {
        obj.url = urls.find(url => url.includes(obj.name))
       })
           
          
         
     })
     return {sounds, categoryName: data.categoryName, gestureList: Object.keys(data.sounds)}
  }