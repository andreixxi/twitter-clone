import React, { useState, useEffect } from "react";
import './App.css';
import { firebaseApp } from "./firebase";
import Login from "./Login";
import Hero from "./Hero";
import { db } from "./firebase";
import emailjs, { init } from 'emailjs-com';


function App() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    var [address, setAddresss] = useState("");
    var [username, setUserName] = useState(""); // nu const!!!
    var [avatar, setAvatar] = useState("");
    var [verified, setVerified] = useState("");
    var [displayname, setDisplayname] = useState("");

    const clearInputs = () => {
        setEmail("");
        setPassword("");
    }

    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    }

    const handleLogin = () => {
        clearErrors();
        firebaseApp
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => {
                switch (error.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(error.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(error.message);
                        break;
                }
            });

        db.collection("users").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data().email);
                var dbEmail = doc.data().email; //emailul curent din bd
                if (email === dbEmail) {//  exista emailul in baza de date 
                    username = email.substring(0, email.lastIndexOf("@"));// pentru "john.doe@email.com" setez john.doe
                    displayname = 'Clever Lang Quadrilateral ' + username;
                    avatar = 'avatar.png';
                    verified = Math.random() < 0.5;
                    address = email;

                    setUserName(username); //setez usernameul curent
                    setDisplayname(displayname);
                    setAvatar(avatar);
                    setVerified(verified);
                    setAddresss(email);
                }
            });

        })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    };

    function sendEmail() {
        init("user_T9Jn1YIeD2qZZS2zmpU0K");

        emailjs.send("gmail", "dawntter", {
            to_name: username,
            to_email: email,
        }).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    const handleSignup = () => {
        clearErrors();
        firebaseApp
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(error => {
                switch (error.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(error.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(error.message);
                        break;
                }
            });

        var ok = 1; // presupun ca nu exista emaillul
        db.collection("users").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                var dbEmail = doc.data().email; //emailul curent din bd
                if (email === dbEmail) {//  exista emailul in baza de date 
                    ok = 0;
                }
            });
            //console.log("ok dupa cautare", ok)
            if (ok == 1) { // userul nu se afla in bd, il adaug
                username = email.substring(0, email.lastIndexOf("@"));// pentru "john.doe@email.com" setez john.doe
                displayname = 'Clever Lang Quadrilateral ' + username;
                avatar = 'avatar.png';
                verified = Math.random() < 0.5;
                address = email;

                db.collection("users")
                    .add({
                        email: email,
                        password: password, //probabil de sters hehe
                        username: username, // calculat mai sus
                        displayname: displayname,
                        avatar: avatar,
                        verified: verified
                    });
                setEmail(email);
                setUserName(username);
                setDisplayname(displayname);
                setAvatar(avatar);
                setVerified(verified);
                setAddresss(address);

                sendEmail();
            }
        })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });

    };

    const handleLogout = () => {
        firebaseApp.auth().signOut();
    };

    const authListener = () => {
        firebaseApp.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);

    return (
        <div className="App">
            {user ? (
                <div>
                    <Hero
                        handleLogout={handleLogout}
                        address={address}
                        username={username}
                        displayname={displayname}
                        avatar={avatar}
                        verified={verified}
                    />
                </div>
            ) : (
                    <div>
                        <Login
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            handleLogin={handleLogin}
                            handleSignup={handleSignup}
                            hasAccount={hasAccount}
                            setHasAccount={setHasAccount}
                            emailError={emailError}
                            passwordError={passwordError}
                        />
                    </div>
                )}
        </div>
    );
}

export default App;
