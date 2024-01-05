import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './App.css'
import { Signin } from './components/Signin';
import { initializeApp } from "firebase/app";
import { useEffect } from 'react';
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';
import { userAtom } from './store/atoms/user';

const firebaseConfig = {
    apiKey: "AIzaSyB0-Fg9SE5_8Z5XGJz4M4o4ZzFv_oMs36c",
    authDomain: "leetcode-clone-bc7b2.firebaseapp.com",
    projectId: "leetcode-clone-bc7b2",
    storageBucket: "leetcode-clone-bc7b2.appspot.com",
    messagingSenderId: "202951349093",
    appId: "1:202951349093:web:77fc25a74b8c2e6019878c",
    measurementId: "G-27DTP3DKSX"
  };
  
  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

function App() {
  return <RecoilRoot>
    <StoreApp />
  </RecoilRoot>
  
}

function StoreApp() {
  const [user, setUser] = useRecoilState(userAtom);
  useEffect(() => {
    onAuthStateChanged(auth, function(user) {
      if (user && user.email) {
        setUser({
          loading: false,
          user: {
            email: user.email
          }
        })
      } else {
        setUser({
          loading: false,
        })
        // No user is signed in.
        console.log('There is no logged in user');
      }
    });
  }, [])
  if(user.loading) {
    return <div>loading...</div>
  }

  if (!user) {
    return <div><Signin /></div>
  }
  return (
    <>
      You are logged in as {user.user?.email}
     
    </>
  )
  return
}

export default App
