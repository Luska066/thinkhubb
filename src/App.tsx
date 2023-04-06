import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AuthContext from './context/AuthContext';
import { AppRoutes } from './router';
import { TestUsers } from './services/example';
import { User } from './types/User';


const App = () => {
  const [ isUserIn, setIsUserIn ] = useState<boolean>(true);
  const [ user, setUser ] = useState(TestUsers);

  return (
    <AuthContext.Provider value={{isUserIn, setIsUserIn, user, setUser}}>
      <div className="App">
        <Router>
          <AppRoutes />
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App
