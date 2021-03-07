import React from "react";

import app from "firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import RoomSelect from "./components/RoomSelect";
import Login from "./components/Login";

import man from './man.png';
import bonfire from './bonfire.gif';
import rain from './rain.png';

console.log(man);
console.log(bonfire);
console.log(rain);

const firebaseConfig = {
  apiKey: "AIzaSyD7prbZqSj_GD84p_eYLuWeCj8vpudiNRg",
  authDomain: "campfire-c4582.firebaseapp.com",
  projectId: "campfire-c4582",
  storageBucket: "campfire-c4582.appspot.com",
  messagingSenderId: "77462765969",
  appId: "1:77462765969:web:1151661665894aa1911a30",
};
// Initialize Firebase
app.initializeApp(firebaseConfig);
const fbApp = app.app();
const auth = app.auth();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <h1>Campfire 🔥 - UNIHACK Team Error 418</h1>
      <main>
        {user ? <RoomSelect user={user.displayName} /> : <Login auth={auth} />}
      </main>
      <div>
      <img src={rain} alt="Rain" width="100" height="50"
      style={{
        top:'20%',
        right:'30%',
      }}/>;
      <img src={man} alt="Man" width="100" height="50"
      style={{
        top:'20%',
        right:'30%',
      }}/>;
      <img src={bonfire} alt="Bonfire" width="100" height="50"
      style={{
        top:'20%',
        right:'30%',
      }}/>;
      </div>
      <footer
      style={{
        top:'20%',
        right:'30%',
        color:'black',
      }}
      className="mx-auto">UNIHACK Team Error 418</footer>
    </div>
  );
}

export default App;
