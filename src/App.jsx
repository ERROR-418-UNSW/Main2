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
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <meta name="keywords" content="The CampFire">
    <meta name="description" content="">
    <meta name="page_type" content="np-template-header-footer-from-plugin">
    <title>Home</title>
    <link rel="stylesheet" href="nicepage.css" media="screen">
<link rel="stylesheet" href="Home.css" media="screen">
    <script class="u-script" type="text/javascript" src="jquery.js" defer=""></script>
    <script class="u-script" type="text/javascript" src="nicepage.js" defer=""></script>
    <meta name="generator" content="Nicepage 3.8.1, nicepage.com">
    <link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i">
    
    <script type="application/ld+json">{
		"@context": "http://schema.org",
		"@type": "Organization",
		"name": "",
		"url": "index.html"
}</script>
    <meta property="og:title" content="Home">
    <meta property="og:type" content="website">
    <meta name="theme-color" content="#478ac9">
    <link rel="canonical" href="index.html">
    <meta property="og:url" content="index.html">
      </head>
      <header>
      <h1>Campfire 🔥</h1>
      <header class="u-clearfix u-custom-color-2 u-header u-header" id="sec-fa41"><img src="images/unnamed-2.png" alt="" class="u-image u-image-default u-image-1" data-image-width="512" data-image-height="315"><img src="images/unnamed-2.png" alt="" class="u-image u-image-default u-image-2" data-image-width="512" data-image-height="315"><img src="images/unnamed-2.png" alt="" class="u-image u-image-default u-image-3" data-image-width="512" data-image-height="315"><h2 class="u-text u-text-custom-color-3 u-text-1">The CampFire</h2>
      <img src="images/1809.m10.i008.n006.p.c25.1072200314-burning-bonfire-animation.gif" alt="" class="u-image u-image-default u-image-4" data-image-width="800" data-image-height="600"><img src="images/7d064a7b2c501b9b3937c1a5941b62be2f51aae51.png" alt="" class="u-image u-image-default u-image-5" data-image-width="1000" data-image-height="1003"><div class="u-custom-color-2 u-shape u-shape-rectangle u-shape-1"></div><img src="images/cb96a23d8522823f7e5e9225d7845f44-wooden-arrow-sign-by-vexels.png" alt="" class="u-image u-image-default u-preserve-proportions u-image-6" data-image-width="512" data-image-height="512"><h3 class="u-text u-text-2">Top Rooms<br>
        <br>
      </h3>
      </header>
      <main>
        {user ? <RoomSelect user={user.displayName} /> : <Login auth={auth} />}
      </main>

      <footer
      style={{
        position:'absolute',
        top:'50%',
        left:'45%',
        color:'black',
      }}
      className="mx-auto">UNIHACK Team Error 418</footer>
    </div>
  );
}

export default App;
