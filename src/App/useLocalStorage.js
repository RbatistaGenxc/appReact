import React from "react";

function useLocalStorage(itemName, initialValue){
  
    const LCItem= localStorage.getItem(itemName);
 
   let parsedItem;
 
   if(!LCItem){
     localStorage.setItem(itemName, JSON.stringify(initialValue));
     parsedItem = [initialValue];
   } else{
     parsedItem = JSON.parse(LCItem);
   }
 
   const[item, setItem] = React.useState(parsedItem);
 
   const saveItem = (newItem) => {
     localStorage.setItem(itemName, JSON.stringify(newItem));
     setItem(newItem);
   };
 
   return[item, saveItem]
 
 }

 export {useLocalStorage}