import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { db } from '../firebase';
import { useNavigation } from '@react-navigation/native'

import { doc, setDoc } from "firebase/firestore"; 




export default function SignInScreen () {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const navigation = useNavigation();

  const signUpUser = async () => {
    const auth = getAuth();

    if (email.length === 0 || password.length === 0) {
      return;
    }

    try {
      let userCredential = await createUserWithEmailAndPassword(auth, email, password);
      let uid = userCredential.user.uid;

      await setDoc(doc(db, "users", uid), {
        email: email
      });

      navigation.navigate('Home');

    } catch (err) {
      console.log(err);
    }
  }

  const loginUser = async () => {
    const auth = getAuth();

    if (email.length === 0 || password.length === 0) {
      return;
    }

    try {
      let userCredential = await signInWithEmailAndPassword(auth, email, password);
      let uid = userCredential.user.uid;

      navigation.navigate('Home');

    } catch (err) {
      console.log(err);
    }
  }

  
  return (
    <View>
      <TextInput
        style={styles.textinput}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.textinput}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
      />

      <Button title="Register User" onPress={signUpUser}/>
      <Button title="Login User" onPress={loginUser}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    borderWidth: 1,
    margin: 10,
  }
});
