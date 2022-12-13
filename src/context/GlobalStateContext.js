import React, { createContext, useState, useContext, useEffect } from "react";
import { auth, projectFireStore } from '../firebase/config';

const initialState = {currentUser : null, currentScreen : 'users'}
const GlobalContext = createContext();
export function useGlobalContext(){
  return useContext(GlobalContext);
}

export const GlobalProvider = ({children}) => {

    const [state,setState] = useState(initialState);

    function setCurrentUser(user){
        setState((prev)=>{return {...prev, currentUser: user}});
    }

    function setCurrentScreen(screen){
        setState((prev)=>{return {...prev, currentScreen: screen}});
    }

    function updateRow(row, collectionName){
        projectFireStore.collection(collectionName).doc(row.uid).update(row);
    }
   

    useEffect(() => {

      const unsubscribe = auth.onAuthStateChanged(authUser => {
          // console.log(authUser);
          setState((prev)=>{
            return {...prev, currentUser: authUser};
        })
      })
  
      return unsubscribe;
    },[]);
    
    
    
     return (<GlobalContext.Provider value={
        {
            currentUser: state.currentUser,
            setCurrentUser,
            currentScreen: state.currentScreen,
            setCurrentScreen,
            updateRow
        }
     }>
        {children}
      </GlobalContext.Provider>);
}

