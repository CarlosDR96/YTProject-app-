// Singleton.js
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

class VideoManager {
    
    constructor() {
        if (VideoManager.instance){
            return VideoManager.instance;
        }
        
      this.observer = null;
      this.videosData = null;
      this.tagsData = null;
      this.pollsData = null;

      VideoManager.instance = this;
     
    }

    async loadTagsData() {
        //await asyn funct firebase...
         try {
          const tagsCol = collection(db, "Tags");
          const tagsSnapshot = await getDocs(tagsCol);
          const tagsListData = tagsSnapshot.docs.map(doc => doc.data());
          this.tagsData = tagsListData[0].Values;
          console.log("Video manager TAGS " + this.tagsData[0])

          if (this.observer != null){
             this.observer(this.tagsData)
          }

         }
         catch (error){
          console.log(error)
         }
    }

    async loadVideosData(){
    
        //this.observer(this.data)
        try {
          const videosCol = collection(db, 'Videos');
          const videoSnapshot = await getDocs(videosCol);
          const videosListData = videoSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          this.videosData = videosListData;

          if (this.observer != null){
           this.observer(this.videosData)
          }

         }
         catch (error){
          console.log(error)
         }
    }

    async loadPollsData(){
      try {
        // console.log(db);
         const pollsCol = collection(db, 'Polls'); // Accede a la colección 'Users'
         const pollsSnapshot = await getDocs(pollsCol); // Obtiene todos los documentos
         const pollsListData = pollsSnapshot.docs.map(doc => doc.data()); // Mapea cada documento a su data
         this.pollsData = pollsListData;
        
         if (this.observer != null){
          this.observer(this.pollsData)
         }
     
       } catch (error) {
         console.log(error);
       }
    }
  
  
    // Métodos adicionales de la clase Singleton
    subscribe(observer, dataType) {
        this.observer = observer;

        if (dataType === 1 && this.videosData != null){
            this.observer(this.videosData);
        }
        if (dataType === 2 && this.tagsData != null){
          this.observer(this.tagsData)
        }
        if (dataType === 3 && this.pollsData != null){
          this.observer(this.pollsData)
        }
    }

  }

  const videoManager = new VideoManager();

  export default videoManager;
  