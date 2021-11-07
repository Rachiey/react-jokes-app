import React from 'react';
import { Joke } from './Joke';
import { Card } from './Card';

const jokes = [
    {joke: "What did Steve say when he was angry at a skeleton?", punchline: "I’ve got a bone to pick with you!"},
    {joke: "What did the zombie say to the villager?", punchline: "Nice to eat you."},
    {joke: "What is a Creepers favorite food?", punchline: "SSSSSSSSSSSalad"},
    {joke: "What is Steve's favourite sport?", punchline: "Boxing!"},
    {joke: "A Creeper walks into a bar…", punchline: "BOOM everyone dies"},
    {joke: "Where do minecraft players sleep?", punchline: "In their bed(rock)"},
    {joke: "Why did the Creeper cross the road?", punchline: "To get to the other ssssssside!"},
    {joke: "What is a Ghast's favourite country?", punchline: "The Nether-lands!"},
    {joke: "Did you hear about that Creeper-only party?", punchline: "It was a blast!"}
]

const Jokes = () => {
    // change joke key to card key
    const renderJokes = () => jokes.map((p, i) => <Card key={i} joke={p.joke} punchline={p.punchline}/>);

    return (
        <section id="jokes">
            <h2>Pick a joke:</h2>
            <ol>
                <div className = "grid">
                { renderJokes() }
                </div>
            </ol>

        </section>
    )
}

export default Jokes;