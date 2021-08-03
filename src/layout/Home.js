import React from 'react'
const electron = window.require('electron');

export default function home() {
    console.log(electron)
    return (
        <div>
            <h1>Hi from home</h1>
        </div>
    )
}
