import React from 'react'

export const Joke = ({ joke }) => {
    return (
        <ol>
            <em>{ joke }</em>
        </ol>
    )
}

export default Joke;