/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./style.css"

function AlertWindow({closingCall}) {
    return (
        <div className=' text-white h-screen w-full bg-white/[0.3] flex justify-center items-center absolute z-10 select-none'>
            <div className=' justify-between h-1/6 w-1/4 shadow border-2 border-solid border-[#EF5350] flex flex-col items-center bg-[#ef1c1c]/[0.5] rounded-lg px-5 py-4'>
                <h1 className=' w-full text-lg flex items-center'>❌ Please fill all the fields</h1>
                <div className=' w-full'>
                    <button onClick={closingCall} className=' px-3 py-1 bg-[#ef1c1c]/[0.5] text-white text-sm rounded-lg'>CLOSE</button>
                </div>
            </div>
        </div>
    )
}

export default AlertWindow
