import React, { useEffect, useState } from 'react'
import syncs from '../syncs/gifs'
import '../styles/home.css'
import NavBar from '../components/NavBar'

function Home() {

    const [search, updateSearch] = useState()
    const [gifs, updateGifs] = useState()
    const [mouseHover, setMouseHover] = useState()

    useEffect(() => {
        syncs.getTrending(updateGifs)
    }, [])
    console.log(mouseHover)
    return (
        <div>
            <div className='lg:flex lg:justify-center sm:flex sm:justify-center'>
                <NavBar updateGifs={updateGifs} updateSearch={updateSearch} search={search}></NavBar>
            </div>
            <div className='container-gif lg:my-8 lg:mx-40 sm:m-8 sm:grid sm:grid-cols-1 sm:grid-rows-1'>
                <div className='flex flex-row gap-4 items-center left-4 mt-5 absolute -top-20'>
                    <button className='rounded-md bg-slate-700 w-20 py-1' onClick={() => {
                        syncs.getBySearch(search, updateGifs);
                    }}>Gifs</button>
                    <button className='rounded-md bg-slate-700 w-20 py-1' onClick={() => {
                        syncs.getStickers(search, updateGifs);
                    }}>Stickers</button>
                </div>
                {
                    gifs?.data.map((gif) => {
                        return (
                            <div key={gif.id} className='gif-card' onMouseEnter={((e)=> {
                                setMouseHover('block')
                            })}
                            onMouseLeave={((e)=> {
                                setMouseHover('hidden')
                            })}>
                                <div className='gif-link'>
                                    <img src={gif.images.original.url} alt="" />
                                    <div className='flex flex-row absolute bottom-2 gap-2 left-1'>
                                        {

                                            gif?.user?.hasOwnProperty('avatar_url') ? <img className={`w-10 h-10 rounded-full ${mouseHover}`} src={gif?.user?.avatar_url} alt="" /> : <img src="" alt="" />
                                        }
                                        {
                                            gifs?.user?.username != "" ? <h3 className={`gif-title ${mouseHover}`}>{gif?.user?.username}</h3> : ''
                                        }
                                    </div>
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