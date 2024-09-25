import {useState} from 'react';
import Footer from '../footer';
import Restaurantcard from './Restaurantcard';
import restaurantsData from './restaurantData';
const Restaurants = ()=> {
    const stars=[0,0,0,0,0,];
    const [query, setQuery] = useState(null);
    const [userrating, setRating] = useState(null);
    const updateRestaurants = (e) => {
        setQuery(e.target.value);
    }
    const getRating = (e) => {
        setRating(e.target.value);
        
    }
    return (
        <>  
            <div className="restaurants mt-28">
                <div className="search-field flex flex-col items-center md:flex-row md:justify-between px-10 gap-10">
                    <input onChange={updateRestaurants} className="border border-gray-300 py-2 px-1" type="text" placeholder="Search restaurants..."/>
                    <div className="rating-cont">
                        <label htmlFor="ratings">Minimum Rating: </label>
                        <input onChange={getRating} className="border border-gray-300 w-16" type="number" id="ratings" />
                    </div>
                </div>
                <div className="reasturant-card-cont mt-16 flex gap-16 justify-around flex-wrap md:gap-5">
                    {
                        restaurantsData.filter(restaurant=>{
                            
                            if(query) {return restaurant.name.toLowerCase().includes(query.toLowerCase()) || restaurant.rating <= Number(userrating) || restaurant.type_of_food.toLowerCase().includes(query.toLowerCase()) || (restaurant.name.toLowerCase().includes(query.toLowerCase()) && restaurant.rating === rating)}
                            else if(userrating) {return parseInt(restaurant.rating) <= userrating}
                            return true;
                        }).map((data,index) => {
                            const starArr = stars.map((star,idx)=>{
                                const starType = (data.rating >= idx+1)?"solid":"regular";
                                return <i key={star+idx} className={"fa-star" + " fa-" + starType}></i>
                            })
                            return <Restaurantcard key={data._id.$oid} {...data} stars={starArr}/>
                        })
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Restaurants;