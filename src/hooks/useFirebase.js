import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initilizeAuthentication from "../Pages/Login/Firebase/firebase.init";

initilizeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {

        return signInWithPopup(auth, provider)
        // .then((result) => {
        //     console.log(result)
        //     setUser(result.user)

        // }).catch((error) => {
        //     setError(error)

        // });

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            ;
        });
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        // setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
        //         .finally(() => setIsLoading(false));
    }
    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        setUser,
        setError
    }



}
export default useFirebase;




































