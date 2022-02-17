import { Text, View } from 'react-native';
import { useEffect } from 'react';

import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; 
import { db } from '../firebase';


export default function HomeScreen () {


  const getUserInfo = async (user) => {
    const docRef = doc(db, 'users', user.uid)
    let docSnap = await getDoc(docRef)
    if(docSnap.exists) {
      console.log(docSnap.data())
    }
  }




  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // ...
      
      getUserInfo(user);
      
    } else {
      // No user is signed in.
    }
  }, [])


  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}