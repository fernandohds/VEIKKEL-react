import  { useState } from "react";
import {collection, getDocs, doc, getDoc} from "firebase/firestore";
import db from "../service/firebase";
import { useNavigate } from "react-router-dom";

const useFireStore = () => {

  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(false);
  const [individual, setIndividual] = useState();
  
  const getData = async () => {
    setLoad(true)
    try{ 
        const data = collection(db, "items")
        const col = await getDocs(data)
        const result = col.docs.map((doc) => (doc={id: doc.id,...doc.data()})
        );
        setItems(result)
        setLoad(false)
    } catch (error) {
        console.log(error);
        setLoad(false)
    }
    
    };
    const getIndividualData = async ({id})=>{

      setLoad(true)

      try{

        const document = doc(db, "items", id);
        const response = await getDoc (document)
        const resultado = {id:response.id,...response.data()}
        setIndividual(resultado)
        setLoad(false)
      }catch(error){
        console.log(error)
        setLoad(false)
      }
    }
    return {
      getData,
      items,
      load,
      individual,
      getIndividualData,
    }
    
  }

  

export default useFireStore;