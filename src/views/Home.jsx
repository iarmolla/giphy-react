import React, { useEffect, useState } from 'react'
import syncs from '../syncs/gifs'
import '../styles/home.css'
import NavBar from '../components/NavBar'

function Home() {

    const [gifs, updateGifs] = useState()
    useEffect(() => {
        syncs.getTrending(updateGifs)
    }, [])
    return (
        <div>
            <div className='flex justify-center'>
                <NavBar updateGifs={updateGifs}></NavBar>
            </div>
            <div className='container-gif '>
                {
                    gifs?.data.map((gif) => {
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