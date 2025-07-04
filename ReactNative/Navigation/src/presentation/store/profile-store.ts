// Importamos la función `create` desde la librería Zustand.
// Esta función nos permite crear un estado global (como un store tipo Redux, pero mucho más ligero).
import { create } from "zustand"

// Definimos una interfaz `ProfileState` que describe la forma (estructura) del estado.
// En este caso, el estado tiene dos propiedades: `name` y `email`, ambas son strings.
export interface ProfileState {
    name: string,
    email: string,
    onchangeName:(name:string) => void,
    onchangeEmail:(email:string) => void,
    onResetName:() => void;
    onResetEmail:() => void;
}

// Creamos un store global llamado `useProfileStore` utilizando Zustand.
// Este store tiene el tipo `ProfileState`, lo que asegura que siempre tenga `name` y `email` como strings.
export const useProfileStore = create<ProfileState>()((set, get) => ({
    // Valor inicial de `name`
    name: 'Benjamin',

    // Valor inicial de `email`
    email: 'benjamin@gmail.com',

    //agregar valor a las variables
    onchangeName(name:string){
         set({name:name});
    },

    onchangeEmail(email:string){
        set({email:email});
    },

    /*reseteamos las variables */
    onResetName() {
        set({name:''});
    },

    onResetEmail(){
        set({email:''});
    }
}))
