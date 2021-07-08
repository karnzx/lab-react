import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import _, { set } from 'lodash';

const prepareStateFromWord = (given_word, max_attempts) => {
    let word = given_word.toUpperCase();
    let chars = _.shuffle(Array.from(word));
    return {
        word, chars, attempt: 1, guess: '', completed: false, max_attempts
    }

}
export default function WordCard(props) {
    const [state, setState] = useState(prepareStateFromWord(props.value, props.max_attempts))
    const activationHandler = c => {
        console.log(`${c} has been activated.`)

        let guess = state.guess + c
        setState({ ...state, guess })

        if (guess.length == state.word.length) {
            if (guess == state.word) {
                console.log('yea')
                setState({ ...state, completed: true })
            }
            else {
                console.log('reset, next attempt')
                setState({ ...state, guess: '', attempt: state.attempt + 1 })
            }
        }
    };

    return (
        <div>
            {
                state.chars.map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt} max_attempts={state.max_attempts} />)
            }
        </div>
    )
}