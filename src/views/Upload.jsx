import '../styles/upload.css'

function Upload() {
    return (
        <div className='container-upload h-screen flex flex-row items-center justify-center'>
            <main className='upload rounded-md p-16 flex flex-col justify-center items-center place-content-center'>
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
                <section>
                        <span>Community Guidelines</span>
                        <span>Privacy Policy</span>
                </section>
            </main>
        </div>
    )
}
// Community GuidelinesPrivacy Policy
export default Upload