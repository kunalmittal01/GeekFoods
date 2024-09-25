const Restaurantcard = (props)=>{
    
    return (
        <div className="restaurant-card w-96 shadow-lg">
            <div className="rest-data py-5 px-4 flex flex-col gap-1">
                <div className="rest-head flex items-center gap-2 text-xl">
                    <p className="font-semibold">{props.name}</p>
                    <div className="rest-stars text-yellow-500">{props.stars}</div>
                </div>
                <p className="flex gap-2 items-center text-sm">
                    <i className="fa-solid fa-location-dot text-gray-600"></i> 
                    <span className="">{props.address}</span>
                </p>
                <p>{`${props.outcode} ${props.postcode}`}</p>
            </div>
            <div className="menu bg-gray-200 py-4 px-4">
                <div className="food-type text-green-600 flex items-center gap-1">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 416 512" className="inline mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"></path></svg>
                    <p>{props.type_of_food}</p>
                </div>
                <a className="text-blue-600" href={props.URL}>Visit Menu</a>
            </div>
        </div>    
    )
}

export default Restaurantcard;