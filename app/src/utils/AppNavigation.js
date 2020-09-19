
import React  from 'react'
import {Image} from 'react-native'
import {  
    createAppContainer,  
    createDrawerNavigator,  
} from 'react-navigation';  
import FirstScreen from '../layout/firstScreen/FirstScreen'
import SecondScreen from '../layout/secondScreen/SecondScreen'
import ThirdScreen from '../layout/thirdScreen/ThirdScreen'


const AppDrawerNavigator = createDrawerNavigator({  
    FirstScreen: {  
        screen: FirstScreen , 
       
    },  
    SecondScreen: {  
        screen: SecondScreen  
    },  
    ThirdScreen: {  
        screen: ThirdScreen  
    },  

},
);  


const AppContainer = createAppContainer(AppDrawerNavigator);  
export default AppContainer;


