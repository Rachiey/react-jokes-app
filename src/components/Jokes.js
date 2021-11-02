import React from 'react';
import { Joke } from './Joke';
import { Card } from './Card';

const jokes = [
    {joke: "Don’t you hate it when someone answers their own questions? I do.", punchline: "punchline here"},
    {joke: "I used to think I was indecisive. But now I’m not so sure.", punchline: "punline here"},
    {joke: "Russian dolls are so full of themselves.", punchline: "punchline here"}
]

const Jokes = () => {
    // change joke key to card key
    const renderJokes = () => jokes.map((p, i) => <Joke key={i} joke={p.joke} punchline={p.punchline}/>);

    return (
        <section id="jokes">
            <h2>Pick a joke:</h2>
            <ol>
                { renderJokes() }
            </ol>

        </section>
    )
}

export default Jokes;