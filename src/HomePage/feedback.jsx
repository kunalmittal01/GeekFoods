const Feedback = (props)=> {
    return (
        <div className="feedback-card w-80">
            <div className="feedback-cont bg-gray-200 py-5 px-4 rounded-md">
                <p className="text-gray-800">{props.desc}</p> 
            </div>
            <div className="feedback-img mt-4 flex items-center gap-3">
                <img className="w-11 h-11 rounded-full" src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" alt="" />
                <div className="img-desc">
                    <p className="font-semibold">Gladis Lennon</p>
                    <p className="text-sm font-semibold">Head of SEO</p>
                </div>
            </div>   
        </div>
    )
}

export default Feedback;