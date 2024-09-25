import Footer from '../footer';
import QuoteCard from './QuoteCard';
const Quote = ()=>{
    const quoteData = [
        {
            desc: "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
            author: "Adam Scott",
        },
        {
            desc: 'Eat breakfast like a king, lunch like a prince, and dinner like a pauper.',
            author: 'Adelle Davis'
        },
        {
            desc: 'We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.',
            author: 'Adelle Davis'
        },
        {
            desc: 'Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.',
            author: 'Albert Einstein'
        },
        {
            desc: 'Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.',
            author: 'Alice May Brock'
        },
        {
            desc: 'Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, "Your fatness is an affront to me, so we have the right to treat you as offensively as you appear." Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.',
            author: 'Anthelme Brillat-Savarin'
        },
        {
            desc: 'Fat people, it is commonly held, should be punished because they offend our aesthetic sensibilities. They take up too much space on subways, buses, airplanes, and elevators. They consume more than they contribute to society. They become ill and need to be taken care of, or they die early and their families are left unsupported. The only way fat people can gain some acceptance and forgiveness for their crime of overeating is to at least try, or look like they are trying, to lose weight. They must never eat an ice cream cone in public, never be seen eating a normal sized portion of non-diet food!',
            author: 'Calvin Trillin'
        },
        {
            desc:'Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good.',
            author: 'Calvin Trillin'
        },
        {
            desc: 'Tell me what you eat, and I will tell you what you are.',
            author: 'Cyra McFadden'
        },
        {
            desc: 'Health food makes me sick.',
            author: 'Eike von Repkow'
        },
        {
            desc: 'The most remarkable thing about my mother is that for thirty years she served the family nothing but leftovers. The original meal has never been found.',
            author: 'Epictetus'
        },
        {
            desc: 'I no longer prepare food or drink with more than one ingredient.',
            author: 'Epictetus'
        },
        {
            desc: "Eating is really one of your indoor sports. You play three times a day, and it's well worth while to make the game as pleasant as possible.",
            author: 'Fran Lebowitz'
        },
        {
            desc: 'My ability to tolerate shame, to compartmentalize it, to swallow it, increased right along with my belt size. it came with the territory of being heavy. Obese people have a lifetime of experience with shame.',
            author: 'Fran Lebowitz'
        },
        {
            desc: "The people who can most successfully lose weight and maintain a healthy life style are foodies. When it comes to healthy eating, people who know how to cook and make ingredients taste good have a distinct advantage over those who can't.",
            author: 'G. K. Chesterton'
        },
        {
            desc: 'He who comes first, eats first. [Familiar as: First come first served.]',
            author: 'Geoffrey Neighor'   
        },
        {
            desc: 'Bear in mind that you should conduct yourself in life as at a feast.',
            author: 'George Bernard Shaw'
        },
        {
            desc: 'Preach not to others what they should eat, but eat as becomes you, and be silent.',
            author: 'George Dennison Prentice'
        },
        {
            desc: 'I have never cared much for fish - it floats in the belly as much as in the pond.',
            author: 'Henry Bromel'
        },
        {
            desc: 'If the divine creator has taken pains to give us delicious and exquisite things to eat, the least we can do is prepare them well and serve them with ceremony.',
            author: 'J. R. R. Tolkien'   
        },
        {
            desc: 'Food is an important part of a balanced diet.',
            author: '',
        },
        {
            desc: 'My favourite animal is steak.',
            author: '',
        },
        {
            desc: 'Music with dinner is an insult both to the cook and the violinist.',
            author: '',
        },
        {
            desc: "Just as animal research tells us that gluttony and sloth are side effects of a drive to accumulate body fat, it also says that eating in moderation and being physically active (literally, having the energy to exercise) is not evidence of moral rectitude. Rather, they're the metabolic benefits of a body that's programmed to remain lean.",
            author: '',
        },
        {
            desc: "We don't get fat because we overeat; we overeat because we're getting fat.",
            author: ''
        },
        {
            desc: "Good food ends with good talk.",
            author: '',
        },
        {
            desc: 'There is no love sincerer than the love of food.',
            author: ''
        },
        {
            desc: "What some call health if purchased by perpetual anxiety about diet, isn't much better than tedious disease.",
            author: ''
        },
        {
            desc: "It's important to begin a search on a full stomach.",
            author: ''
        },
        {
            desc: 'If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.',
            author: ''
        }
    ]
    return (
        <>
           <div className="qoute-cont flex flex-col gap-16 mt-28">
                {
                    quoteData.map((item, index)=>(
                        <QuoteCard key={"quote"+index} {...item}/>
                    ))
                }
           </div>
           <Footer/>
        </>
    )
};

export default Quote;