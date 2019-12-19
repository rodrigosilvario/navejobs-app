//NPM modules
import React from 'react'
import {Route, Switch} from 'react-router-dom';
//components
import NavigationBar from './components/NavigationBar';
//screens
import HomeContainer from './screens/HomeContainer'
import UserContainer from './screens/UserContainer'
import UserNewContainer from './screens/UserNewContainer'
import UserDetailContainer from './screens/UserDetailContainer'
import UserEditContainer from './screens/UserEditContainer'


function App (props) {
  
    return (
        <div>
          <NavigationBar />
          <Switch>
            <Route exact path="/"component={HomeContainer} />
            <Route exact path="/user" component={UserContainer}/>
            <Route exact path="/user/new" component={UserNewContainer}/>
            <Route exatc path="/user/detail/:id" component={UserDetailContainer} />
            <Route exatc path="/user/edit/:id" component={UserEditContainer} />
          </Switch>
        </div>
    )
  
}

export default App
