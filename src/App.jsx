import React from "react";

import app from "firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import RoomSelect from "./components/RoomSelect";
import Login from "./components/Login";

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
      <header>
        <h1>Campfire 🔥</h1>
      </header>

      <main>
        {user ? <RoomSelect user={user.displayName} /> : <Login auth={auth} />}
      </main>

      <footer
      style="position:absolute; top:110%; left:45%; color:black;" 
      className="mx-auto">UNIHACK Team Error 418</footer>
    </div>
  );
}

export default App;
