import Image from 'next/image'
import React from 'react'

function ServiceCard({ service }) {
    const { title, img, price } = service || {};
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <Image height={120} width={430} src={img} alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <div className="card-actions justify-between items-center">
                    <h6 className='text-primary font-semibold'>Price : ${price}</h6>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard