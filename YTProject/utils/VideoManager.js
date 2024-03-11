// Singleton.js
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

class VideoManager {
    
    constructor() {
        if (VideoManager.instance){
            return VideoManager.instance;
        }
        
      this.observer = null;
      this.data = null;
      this.videosData = null;
      this.tagsData = null;
      this.pollsData = null;

      VideoManager.instance = this;
     
    }

    async loadData() {
        //await asyn funct firebase...
         if (this.observer != null){
            this.observer(this.data)
            
         }
    }
  
  
    // Métodos adicionales de la clase Singleton
    subscribe(observer) {
        this.observer = observer;
        if (this.data != null){
            this.observer(this.data);
        }
      console.log(this.someData);
    }
  }

  const videoManager = new VideoManager();

  export default videoManager;
  