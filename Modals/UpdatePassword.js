import React , {useState} from 'react'
import { View,Button, Text ,SafeAreaView, StyleSheet } from 'react-native'
import firebase from '@react-native-firebase/app'

import TextInputComp from '../components/TextInputComp'



export default function UpdatePassword({handleVisibility}) {

    const [CurrentPassword, setCurrentPassword] = useState();
    const [newPassword, setnewPassword] = useState();

    handleCurrentPassword=(text)=>{
        setCurrentPassword(text);
    }
    handlenewPassword=(text)=>{
        setnewPassword(text);
    }

    const reauthenticate = (currentPassword) => {
        var user = firebase.auth().currentUser;
        
        var cred = firebase.auth.EmailAuthProvider.credential(
            user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
      }

      changePassword = (CurrentPassword, newPassword) => {
        reauthenticate(CurrentPassword).then(() => {
          var user = firebase.auth().currentUser;
          user.updatePassword(newPassword).then(() => {
            alert("Password updated!");
            handleVisibility()
          }).catch((error) => { console.log(error); });
        }).catch((error) => { console.log(error); });
      }

      const handleUpdate=()=>{
        changePassword(CurrentPassword,newPassword);
      }

    return (
        
        <SafeAreaView style={styles.container}>
        <View style={styles.InputContainer}>
            <TextInputComp placeholder="Current Password"  handleChange={handleCurrentPassword}/>
            <TextInputComp placeholder="New Password" handleChange={handlenewPassword}  />

            <Button title="Cancel" onPress={handleVisibility} />
            <Button title="Update" onPress={()=>handleUpdate()} />

        </View>
    </SafeAreaView>
   

    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',

    },
    InputContainer: {

        width: '80%',
        marginTop:20,



    }
})