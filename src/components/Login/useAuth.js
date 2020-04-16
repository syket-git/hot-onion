import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

//firebase.initializeApp(firebaseConfig);


const Auth = () => {
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        repeat_password: '',
        isValid: false

    });


    const handleSubmit = () => {
        if (user.isValid) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const { name, email, password, repeat_password } = res.user;
                    const singedInUSer = { name, email, password, c_pass: repeat_password };
                    setUser(singedInUSer);
                    return res.user;
                })
                .catch(err => {
                    console.log(err.message);
                    return err.message;
                })
        }
        
    }
    const signOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const userSignedOut = {
                    isSignIn: false,
                    name: '',
                    email: '',
                    password: '',
                    repeat_password: '',
                    isValid: false,
                }
                setUser(userSignedOut);
            })
            .catch(err => {
                console.log(err.message);
            });
    }
    return {
        user,
        handleSubmit,
        signOut
    }


}



export default Auth;