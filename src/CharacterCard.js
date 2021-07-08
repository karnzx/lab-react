import React, { useState, useEffect, useRef } from 'react';
import './App.css'

export default function CharacterCard(props) {
    const [active, setActive] = useState(false);
    const [available, setAvailable] = useState(true);
    const attempt = useRef(props.attempt);

    const activate = () => {
        if (!active && available) {
            setActive(true);
            props.activationHandler(props.value)
        }
    }

    useEffect(() => {
        if (attempt.current != props.attempt) {
            setActive(false)
            attempt.current = props.attempt
        }
        if (attempt.current > props.max_attempts) {
            setAvailable(false)
        }
    })

    const className = `card ${active ? 'activeCard' : ''}`;
    return (
        <div className={className} onClick={activate}>{props.value}</div>
    )
}