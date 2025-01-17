import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './pages/home'
import { Register } from './pages/register'
import { Login } from './pages/login'
import { Image } from 'react-native'
import { Questions } from './pages/questions'
import { ForgotPassword } from './pages/forgotPassword'
import { MainScreen } from './pages/main'

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
                headerTitle: (props) => <Image 
                  style={{width: 60, height: 40, marginLeft: 92}}
                  source={require('./assets/logo_icon.png')}
                /> ,
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
                title: '',
                headerTitle: (props) => <Image 
                  style={{width: 60, height: 40, marginLeft: 92}}
                  source={require('./assets/logo_icon.png')}
                /> ,
                headerStyle: {
                    backgroundColor: '#0046FE'
                },
                headerTintColor: '#FFF'
              }}
            />

            <Nav.Screen
              name="questions"
              component={Questions}
              options={{
                headerShown: true,
                title: '',
                headerTitle: (props) => <Image 
                  style={{width: 60, height: 40, marginLeft: 92}}
                  source={require('./assets/logo_icon.png')}
                /> ,
                headerStyle: {
                    backgroundColor: '#0046FE'
                },
                headerTintColor: '#FFF'
              }}
            />

            <Nav.Screen
              name="forgotPassword"
              component={ForgotPassword}
              options={{
                headerShown: true,
                title: '',
                headerTitle: (props) => <Image 
                  style={{width: 60, height: 40, marginLeft: 92}}
                  source={require('./assets/logo_icon.png')}
                /> ,
                headerStyle: {
                    backgroundColor: '#0046FE'
                },
                headerTintColor: '#FFF'
              }}
            />

            <Nav.Screen
              name="mainScreen"
              component={MainScreen}
              options={{
                headerShown: false,
                title: '',
                headerStyle: {
                    backgroundColor: '#0046FE'
                },
                headerTintColor: '#FFF'
              }}
            />
        </Nav.Navigator>

        
    )
}
