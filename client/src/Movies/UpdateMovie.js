import React, { useState, useEffect } from 'react';
import axios from 'axios';


const initialValue = {
    title: '',
    director: '',
    metascore: '',
    stars: []
}

const UpdateForm = props => {
    const [item, setItem] = useState(initialValue)

    useEffect(() => {
        const id = props.match.params.id;
        const updateMovie = props.items.find(item => {
            `${item.id}` === id
        })
        if(updateMovie) {
            setItem(updateMovie);
        }
    }, [])

    return (
        <div>

        </div>
    )
}