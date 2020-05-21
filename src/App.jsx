
import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Login from './pages/Login';
import NewStudentPost from './pages/NewStudentPost';
import NewTeacherPost from './pages/NewTeacherPost';
import Navbar from './components/Navbar';
import API from './utils/API';


function App() {

const [currentUser,setCurrentUser] = useState(false);
const [studentsearch, setStudentSearch] = useState(false);

const [teachersearch, setTeacherSearch] = useState(false);

  useEffect(()=>{
    //  console.log("Running UseEffect");
     
    API.readSessions().then(res=>{
      if(res.data.user){
        setCurrentUser(res.data.user)
      }else {
        setCurrentUser(false)
      }
    })
  },[])

  const passStudents = students => {
    setStudentSearch(students)
  }

  const passTeachers = teachers => {
    setTeacherSearch(teachers)
  }


  const loginSubmitHandler= userData=>{
    setCurrentUser(userData)
  }

  const logoutHandle = ()=>{
    setCurrentUser(false)
    
  }



  return (
    <Router>
    <div className="container is-fluid">
      <div className="notification">
      <Navbar currentUser={currentUser} logoutHandle = {logoutHandle}/>
      <Switch>
      <Route exact path="/">
         <HomePage/>
      </Route>

      <Route exact path="/signup">
         <SignUp submitHandler={loginSubmitHandler}/>
      </Route>

      <Route exact path="/profile">


        <Profile currentUser={currentUser} studentsearch = {studentsearch} teachersearch = {teachersearch}/>

      </Route>
      
      <Route exact path="/login">
         <Login submitHandler={loginSubmitHandler} passStudents ={passStudents} passTeachers = {passTeachers}/>
      </Route>

      <Route exact path="/newpost">
         <NewStudentPost currentUser={currentUser} submitHandler={loginSubmitHandler} passTeachers = {passTeachers}/>
      </Route>

      <Route exact path="/newTeacherPost">
         <NewTeacherPost currentUser={currentUser} submitHandler={loginSubmitHandler} passStudents ={passStudents} />
      </Route>

      
      </Switch>
    
    </div>
    </div>
    </Router>
    
  );
}

export default App;
