import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initilizeAuthentication from "../Pages/Login/Firebase/firebase.init";

initilizeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
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

    // Get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
            if (signedInUser) {
                setUser(signedInUser);
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, []);

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
        setError,
        loading
    }



}
export default useFirebase;




































