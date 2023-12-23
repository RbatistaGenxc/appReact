import React from "react";

function useLocalStorage(itemName, initialValue){
  
    const[item, setItem] = React.useState(initialValue);

    const[loading, setLoading] = React.useState(true);

    const[error, setError] = React.useState(false);

    const LCItem= localStorage.getItem(itemName);
 
   let parsedItem;
 
  React.useEffect(() => {  
    
    setTimeout(() => {
          try{

            if(!LCItem){
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItem = [initialValue];
            } else{
              parsedItem = JSON.parse(LCItem);
              saveItem(parsedItem);
            }
        
            setLoading(false);

        } catch(error){
          setError(true);
        }

    }, 2000 );
    
  }, []);
 
   
 
   const saveItem = (newItem) => {
     localStorage.setItem(itemName, JSON.stringify(newItem));
     setItem(newItem);
   };
 
   return {
        item, 
        saveItem, 
        loading, 
        error
      }
 
 }

 export {useLocalStorage}