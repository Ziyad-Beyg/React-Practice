import React,{useState} from "react";

function StoryComp({storyHeading, storyImage, storyPara}){

    let storiesData = [{heading:"THE JOURNEY OF THE MARMABILL", image:"https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/1584554285515-IMX8YBBXLUREIMH8G3VM/Journey+of+the+Marmabill+Youtube+Thumbnail.jpeg?format=750w", para:"For those spending time at home, looking for a cozy adventure or bedtime story for kids, we offer this imaginative rhyming picture book, read by the author, Daniel Errico. Follow the Marmabill on her quest through the rainforest, where she meets fantastical creatures like wugs, tankadiggies, and flying fluthers. As her journey takes her from treetops to glowing underground caves, the Marmabill finds out for herself the true meaning of home. Remember, our stories for kids are here for you to read at any time. And remember, Dream Big!"}, {heading:"THE GUARDIANS OF LORE", image:"https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/1575530449528-BRAKUPDENXCLW4IAP8YU/GOL+Cover+for+Site.jpg?format=500w", para:"While drawing in class at Stagwood School, 12-year old Cal sees a frog staring at him through the window. Stranger than that, is the fact that this frog happens to be wearing glasses. Cal and his best friend, Soy, learn that the frog (who prefers the name Deli) has sought them out for a reason. When a school administrator named Ream reveals himself to be a dragon, the boys discover that fairytales are real, and that there is magic afoot in Stagwood. With Ream on their tail, the trio must unearth a powerful tool protected by riddles and rile (the magic that fuels nightmares) to save the fate of all fairytales past. But, before Cal can defeat Ream, he has to deal with Soy's knack for arguing with magical creatures, discover the truth about Deli's identity, and earn his place as the hero of the story. The Guardians of Lore is a middle grade novel that centers around two life-long friends, infusing humor and fantasy-based riddles into a modern fairytale."},
    {heading:"THE PARTICULAR WAY OF THE ODD MS. MCKAY", image:"https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/1575531022344-QZT8DBDKVL51MRWIPKLY/COVER+SMALL-min.jpg?format=500w", para:"This quirky tale is about our most infamous character of all. If you don’t have a soufflé-baking, trumpet-blaring, sleigh-riding friend, then maybe it’s time that you met Ms. McKay. Told as a monorhyme poem. “Say what you will or say what you may, you’ll remember the day that you met Ms. McKay…”  "}, 
    {heading:"COAT THIEF", image:"https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/1590379594425-GXMDFMN1KYP05B5FYYDJ/Mr.+McKay+Cover+Smaller.jpg?format=750w", para:"Mr. McKay is a most mischievous fellow. His hair and eyes have been known to change color with the seasons. If you ever feel a warm breeze on a very cold winter day, be sure to keep your coat on, because it may be Mr. McKay playing his trick! A light-hearted, rhyming bedtime story about keeping your coat on when it’s awfully cold outside."}]
    
    const [storiesInArray, setStoriesInArray] = useState(0)


    // var arrayIndex = 0

    let nextBtn = ()=>{
        
        if(storiesInArray < 4){
            console.log(storiesInArray)
            setStoriesInArray(storiesInArray + 1)
        }
        else if(storiesInArray > 3){
            setStoriesInArray( storiesInArray = 0)
        }
        
    }

    return(
        <div style={{textAlign: "center"}}>
            {storiesInArray}
                {/* <h1>
                    {storiesData[storiesInArray].heading}
                </h1>
                <br/>
                <img width="220px" height="220px" src={storiesData[storiesInArray].image}/>
                <br/>
                <p>
                    {storiesData[storiesInArray].para}
                </p>
                <br/>
                <br/> */}
            <div>
                <button>
                    BACK
                </button>
                <button onClick={nextBtn}>
                    NEXT
                </button>
            </div>
        </div>
    )
}

export default StoryComp