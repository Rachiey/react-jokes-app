import React from 'react'

export const Joke = ({ joke, punchline }) => {
    return (
        <ol>
            <strong>{ joke }</strong>
            <h4>{ punchline }</h4>
        </ol>
    )
}

export default Joke;