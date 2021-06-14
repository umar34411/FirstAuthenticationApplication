import React, { useState, useEffect  } from 'react'
import { SafeAreaView, Button, Modal, Text, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth'
import firebase from '@react-native-firebase/app'
import firestore from '@react-native-firebase/firestore'

import UpdateName from '../../Modals/UpdateName'
import UpdatePassword from '../../Modals/UpdatePassword'

export default function Account() {

    const [updatename, setupdatename] = useState(false)
    const [ChangePassword, setChangePassword] = useState(false)
    let email=null

    const [AccountName, setAccountName] = useState()

    const handleNameVisibility = () => {
        setupdatename(!updatename);
    }


    const handlePasswordVisibility = () => {
        setChangePassword(!ChangePassword);
    }

    
    

    const getName = () => {

        var user = firebase.auth().currentUser;
        email=user.email
        console.log(email)

     
        if(email!=null)
        {
            firestore().collection('users').
        where('email', '==', email).get()
        .then(
            (snapshot) => {

                snapshot.forEach(doc => {
                    setAccountName(doc.data().name)
                    console.log("this is name :"+doc.data().name)
                })
            }
        ).catch((error) => console.log(error))
        }


    }


    useEffect(() => {
        getName();
    }, [email,updatename])

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.AccName}>{AccountName}</Text>
            <Button title="Update Name" onPress={handleNameVisibility} />
            <Button title="Change Password" onPress={handlePasswordVisibility} />
            <Button title="Sign Out" onPress={() => auth().signOut()} />
            <Modal visible={updatename} animationType='slide'>
                <UpdateName handleVisibility={handleNameVisibility} />
            </Modal>
            <Modal visible={ChangePassword} animationType='slide'>
                <UpdatePassword handleVisibility={handlePasswordVisibility} />
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    AccName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'tomato'
    }
})