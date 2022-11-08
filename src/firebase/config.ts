import firebase from "firebase"
import 'firebase/firestore'

if(!firebase.apps.length){
    firebase.initializeApp({
        apikey: process.env.NEXT_PUBLIC_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_auth_domain,
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    })
}

export default firebase