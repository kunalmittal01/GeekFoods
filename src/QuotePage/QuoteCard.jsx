const QuoteCard = (props)=>{
    return (
        <div className="quote-card rounded-lg bg-gray-800 py-8 px-6 w-5/6 mx-auto">
            <p className="text-center text-3xl font-bold text-white">{props.desc}</p>
            <p className="text-center text-gray-500 font-semibold mt-4">{props.author}</p>
        </div>
    )
}

export default QuoteCard;