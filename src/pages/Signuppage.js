import React, { useState } from 'react'
import loginimg from '../images/Deck_Artboard 6_PNG.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'
function Loginpage() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = (e) => {
        e.preventDefault();
        if (!values.name || !values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, values.email, values.pass).then(async (res) => {
            setSubmitButtonDisabled(true);
            const user = res.user;
            await updateProfile(user, {
                displayName: values.name,
            });
            navigate("/Landing");
        }).catch((err) => {
            setSubmitButtonDisabled(true);
            setErrorMsg(err.message);
            console.log("Error-", err)
        });
    };
    const goto = () => {
        navigate("/");
    }
    const [num, setNum] = useState('')
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setNum(data.user.email)
            localStorage.setItem("email", data.user.email)
            navigate("/Landing");
        })
    }
    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center box">
            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
                <div className='sm:w-1/2 px-16'>
                    <h2 className='text-[#002D74] font-bold text-2xl'>Sign Up</h2>
                    <p className='text-[#002D74] text-sm mt-4'>Welcome to Sign In Page</p>

                    <form className='flex flex-col gap-4' action='' id="box">
                        <input onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))} className='p-2 mt-4 rounded-xl border' type='text' name='Name' placeholder='Name' />
                        <input onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} className='p-2 mt-4 rounded-xl border' type='text' name='email' placeholder='Email' />
                        <div className='relative'>
                            <input onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} className='p-2 mt-2 rounded-xl border w-full' type='text' name='password' placeholder='Password' />
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-7 right-3 -translate-y-1/2 " viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>
                        </div>
                        <b className='font-bold text-sm text-red-600'>{errorMsg}</b>
                        <button disabled={submitButtonDisabled} onClick={handleSubmission} className='bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300'>Sign Up</button>
                    </form>

                    <div className='mt-10 grid grid-cols-3 items-center text-gray-500 box'>
                        <hr className='border-gray-500'></hr>
                        <p className='text-center text-sm'>OR</p>
                        <hr className='border-gray-500'></hr>
                    </div>

                    <button onClick={handleClick} className='bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300'>
                        <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                        </svg>&nbsp;&nbsp;&nbsp;Sign In with Google</button>

                    <hr className='mt-5 border-gray-500'></hr>

                    <div className="mt-3 text-sm flex justify-between items-center">
                        <p className='mr-3'>Already have an account ? </p>
                        <button onClick={goto} className="py-2 px-5 bg-white border-rounded-xl hover:scale-105 duration-300">Login</button>
                    </div>
                </div>

                <div className="sm:block hidden w-1/2">
                    <img className='rounded-2xl' src={loginimg} />
                </div>
            </div>
        </div>
    )
}

export default Loginpage