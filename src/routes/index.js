import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Welcome from '../pages/Welcome'
import SingIn from '../pages/SingIn'
import Register from "../pages/Register";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            options={{
                title: '',
                headerTransparent: true,
                headerShown: false,
            }}
            name="Welcome"
            component={Welcome}
            />

        <Stack.Screen
            options={{
                title: '',
                headerTransparent: true,
                headerShown: false,
            }}
            name="SingIn"
            component={SingIn}
            />

            <Stack.Screen
            options={{
                title: '',
                headerTransparent: true,
                headerShown: false,
            }}
            name="Register"
            component={Register}
            />  
        </Stack.Navigator>
    );
}