import React from 'react';

function Form({ text, password, number, label }) {
  return (
    <div className='w-full'>
    {label && (
        <label htmlFor={label}>{label}</label>
    )}
    {text && (
        <div className='flex gap-3'>
            <input
                type="text"
                className="border rounded py-1 px-2 w-full"
            />
        </div>
    )}
    {password && (
        <div className='flex gap-3'>
            <input
                type="password"
                className="border rounded py-1 px-2 w-full"
            />
        </div>
    )}
    </div>
  );
}

export default Form;
