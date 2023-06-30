import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase";

export const dbContext = createContext();

export const useDb = () => {
    const context = useContext(dbContext);
    return context;
}

export function DbProvider ({children}){
    const [user, setUser] = useState(null);


    const loginFunction = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
      });

      return unsubscribe();
    }, [])
    

    return(
        <dbContext.Provider
            value={{                
                loginFunction,
                user
            }}
        >
            {children}
        </dbContext.Provider>
    )
}