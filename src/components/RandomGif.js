import React from 'react'
import Loader from './Loader';
import useGif from '../hooks/useGif';


// const API_KEY = process.env.GIPHY_API_KEY;
const API_KEY = 'X15fcmlwkxs8YGhLYk1SnGYgUlw7LOrr'
console.log(API_KEY);



export default function RandomGif() {

    const { gif, loading, fetchData } = useGif();



    return (
        <div className='bg-red-500 w-0.9/2 border-black-600'>
            <div className="gif-cntr h-[350px] bg-green-300 
             border-10 border-black-400 rounded-lg ">

                <div className="gif-box  bg-slate-300">
                    {
                        (loading) ? (<Loader />) : (
                            <img src={gif} alt="gif" width="450" />
                        )
                    }

                </div>
                <button onClick={() => { fetchData() }} className="
                px-5 py-1 m-5
                border-10 border-black border-solid">
                    Generate Random Gif</button>
            </div>
        </div>
    )
}
