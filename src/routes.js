import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './pages/home'
import { Register } from './pages/register'
import { Login } from './pages/login'


const Nav = createStackNavigator();

export function Routes(){
    return(
        <Nav.Navigator>
            <Nav.Screen
              name="home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />

            <Nav.Screen
              name="register"
              component={Register}
              options={{
                headerShown: true,
                title: '' ,
                headerStyle: {
                    backgroundColor: '#0046FE'
                },
                headerTintColor: '#FFF',
                
              }}
            />

            <Nav.Screen
              name="login"
              component={Login}
              options={{
                headerShown: true,
                title: '' ,
                headerStyle: {
                    backgroundColor: '#0046FE'
                },
                headerTintColor: '#FFF'
              }}
            />
        </Nav.Navigator>
    )
}