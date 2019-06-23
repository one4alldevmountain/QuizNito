import React from 'react';
import routes from './routes';
import './App.css';
import { QuizFormView } from './Components';
import { HashRouter } from 'react-router-dom';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';





function App() {
  toast.configure({
    autoClose: 2000,
    position: 'top-center',
  })
  return (


    <div className="App">
      
      QUIZZARD
      <HashRouter>
           {routes}
      </HashRouter>
    </div>
  );
}

export default App;
