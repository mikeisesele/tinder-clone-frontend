import React,  {useState, useEffect} from 'react'
import './Cards.css'
import TinderCard from 'react-tinder-card'
import axios from '../../axios'


function Cards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // call the endpoint
            const request = await axios.get('/tinder/cards')

            // set the state
            setPeople(request.data)
        }
        fetchData()
    }, [])

    console.log(people)

    
    const swiped = (direction, nameToDelete) => { 
        // setLastDirection(direction)
        console.log("removing: " + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen")
    }

    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardsContainer'>

                {
                    people.map((person) => (
                        <TinderCard
                            className="swipe"
                            key={person.name}
                            preventSwipe={["up", "down"]}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >

                        <div style={{ backgroundImage : `url( ${person.imgURL})`}} className="card">
                                  <h3>{person.name}</h3>
                        </div>
                        </TinderCard>
                    ))
                }

            </div>
        </div>
    )
}

export default Cards