var firebaseConfig = {
    apiKey: "AIzaSyBR5LS1-rHIn4A78qSs4srDkROno9VhDww",
    authDomain: "project-94-let-s-chat-web-app.firebaseapp.com",
    databaseURL: "https://project-94-let-s-chat-web-app-default-rtdb.firebaseio.com",
    projectId: "project-94-let-s-chat-web-app",
    storageBucket: "project-94-let-s-chat-web-app.appspot.com",
    messagingSenderId: "581194844125",
    appId: "1:581194844125:web:c7bae461402b8e59d1d834"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
    room_name = document.getElementById("room_name").value
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}