import React from 'react';
import { Joke } from './Joke';

const jokes = [
    {joke: "Don’t you hate it when someone answers their own questions? I do."},
    {joke: "I used to think I was indecisive. But now I’m not so sure."},
    {joke: "Russian dolls are so full of themselves."}
]

export const Jokes = () => {
    const renderJokes = () => jokes.map((p, i) => <Joke key={i} joke={p.joke}/>);

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