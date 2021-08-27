//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyDP9IeIT63Ov5Ttf0vSnFPAE89XqT_XgMw",
      authDomain: "class-94-455d3.firebaseapp.com",
      databaseURL: "https://class-94-455d3-default-rtdb.firebaseio.com",
      projectId: "class-94-455d3",
      storageBucket: "class-94-455d3.appspot.com",
      messagingSenderId: "1000134931879",
      appId: "1:1000134931879:web:1bdf974928dce178f63282",
      measurementId: "G-81FJT14949"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("your_name");
    room_name = localStorage.getItem("room_name");
    function send(){
          input_value=document.getElementById("message").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:input_value,
                likes:0
          });
          document.getElementById("message").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
