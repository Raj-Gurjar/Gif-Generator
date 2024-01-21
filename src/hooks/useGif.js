import axios from 'axios';
import React, { useEffect, useState } from 'react'




// const API_KEY = process.env.GIPHY_API_KEY;
const API_KEY = 'X15fcmlwkxs8YGhLYk1SnGYgUlw7LOrr';


export default function useGif(searchGif) {

    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);


    async function fetchData() {
        const Randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

        const SearchedUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchGif}`;
        try {
            setLoading(true);
            const { data } = await axios.get((searchGif) ? SearchedUrl : Randomurl);
            const imgSource = data.data.images.downsized_large.url
            console.log(imgSource);
            setGif(imgSource);
            setLoading(false);



        } catch (error) {
            console.error('Error fetching random GIF:', error);
        }

    }

    useEffect(() => {
        fetchData();
    }, [])

  return{gif,loading,fetchData}
}
