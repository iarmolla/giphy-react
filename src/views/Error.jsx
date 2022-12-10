import React from 'react'
import '../assets/images/404.svg'
import { Link } from "react-router-dom"

function Error() {
    return (
        <div className="items-center flex justify-center content-center flex-col-reverse lg:flex-row md:gap-28 gap-16 min-h-screen">
            <div className="pt-24 w-1/2 relative">
                <div className="relative">
                    <div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="my-2 text-slate-500 font-bold text-2xl">
                                Looks like you've found the
                                doorway to the great nothing
                            </h1>
                            <p class="my-2 text-slate-500">Sorry about that! Please visit our hompage to get where you need to go.</p>
                            <Link to={'/'} className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Back!</Link>
                        </div>
                    </div>                    
                </div>
            </div>
           
        </div>
    )
}

export default Error