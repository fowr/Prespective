import './App.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss'
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import Users from './user/pages/Users';
import UserPhotos from './post/pages/UserPhotos';
import MainNavigation from './shared/components/Navigation/MainNavigation'
import Index from './landing/pages/Index'
import Footer from './shared/components/Navigation/Footer'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import Dashboard from './user/pages/User'
import Photo from './post/pages/Photo';


const App=()=> {
  return   (  <Router>
    <MainNavigation/>
     <Switch> 
    <main>
      
      <Route path="/" exact > 
        <Index/>
      </Route>

      <Route path="/dashboard" exact > 
        <Dashboard/>
      </Route>
     
      <Route path="/users" exact > 
        <Users/>
      </Route>

      <Route path="/:userId/photos" exact>
        <UserPhotos/>
      </Route>

      <Route path="/photos/:photoId" exact>
        <Photo/>
      </Route>

       <Route path="/auth" exact>
          <SignUp/>
      </Route>

      <Route path="/login" exact>
        <SignIn/>
      </Route> 

      <Redirect to="/"/>
      </main>
      
     
    </Switch> 
    <Footer/>
   
    
  
</Router>)




}

export default App;
