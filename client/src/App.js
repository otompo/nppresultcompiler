import React from 'react';
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import DashboardScreen from './screens/DashboardScreen';
import EnterResultScreen from './screens/EnterResultScreen';
import ViewResultScreen from './screens/ViewResultScreen';





const App=()=>{
  return (
    <Router>
      <Header/>
        <main>
            <>
              <Route path='/' component={HomeScreen} exact />              
              <Route path='/home' component={HomeScreen} exact />              
              
            <Container fluid> 
            <Route path='/dashboard' component={DashboardScreen} />     
            <Route path='/viewresult' component={ViewResultScreen} />         
             </Container>
            </>
          <Container fluid="md">
             
              <Route path='/login' component={LoginScreen} />
              <Route path='/register' component={RegisterScreen} />
              <Route path='/profile' component={ProfileScreen} />     
              <Route path='/enterresult' component={EnterResultScreen} />     
                

              <Route path='/admin/userlist' component={UserListScreen} />
              <Route path='/admin/user/:id/edit' component={UserEditScreen} />
            
          </Container>
        </main>
      <Footer/>     
    </Router>
  );
}

export default App;
