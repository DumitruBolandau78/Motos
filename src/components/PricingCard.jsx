// eslint-disable-next-line react/prop-types
const PricingCard = ({ type, desc, price, howLong, domains, fileUpload, storage, bandwidth, isUnlimitedBandwidth }) => {
    return (
        <div className="bg-white p-7 rounded-lg">
            <h3 className="title font-medium text-lg uppercase mb-4">{type}</h3>
            <p className="desc mb-7 text-gray-500 font-normal">{desc}</p>
            <div className="flex mb-6">
                <span className="text-4xl font-medium">{price}</span>
                <span className="self-end">/{howLong}</span>
            </div>
            <button className="bg-green-500 text-white w-full rounded py-2 mb-6">Buy Now</button>
            <hr />
            <div className="subtitle mb-5 mt-7 font-medium">Features:</div>
            <div className="flex items-center gap-3 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>{domains}</div>
            </div>
            <div className="flex items-center gap-3 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>{fileUpload}</div>
            </div>
            <div className="flex items-center gap-3 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>{storage}</div>
            </div>
            <div className="flex items-center gap-3 mb-1">
                {isUnlimitedBandwidth ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                }


                <div>{bandwidth}</div>
            </div>
        </div>
    )
}

export default PricingCard