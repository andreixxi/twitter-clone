import React, { useState, useEffect} from "react";
import './App.css';
import { firebaseApp } from "./firebase";
import Login from "./Login";
import Hero from "./Hero";
import { db } from "./firebase";

function App() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

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


        //get the user id
        const docRef = db.collection("users");
        var docId = 0;
        if (!docRef.exists) {
            console.log('no such doc');
        } else {
            docId = docRef.id;
        }
        //if 
        db.collection("users").add({
            email: email,
            password: password //probabil de sters hehe
        });

    };

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
                <Hero handleLogout={handleLogout} />
            ) : (
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
                )}
            </div>
  );
}

export default App;
