import React from 'react';
import LandingView from './Components/Landing/LandingView';
import GetQuizByPin from './Components/GetQuizByPin/GetQuizByPinView';
import RegisterView from './Components/Auth/RegisterView';
import LoginView from './Components/Auth/LoginView';
import HomeView from './Components/Home/HomeView';
import QuizForm from './Components/QuizForm/QuizForm';
import TakeQuiz from './Components/TakeQuiz/TakeQuiz';
import { Switch, Route } from 'react-router-dom';


export default (
    <Switch>
       <Route component={LandingView} exact path="/" />
       <Route component={GetQuizByPin} path="/pin" />
       <Route component={TakeQuiz} path="/quiz/:pin"/>
       <Route component={RegisterView} path="/register" />
       <Route component={LoginView} path="/login" />
       <Route component={QuizForm} path="/form" />
       <Route component={HomeView} path="/home/:urlextension" /> 
       <Route component={HomeView} path="/home" /> 
    </Switch>

)

