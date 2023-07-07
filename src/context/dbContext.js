import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../Firebase/Firebase";
import {v4 as uuid} from 'uuid'
import { doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";

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

    const saveAnimeFunction = async (anime) => {

        const newDoc = {
            id: uuid(),
            name: anime.name,
            description: anime.description,
            img: anime.img
        }


        const docRef = doc(db, "Animes", newDoc.id);
        await setDoc(docRef, newDoc).then(async() => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Éxito! Creado Correctamente!',
                showConfirmButton: false,
                timer: 1500,
            })
        }).catch((error) => {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Ops! algo salió mal!',
                showConfirmButton: false,
                timer: 1500,
            })
        } )

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
                user,
                saveAnimeFunction
            }}
        >
            {children}
        </dbContext.Provider>
    )
}