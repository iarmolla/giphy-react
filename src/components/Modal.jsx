import React from 'react'
import '../styles/modal.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

function Modal({ image, showModal, setShowModal }) {
    return (
        <div>
            {
                showModal == true ? <div>
                    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center hover:opacity-100">
                        <div className="relative rounded m-5">                        
                            <LazyLoadImage effect="opacity" height={"100%"} width="100%" className='w-full' src={image} alt="modal imagen" />
                            <div className='absolute top-0 p-2 rounded-lg text-sm image-icon hover:text-white cursor-pointer' onClick={()=> setShowModal(false)}>
                                <box-icon name='x' color='#fffafa'></box-icon>
                            </div>
                        </div>
                    </div>
                </div> : ''
            }
        </div >
    )
}

export default Modal

