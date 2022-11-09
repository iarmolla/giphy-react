import React, { useEffect, useState } from 'react'
import syncs from '../syncs/gifs'
import '../styles/home.css'
import NavBar from '../components/NavBar'

function Home() {

    const [trending, updateTrending] = useState()
    useEffect(() => {
        // getTrending(updateTrending)
        // getBySearch('chainsaw man')
        get.getBySearch('chainsaw man')
    }, [])
    console.log(trending)
    return (
        <div>
            <div className='flex justify-center'>
            <NavBar></NavBar>
            </div>
            <div className='container-gif '>
                {
                    trending?.data.map((gif) => {
                        return (
                            <div key={gif.id} className='gif-card'>
                                
                                <div className='gif-link'>
                                    <img src={gif.images.original.url} alt="" />
                                    <h3 className='gif-title'>{gif.title}</h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home