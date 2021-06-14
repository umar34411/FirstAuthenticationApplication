import 'react-native-gesture-handler';
import React ,{useState,useEffect} from 'react'
import auth from '@react-native-firebase/auth'


import AppNavigator from './Navigation/AppNavigator';
import WelcomeNavigator from './Navigation/welcomeNavigator';





export default function App()
{
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
     <WelcomeNavigator/>
    );
  }

  return (
    <AppNavigator/>
  );}
