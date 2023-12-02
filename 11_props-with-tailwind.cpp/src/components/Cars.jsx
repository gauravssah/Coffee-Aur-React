import React from 'react'

function Cars(props) {
    console.log(props)
    let { name, jobTitle, img } = props.employee;

    console
    return (
        <div className="relative h-[400px] w-[300px] rounded-md">
            <img
                src={img}
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{name}</h1>
                <p className="mt-2 text-sm text-gray-300">
                    {jobTitle}
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-gray-600 p-1 hover:opacity-90 rounded-sm">
                    View Profile &rarr;
                </button>
            </div>
        </div>
    )
}

export default Cars
