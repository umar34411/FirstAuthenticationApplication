import React ,{useState} from 'react'
import { View, Text, SafeAreaView ,StyleSheet ,StatusBar, Button} from 'react-native'
import auth from '@react-native-firebase/auth'

import TextInputComp from '../../components/TextInputComp'

export default function SignIn() {

    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    const handleEmail=(text)=>{
        setemail(text);
    }
    const handlePassword=(text)=>{
        setpassword(text);
    }

    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    

    function loginUser(email,password)
    {
      if(!email || !password)
      {
          alert("both feilds are necessary");
      }else{
           if(!validateEmail(email))
          {
              alert("Enter valid email")
          }else{

          
            auth().signInWithEmailAndPassword(email,password).then(
                ()=>alert("Success")
                ).catch(()=>alert("Inavalid Credentials"))
         

          }
      }
    }

    return (
        <SafeAreaView style={styles.container}>
           <View style={styles.InputContainer}>
              <TextInputComp placeholder="Email"  handleChange={handleEmail} /> 
              <TextInputComp placeholder="Password" handleChange={handlePassword} secureTextEntry={true}/> 
              <Button title="Login" onPress={()=>loginUser(email,password)}/>
              
            </View>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
       
        alignItems:'center',
       
    },
    InputContainer:{
        
         width:'80%', 
        
        
        
    }
})
