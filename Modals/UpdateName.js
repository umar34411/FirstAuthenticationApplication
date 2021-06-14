import React, { useState } from 'react'
import { View, Button, Text, SafeAreaView, StyleSheet } from 'react-native'
import firebase from '@react-native-firebase/app'
import firestore from '@react-native-firebase/firestore'


import TextInputComp from '../components/TextInputComp'

export default function UpdateName({ handleVisibility }) {

    const [name, setname] = useState();
    const [password, setpassword] = useState();
    let email=null;
    

    const handleName = (text) => {
        setname(text);
    }

    const handlepassword = (text) => {
        setpassword(text);
    }

    const getDocId=(snapshot)=>{
        let docId=null;
        snapshot.forEach(doc => {
                     
            console.log(doc.id)
            
            
          });
          return docId;
    }


    const reauthenticate = (currentPassword) => {
        var user = firebase.auth().currentUser
        email=user.email;
       
        var cred = firebase.auth.EmailAuthProvider.credential(
            user.email, currentPassword);
        return user.reauthenticateWithCredential(cred)
      }


      const handleUpdate=()=>{
          
      
        reauthenticate(password).then(
            ()=>{
               firestore().collection('users').
              where('email' , '==' , email).get()
              .then(
                (snapshot) => {
                    snapshot.forEach(doc => {
                     
                        console.log("id"+doc.id)
                        docId=doc.id;
                        
                        
                      });
                    
                    
                    firestore().collection('users').doc(docId).
                   update({
                       name:name
                   }).then(
                       ()=>{alert("Name Updated")
                           handleVisibility();
                    }
                   ).catch((error)=>console.log("inner :"+error))

                  }
              ).catch((error)=>alert("invalid password :"+error))

              
            }
        ).catch((error)=>alert("Outer :"+error))
    }



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.InputContainer}>
                <TextInputComp placeholder="New Name" handleChange={handleName} />
                <TextInputComp placeholder="Password" handleChange={handlepassword} />

                <Button title="Cancel" onPress={handleVisibility} />
                <Button title="Update" onPress={handleUpdate} />

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
        marginTop: 20,



    }
})