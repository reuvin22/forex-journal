import React from 'react';
import Form from '../hooks/Form';

function Login() {
  return (
    <>
      <div className='w-screen h-screen'>
        <div className="flex justify-center items-center h-full">
            <div className='grid'>
                <div className='w-96 grid place-items-center py-4 bg-green-800 rounded'>
                    <span className='text-white font-bold text-2xl'>Trader Login</span>
                </div>
                <div className='border h-80 rounded'>
                    <div className='gap-5 w-full h-full'>
                        <div className="h-full flex justify-center items-center">
                            <div className="grid gap-3 place-items-center p-6">
                                <Form text="Username" label="Username" />
                                <Form password="Password" label="Password" />
                                <button className='cursor-pointer border py-2 px-28 hover:bg-green-400 hover:text-white rounded'>Login</button>
                                <div className='flex justify-center items-center'>
                                    <span className='cursor-pointer hover:text-green-800'>Forgot Password?</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Login;