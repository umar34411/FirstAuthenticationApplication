import React , {useState,useEffect} from 'react'

import { View, Text, SafeAreaView, StyleSheet, StatusBar, Button } from 'react-native'


import TextInputComp from '../../components/TextInputComp'

export default function Signup2({navigation , route}) {

    const [password, setpassword] = useState();
    const [confirmpassword, setconfirmpassword] = useState();

    const {name,email}=route.params;

    const handlepassword = (text) => {
        setpassword(text);
    }
    const handleconfirmpassword = (text) => {
        setconfirmpassword(text);
    }

    function validatePassword(pass)
    {
        if(pass.length >=6)
        {return true}
        else {
            return false
        }
    }

    function goToSignUp2(password,confirmpassword){
     
        if(!password || !confirmpassword)
      {
          alert("both feilds are necessary");
      }else{
        if(!validatePassword(password))
        {
            alert("Password must contain more than 5")
        }else{
            if(password===confirmpassword)
            {
                navigation.navigate('signup3',{name,email,password})
            }
            else{
                alert("Failure")
            }
        }
      }
    }

   

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.InputContainer}>
                <TextInputComp placeholder="password" handleChange={handlepassword} secureTextEntry={true}/>
                <TextInputComp placeholder="confirm password" handleChange={handleconfirmpassword} secureTextEntry={true}/>

                <Button title="Next" onPress={() => goToSignUp2(password,confirmpassword)} />

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