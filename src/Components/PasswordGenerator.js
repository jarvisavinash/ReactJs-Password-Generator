import React, { useState } from "react";
import './GenerateButton.css';

function PasswordGenerator(){

    var password = '';

    const generatePassword = () => {

        var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var passwordLength = 8;

        // for(var loops = 1; loops<= 10; loops++) {

        //     var password = "";

        //     for (var i = 0; i <= passwordLength; i++) {
        //         var randomNumber = Math.floor(Math.random() * chars.length);
        //         password += chars.substring(randomNumber, randomNumber + 1);
        //     }
        //     arraysOfPasswords.push(password);
        // }

        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }

        console.log(password);
        alert(password);
        window.location.reload();

    }

    return (
        <div><br/><br/>

            <div className="frame">
                <button className="custom-btn btn-16" onClick={generatePassword}> Generate Password</button>
            </div>
    
        </div>
    );
}

export default PasswordGenerator;