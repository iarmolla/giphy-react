import '../styles/upload.css'

function Upload() {
    return (
        <div className='container-- h-screen'>
            <div className='flex flex-col pt-4'>
                <header className='flex flex-row justify-around max-h-10'>
                    <div className='flex flex-row justify-center items-center'>
                        <img src="https://images.squarespace-cdn.com/content/v1/599bbf76914e6bb960c6d0bb/1525422704166-0UFZBQI8WXK6NVH6KYHA/giphy+logo+web+whit-01.png?format=1500w" className='max-h-20' alt="" />                       
                    </div>                    
                    {/* HEADER BUTTON LOGIN USER */}
                    <div className='flex flex-row'>
                        <div className="w-max flex items-center bg-zinc-600 rounded-l-sm p-2">
                            <box-icon name='user' type='solid' color='#fffefe'></box-icon>
                        </div>
                        <button className="bg-zinc-700 rounded-r-sm px-5 sm:px-5 lg:px-20 py-2">Log in</button>
                    </div>
                </header>
                <div className='relative container-upload flex flex-row items-center justify-center'>
                    <img className='absolute sticker' src="https://giphy.com/static/img/creation_tools/upload-peeker.gif" alt="" />
                    <main className='upload rounded-md p-12 m-4 flex flex-col justify-center items-center place-content-center'>
                        <section className='flex flex-col justify-center items-center'>
                            <h1 className='text-center'>GIPHY Upload </h1>
                            <p className='text-center text-lg w-3/4'>Upload your collection to share on Facebook, Twitter, Instagram, text message, email, & everywhere else.</p>
                        </section>
                        <div className='upload-gifs gap-x-5'>
                            {/* SECTION UPLOAD GIF */}
                            <section className='mt-1 gif-icon flex flex-col justify-center items-center gap-3 w-full'>
                                <div className='box-icon'>
                                    <box-icon name='file-gif' type='solid' color='#ffffff'></box-icon>
                                    <h2 className='p-0 m-0'>GIF</h2>
                                </div>
                                <div>
                                    <p>Upload a GIF,MP4, MOV, or WebM</p>
                                </div>
                                <section className="file-select" id="src-file1" >
                                    <input type="file" className='w-full' name="src-file1" aria-label="Archivo" />
                                </section>
                            </section>
                            {/* SECTION UPLOAD STICKER */}
                            <section className='mt-1 gif-icon flex flex-col justify-center items-center gap-3 w-full'>
                                <div className='box-icon'>
                                    <box-icon name='sticker' type='solid' color='#fff'></box-icon>
                                    <p className='p-0 m-0'>Sticker</p>
                                </div>
                                <div>
                                    <p>Upload a GIF with transparency</p>
                                </div>
                                <section className="file-select" id="src-file1" >
                                    <input type="file" className='w-full' name="src-file2" aria-label="Archivo" />
                                </section>
                            </section>
                            {/* SECTION URL */}
                            <section className='gif-url gif-icon flex flex-col justify-center items-center w-full'>
                                <div className='flex flex-col justify-start w-full p-5'>
                                    <p className='w-full m-0'>Any URL</p>
                                    <p>We support media URLs from GIPHY, YouTube, Vimeo, & many others!.</p>
                                </div>
                                <div className='w-full px-5'>
                                    <input
                                        className="outline-0 text-left text-gray-900 text-sm rounded-sm py-3 px-3 min-w-full mb-8"
                                        placeholder="Enter any media or GIF URL" />
                                </div>
                            </section>
                        </div>
                        <section className='absolute bottom-7 flex flex-row gap-8'>
                            <span>Community Guidelines</span>
                            <span>Privacy Policy</span>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}
// Community GuidelinesPrivacy Policy
export default Upload