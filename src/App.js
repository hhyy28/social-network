
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/my posts/Profile';
import Settingss from './components/Settings/Settings';



const App = (props) => {
  return (
    <div className='app-wrapper'>
        <BrowserRouter>
        <Header/>
        <Navbar/>
        <Route path='/dialogs' component={Dialogs}/>
        <Route  path='/profile' component={Profile}/>
        <Route  path='/music' component={Music}/>
        <Route  path='/News' component={News}/>
        <Route  path='/settings' component={Settingss}/>
      </BrowserRouter>

    </div>)
} 

 
 export default App