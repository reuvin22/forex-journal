import React from 'react'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

function Journal() {
    const data = [{
        date: 'Aug 20, 2021',
        pair: 'XAU/USD',
        lot_size: '0.01',
        result: 'Pending',
        reason: 'Wala lang'
    }]

  return (
    <>
      <Navbar />
      <div className="p-4 h-screen overflow-auto">
        <div className='mt-20'>
            <div className="flex justify-end mb-4">
                <button className='px-4 py-2 cursor-pointer rounded-md bg-green-500 text-white font-bold hover:bg-green-400'>Add Data</button>
            </div>
            <table className="w-full table-auto border-collapse text-center">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border px-4 py-2">Date</th>
                    <th className="border px-4 py-2">Pair</th>
                    <th className="border px-4 py-2">Lot Size</th>
                    <th className="border px-4 py-2">Result</th>
                    <th className="border px-4 py-2">Reason</th>
                    <th className="border px-4 py-2">Action</th>
                </tr>
                </thead>
                <tbody>
                    {data.map((items, index) => {
                        const resultClass =
                        items.result.toLowerCase() === 'win'
                            ? 'text-green-600'
                            : items.result.toLowerCase() === 'lose'
                            ? 'text-red-600'
                            : items.result.toLowerCase() === 'pending'
                            ? ''
                            : '';

                        return (
                        <tr key={index}>
                            <td className={`border px-4 py-2 ${resultClass}`}>{items.date}</td>
                            <td className={`border px-4 py-2 ${resultClass}`}>{items.pair}</td>
                            <td className={`border px-4 py-2 ${resultClass}`}>{items.lot_size}</td>
                            <td className={`border px-4 py-2 ${resultClass}`}>{items.result}</td>
                            <td className={`border px-4 py-2 ${resultClass}`}>{items.reason}</td>
                            <td className="border">
                            <div className="flex justify-center items-center gap-6">
                                <FontAwesomeIcon icon={faEye} className="text-gray-500 cursor-pointer hover:text-blue-400" />
                                <FontAwesomeIcon icon={faPen} className="text-gray-500 cursor-pointer hover:text-green-400" />
                                <FontAwesomeIcon icon={faTrash} className="text-gray-500 cursor-pointer hover:text-red-400" />
                            </div>
                            </td>
                        </tr>
                        );
                    })}
                    </tbody>
            </table>
            </div>
      </div>
    </>
  )
}

export default Journal
