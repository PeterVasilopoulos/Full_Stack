import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useNavigate, useParams, Link} from 'react-router-dom';

const Update = () => {
    // Artist variable
    const [artist, setArtist] = useState("");
    // Title variable
    const [title, setTitle] = useState("");
    // Rating variable
    const [rating, setRating] = useState(5);
    // Top 100 variable
    const [top100, setTop100] = useState(false);
    // Image variable
    const [img, setImg] = useState("");

    // Variable to store the song id
    const {id} = useParams();

    // Variablet to hold navigate
    const navigate = useNavigate();

    // useEffect to get song data
    useEffect(() => {
        axios.get(`http://localhost:8000/api/songs/${id}`)
        .then((res) => {
            // Log data to check formatting
            console.log("Update page: ", res.data.results)
            // Set song data into variables
            const song = res.data.results
            setArtist(song.artist)
            setTitle(song.title)
            setRating(song.rating)
            setTop100(song.top100)
            setImg(song.img)
        })
        .catch((err) => {
            // Log error if we get one
            console.log("Update page error: ", err)
        })
    }, [])

    // Form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();

        // Variable to hold updated song data
        let updateData = {artist, title, rating, top100, img};

        axios.put(`http://localhost:8000/api/songs/update/${id}`, updateData, {new: true})
        .then((res) => {
            // Log data
            console.log("This is our handleSubmit for update page ", res)
            // Navigate back to the dashboard
            navigate('/')
        })
        .catch((err) => {
            // Log error if we have one
            console.log("Update submit error ", err)
        })
    }

    return (
        <div>
            <h1>Update Page</h1>

            {/* Update a Song Form */}
            <form className='form-group' onSubmit={handleSubmit}>
                {/* Artist */}
                <div>
                    <label>Artist</label>
                    <input type="text" 
                        className='form-control' 
                        name='artist' 
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}
                    />
                </div>

                {/* Title */}
                <div>
                    <label>Title</label>
                    <input type="text" 
                        className='form-control' 
                        name='title' 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Rating */}
                <div>
                    <label>Rating</label>
                    <input type="number" 
                        className='form-control' 
                        name='rating' 
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                </div>

                {/* Top 100 */}
                <div>
                    <label>Top 100</label>
                    <input type="checkbox" 
                        className='form-check-input' 
                        name='top100' 
                        checked={top100}
                        onChange={(e) => setTop100(e.target.checked)}
                    />
                </div>

                {/* Album Cover */}
                <div>
                    <label>Album Cover</label>
                    <input type="text" 
                        className='form-control' 
                        name='img' 
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                    />
                </div>

                {/* Submit Button */}
                <button type='submit' className='btn btn-outline-dark'>Update Song</button>
                <button className='btn btn-outline-warning'><Link to={'/'}>Nevermind</Link></button>
            </form>
        </div>
    )
}

export default Update