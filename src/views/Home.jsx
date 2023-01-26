import { useEffect, useState } from 'react'
import syncs from '../syncs/gifs'
import '../styles/home.css'
import NavBar from '../components/NavBar'
import Modal from '../components/Modal'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

function Home() {
    const [search, updateSearch] = useState()
    const [gifs, updateGifs] = useState()
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
    const [count, setCount] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    if (!gifs) {
        return (
            <>
                <div>
                    <div className='lg:flex lg:justify-center sm:flex sm:justify-center'>
                        <NavBar updateGifs={updateGifs} updateSearch={updateSearch} search={search}></NavBar>
                    </div>
                    <div className='container-gif lg:my-8 m-5 lg:m-0 lg:mx-40 sm:m-8 sm:grid sm:grid-cols-1 sm:grid-rows-1'>
                        <div className='flex flex-row gap-4 items-center left-4 mt-5 absolute -top-20'>
                            <button className='rounded-md bg-indigo-500 w-20 py-1' onClick={() => syncs.getBySearch(search, updateGifs)}>Gifs</button>
                            <button className='rounded-md bg-indigo-500 w-20 py-1' onClick={() => syncs.getStickers(search, updateGifs)}>Stickers</button>
                        </div>

                    </div>
                    <Modal showModal={showModal} setShowModal={setShowModal} image={image}></Modal>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10 place-items-center'>
                    {count.map(() => {
                        return (
                            <div role="status" class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                                <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                    <svg class="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                </div>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                <div class="flex items-center mt-4 space-x-3">
                                    <svg class="text-gray-200 w-14 h-14 dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                                    <div>
                                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                                        <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                    </div>
                                </div>
                                <span class="sr-only">Loading...</span>
                            </div>
                        )
                    })}
                </div>
            </>)

    }
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
                    gifs?.data?.map((image) => {
                        return (
                            <div key={image?.id} className='gif-card' onMouseEnter={() => setMouseHover('block')}
                                onMouseLeave={() => setMouseHover('hidden')} onClick={() => setImage(image?.images?.original?.url)} >
                                <div className='gif-link overflow-hidden' onClick={() => setShowModal(true)}>
                                    <LazyLoadImage effect="opacity" height={"100%"} width="100%" className='w-full' src={image.images.original.url} alt={image?.title} />
                                    <div className='flex flex-row absolute bottom-2 gap-2 left-1 gif-item'>
                                        {hideImage(image)}
                                        {hideUser(image)}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    gifs?.data?.length == 0 ? <span>No se encontraron gifs </span> : <></>
                }
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} image={image}></Modal>
        </div>


    )
}

export default Home