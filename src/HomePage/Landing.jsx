import Header from '../header';
import Feedback from './feedback';
import Footer from '../footer';
import {Link} from 'react-router-dom';
const Landing = ()=> {
    const feedData = [
        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.',
        },
        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.',
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.',
        },
        {
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.',
        },
        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!',
        },
        {
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.',
        }
    ]
    return (
        <>
            <Header/>
            <div className="hero flex items-center">
                <div className="hero-wrapper pl-12">
                    <p className="hero-head text-5xl font-bold text-center">Let us find your</p>
                    <p className="hero-subhead text-5xl font-bold text-rose-600 text-center">Forever Food.</p>
                    <p className="text-xl mt-5 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <p className="text-xl mt-1 text-center">Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                    <div className="hero-btn mt-6 flex gap-5">
                        <Link to="/Restaurants"><button className="ease duration-300 hover:cursor-pointer hover:bg-rose-800 bg-rose-600 text-white">Search Now</button></Link>
                        <button className="text-rose-600 bg-white">Know More</button>
                    </div>
                </div>
                <div className="hero-stripe h-full -z-10 w-full absolute"></div>
            </div>
            <div className="contact mt-20 px-7 md:relative">
                <div className="contact-card flex flex-col md:items-center md:flex-row">
                    <div className="contact-img">
                        <img className="md:relative md:translate-x-10" src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                    </div>
                     <div className="contact-info  bg-gray-100 flex flex-col md:justify-center gap-5 md:pl-24">
                        <p className="text-3xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</p>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                        <a className="ease duration-300 bg-purple-900 hover:text-blue-800 hover:bg-transparent border border-purple-900 py-2 px-5 w-36 rounded-lg text-white" href="#">Get In Touch</a>
                     </div>
                </div>
            </div>
            <div className="feedback flex flex-wrap justify-center gap-16 mt-36">
                {
                    feedData.map((data,index)=>{
                        return <Feedback key={"feed"+index} desc={data.desc}/>
                    })
                }
            </div>
            <Footer/>
        </>
    )
}

export default Landing;