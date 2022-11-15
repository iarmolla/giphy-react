import { useEffect, useState } from 'react'
import syncs from '../syncs/gifs'
import '../styles/home.css'
import NavBar from '../components/NavBar'
import Modal from '../components/Modal'

function Home() {
    const [search, updateSearch] = useState()
    const [gifs, updateGifs] = useState([1, 2, 3])
    const [mouseHover, setMouseHover] = useState('hidden')
    const [showModal, setShowModal] = useState(false)
    const [image, setImage] = useState()

    useEffect(() => {
        syncs.getTrending(updateGifs)
    }, [])
    const hideImage = ((gif) => {
        if (gif?.user?.hasOwnProperty('avatar_url')) {
            return <img className={`w-10 h-10 rounded-full ${mouseHover}`} src={gif?.user?.avatar_url} alt="" />
        }
    })
    const hideUser = ((gif) => {
        if (gif?.user?.username !== "") {
            return <h3 className={`gif-title ${mouseHover}`}>{gif?.user?.username}</h3>
        }
    })
    return (
        <div>
            <div className='lg:flex lg:justify-center sm:flex sm:justify-center'>
                <NavBar updateGifs={updateGifs} updateSearch={updateSearch} search={search}></NavBar>
            </div>          
            <div className='container-gif lg:my-8 m-5 lg:m-0 lg:mx-40 sm:m-8 sm:grid sm:grid-cols-1 sm:grid-rows-1'>
                <div className='flex flex-row gap-4 items-center left-4 mt-5 absolute -top-20'>
                    <button className='rounded-md bg-indigo-500 w-20 py-1' onClick={() => syncs.getBySearch(search, updateGifs)}>Gifs</button>
                    <button className='rounded-md bg-indigo-500 w-20 py-1' onClick={() => syncs.getStickers(search, updateGifs)}>Stickers</button>
                </div>
                {
                    gifs?.data?.map((gif) => {
                        return (
                            <div key={gif?.id} className='gif-card' onMouseEnter={() => setMouseHover('block')}
                                onMouseLeave={() => setMouseHover('hidden')} onClick={() => setImage(gif?.images?.original?.url)} >
                                <div className='gif-link overflow-hidden' onClick={()=> setShowModal(true)}>
                                    <img className='w-full' src={gif.images.original.url} alt={gif?.title} />
                                    <div className='flex flex-row absolute bottom-2 gap-2 left-1 gif-item'>
                                        {hideImage(gif)}
                                        {hideUser(gif)}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} image={image}></Modal>

        </div>
    )
}

export default Home