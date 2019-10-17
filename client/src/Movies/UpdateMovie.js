import React, { useState} from 'react';
import axios from 'axios';

const UpdateForm = props => {
    const initialItem = {
        id: props.match.params.id,
        title: "",
        metascore: "",
        director: "",
    };

    const [stars, setStars] =useState([]);
    const [update, setUpdate] = useState(initialItem);
    console.log('update',update)

  const handleChange = e => {
      e.preventDefault();
      setUpdate({...update, [e.target.name]: e.target.value })
  }

  const changeHandlerStars = e => {
    e.preventDefault();
    setStars({...stars, [e.target.name]: [e.target.value] })
}

const data = {
    ...update,
    ...stars
}


  const handleSubmit = e => {
    e.preventDefault();
    axios
    .put(`http://localhost:5000/api/movies/${props.match.params.id}`, data )
    .catch(err => {
        console.log(err.response)
    })
    props.history.push('/')
    window.location.href = window.location.href
  }

  return (
    <div className='UpdateMovie'>
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={update.title}
          placeholder='Title'
        />
        <input
          type="number"
          name="metascore"
          onChange={handleChange}
          value={update.metascore}
          placeholder='Metascore'
        />
        <input
          type='text'
          name="director"
          onChange={handleChange}
          value={update.director}
          placeholder='Director'
        />
        <input
          type="array"
          name="stars"
          onChange={changeHandlerStars}
          value={update.stars}
          placeholder='Stars'
        />
        <button>Update Movie</button>
      </form>
    </div> /* UpdateMovie end */
  );
}


export default UpdateForm;
