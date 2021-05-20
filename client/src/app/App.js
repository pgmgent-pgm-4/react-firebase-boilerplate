import { AuthProvider, FirebaseProvider } from './contexts/firebase';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <FirebaseProvider>
        <AuthProvider>
          <Router basename={'/'}>
            <Switch>
              
            </Switch>
          </Router>
        </AuthProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;
