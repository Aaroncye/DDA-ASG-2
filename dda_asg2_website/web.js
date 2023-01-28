import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getDatabase,
    ref,
    child,
    get
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA70XBKpFU7oAnwpJCJqvbBbs451TLXY9M",
    authDomain: "dda-week-1.firebaseapp.com",
    databaseURL: "https://dda-week-1-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "dda-week-1",
    storageBucket: "dda-week-1.appspot.com",
    messagingSenderId: "444066907145",
    appId: "1:184408633484:web:bba49ca0e61a8f945e8ba9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();
const playerRef = ref(db, "players");
getPlayerData();


function getPlayerData() {
    //const playerRef = ref(db, "players");
    //PlayerRef is declared at the top using a constant
    //get(child(db,`players/`))
    get(playerRef)
        .then((snapshot) => { //retrieve a snapshot of the data using a callback
            if (snapshot.exists()) { //if the data exist
                try {
                    //let's do something about it
                    var content = "";
                    snapshot.forEach((childSnapshot) => { //looping through each snapshot
                        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array / forEach
                        console.log("GetPlayerData: childkey " + childSnapshot.key);
                    });
                } catch (error) {
                    console.log("Error getPlayerData" + error);
                }
            }
        });
} //end getPlayerData