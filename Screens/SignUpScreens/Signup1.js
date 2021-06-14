import React , {useState} from 'react'

import { View, Text, SafeAreaView, StyleSheet, StatusBar, Button } from 'react-native'


import TextInputComp from '../../components/TextInputComp'

export default function Signup1({navigation}) {


    const [email, setemail] = useState();
    const [name, setname] = useState();

    const handleEmail = (text) => {
        setemail(text);
    }
    const handlename = (text) => {
        setname(text);
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function goToSignUp2(name,email){
     
        if(!email || !name)
      {
          alert("both feilds are necessary");
      }else{
        if(!validateEmail(email))
        {
            alert("Enter valid email")
        }else{
            navigation.navigate('signup2' ,{name:name ,email:email})
        }
      }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.InputContainer}>
                <TextInputComp placeholder="Name" handleChange={handlename} />
                <TextInputComp placeholder="Email" handleChange={handleEmail} keyboardType='email-address' />

                <Button title="Next" onPress={() => goToSignUp2(name,email)} />

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