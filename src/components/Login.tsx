// React functional component with useState hook

import React, { useState, useEffect } from "react";
import Axios from "axios"


Axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })



function LoginForm() {

    useEffect(function () {
        Axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const getEmail = (event: any) => {
        console.log(event, "ëvent");
        console.log(event.target, "ëvent target");


        setEmail(event.target.value);


    };

    const getPassword = (event: any) => {

        setPassword(event.target.value);

    };

    const submitData = (event: any) => {

        // Prevents default behaviour of a form and allows to control it
        event.preventDefault();

        // Storing the email and password in a variable/constant
        const user = {
            email: email,
            password: password,
        };

        console.log(user);

    };

    return (
        <form className="form" onSubmit={submitData}>

            <input type="email" name="email" onChange={getEmail} />
            <br />
            <br />

            <input type="password" onChange={getPassword} />
            <br />
            <br />


            <input type="submit" />

        </form>
    );
}

export default LoginForm;
