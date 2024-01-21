import React, { useState } from 'react'
import Loader from './Loader';
import useGif from '../hooks/useGif';



export default function SearchGif() {


    const [searchGif, setSearchedGif] = useState('');

    const { gif, loading, fetchData } = useGif();


    return (
        <div className='bg-red-500 w-0.9/2 border-black-600'>
            <div className="gif-cntr h-[350px] bg-blue-300 
             border-10 border-black-400 rounded-lg ">

                <div className="gif-box  bg-slate-300">
                    {
                        (loading) ? (<Loader />) : (
                            <img src={gif} alt="gif" width="450" />
                        )
                    }

                </div>

                <input
                    className='input-box'
                    type='text'
                    required
                    placeholder='Type here'
                    value={searchGif}
                    onChange={(event) => setSearchedGif(event.target.value)}
                >
                </input>
                <button onClick={() => { fetchData() }} className="
                px-5 py-1 m-5
                border-10 border-black border-solid">
                    Generate Random Gif</button>
            </div>
        </div>
    )
}
