import React ,{useState} from 'react'
import { View, Text, SafeAreaView , StyleSheet, Button } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';


import terms from '../../config/terms'
import colors from '../../config/colors';



export default function SignUp3({route}) {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const{name,email,password}=route.params




    const signup=()=>{
        auth().createUserWithEmailAndPassword(email,password).
        then(
           ()=>{
            firestore()
            .collection('users')
            .add({
              name: name,
              email: email,
              type:"member"
            })
            .then(() => {
              alert("Success")
            }).catch(
                ()=>alert("failed to add in forestore")
            )
           }
        ).
        catch(
            ()=>alert("Failed")
        )


       
    }
    

    return (
        <SafeAreaView  style={styles.container}>
         <View style={styles.contentContainer}>
             <Text style={styles.heading}>Terms & Conditions</Text>
         <Text style={styles.text}>{terms.termsAndConditions}</Text>

      <View style={styles.agreement}>
         <CheckBox
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
       /><Text style={{marginHorizontal:10  ,fontSize:24,}}>Agree</Text>
       </View>
       <Button title="Sign Up" onPress={()=>signup()} disabled={!toggleCheckBox}/>
         </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
       flex:1,
       alignItems:'center',
       
    },
    contentContainer:{
        marginTop:'30%',
        marginHorizontal:20,
        alignItems:'center',
        
    },
    text:{
        fontWeight:'bold',
        marginBottom:10,
        color:colors.secondaryText
    },
    heading:{
        fontSize:32 , fontWeight:'bold' , marginBottom:10
    },
    agreement:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:200,
        marginBottom:10,
       
    }
})