/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./style.css"
import AlertWindow from './AlertWindow';

function SignInPage() {

    let [roll,setRoll] = useState("");
    let [password,setPassword] = useState("");
    let [q1,setQ1] = useState("");
    let [a1,setA1] = useState("");
    let [q2,setQ2] = useState("");
    let [a2,setA2] = useState("");
    let [q3,setQ3] = useState("");
    let [a3,setA3] = useState("");

    let [classNameOTP,setClassNameOTP] = useState("hidden");
    let [sendOTP,setSendOTP] = useState("flex w-full h-1/6 p-3 justify-center items-center bg-white mt-2 rounded-md shadow cursor-pointer hover:bg-gray-100");
    let [sendLogin,setSendLogin] = useState("hidden");
    let [roundedDiv,setRoundedDiv] = useState("flex h-4/5 w-full mt-4 bg-[#FFFFFF] p-4 shadow rounded-md");
    let [main, setMain] = useState("");
    let [flag,setFlag] = useState(false);

    function ModalFunction(){
        setMain("");
        setFlag(false);
        console.log("DONE");
    }

    function OnclickOTP(e){
        if(roll === "" || password === "" || q1 === "" || a1 === "" || q2 === "" || a2 === "" || q3 === "" || a3 === ""){
            setFlag(true);
            setMain("blur-sm");
        }
        else{
            alert('OTP SENT TO REGISTERED E-MAIL');
            setClassNameOTP("flex px-4 pb-4 w-full justify-between bg-[#FFFFFF] shadow rounded-b-md");
            setSendOTP("hidden");
            setSendLogin("flex w-full h-1/6 p-3 justify-center items-center bg-white mt-2 rounded-md shadow cursor-pointer hover:bg-gray-100");
            setRoundedDiv("flex h-4/5 w-full mt-4 bg-[#FFFFFF] p-4 shadow rounded-t-md");
        }
    }


    return (
        <div>
            {flag&&<AlertWindow closingCall={ModalFunction}/>}
            <div className={main}>
                <div className=' flex justify-center items-center h-screen grad select-none shadow'>
                    <div className=' rounded-lg flex flex-col items-center p-10 h-[80%] w-2/5 bg-[#FDECF2]/[0.6]'>
                        <div className=' w-full h-[12%] flex justify-center items-center text-xl'>Welcome, Sign In</div>
                        <div className={roundedDiv}>
                            <div className='h-full flex flex-col justify-evenly items-start w-2/5 gap-3'>
                                <div className=' h-1/9'>
                                    <span>Roll Number : </span>
                                </div>
                                <div className=' h-1/9'>
                                    <span>Password : </span>
                                </div>
                                <div className=' h-1/9'>
                                    <span>Security Question 1 : </span>
                                </div>
                                <div className=' h-1/9'>
                                    <span>Answer : </span>
                                </div>
                                <div className=' h-1/9'>
                                    <span>Security Question 2 : </span>
                                </div>
                                <div className=' h-1/9'>
                                    <span>Answer : </span>
                                </div>
                                <div className=' h-1/9'>
                                    <span>Security Question 3 : </span>
                                </div>
                                <div className=' h-1/9'>
                                    <span>Answer : </span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-evenly items-start w-3/5 gap-3' >
                                <input onChange={(e)=>{setRoll(e.target.value)}} id="ip1" className='bg-gray-50 px-1 border-2 border-grey rounded-sm border-solid w-full' type="text" placeholder="" />
                                <input onChange={(e)=>{setPassword(e.target.value)}} id="ip2" className='bg-gray-50 px-1 border-2 border-grey rounded-sm border-solid w-full' type="text" placeholder="" />
                                <input onChange={(e)=>{setQ1(e.target.value)}} id="ip3" className='bg-gray-50 px-1 border-2 border-grey rounded-sm border-solid w-full' type="text" placeholder="" />
                                <input onChange={(e)=>{setA1(e.target.value)}} id="ip4" className='bg-gray-50 px-1 border-2 border-grey rounded-sm border-solid w-full' type="text" placeholder="" />
                                <input onChange={(e)=>{setQ2(e.target.value)}} id="ip5" className='bg-gray-50 px-1 border-2 border-grey rounded-sm border-solid w-full' type="text" placeholder="" />
                                <input onChange={(e)=>{setA2(e.target.value)}} id="ip6" className='bg-gray-50 px-1 border-2 border-grey rounded-sm border-solid w-full' type="text" placeholder="" />
                                <input onChange={(e)=>{setQ3(e.target.value)}} id="ip7" className='bg-gray-50 px-1 border-2 border-grey rounded-sm border-solid w-full' type="text" placeholder="" />
                                <input onChange={(e)=>{setA3(e.target.value)}} id="ip8" className='bg-gray-50 px-1 border-2 border-grey rounded-sm border-solid w-full' type="text" placeholder="" />
                            </div>
                        </div>
                        <div onClick={OnclickOTP} className={sendOTP}>
                            <button>Send OTP</button>
                        </div>
                        <div className={classNameOTP}>
                            <div className='h-1/9'>
                                <span>Enter OTP : </span>
                            </div>
                            <div className='w-3/5'>
                                <input className='w-full border-2 border-grey rounded-sm border-solid' type='number'/>
                            </div>
                        </div>
                        <div className={sendLogin}>
                            <button>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInPage
