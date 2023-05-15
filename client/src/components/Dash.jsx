import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

// useEffect, axios, useState, nvaigate

const Dash = () => {
    // Variable to hold the songs
    const [songList, setSongList] = useState([]);

    // Variable to check if delete has been pressed
    const [refresh, setRefresh] = useState(false);

    // useEffect to get songs from database
    useEffect(() => {
        // http://127.0.0.1:8000
        axios.get("http://localhost:8000/api/songs")
        .then((res) => {
            // Log the data to check formatting
            console.log("Dashboard get request: ", res.data.results)
            setSongList(res.data.results)
        })
        .catch((err) => {
            // Log error if we get one
            console.log("Dashboard error: ", err)
        })
    }, [refresh]);

    // Handle delte function
    const handleDelete = (e, id) => {
        // Log to make sure it works correctly
        console.log("This is our delete function", id)
        axios.delete(`https://localhost:8000/api/songs/delete/${id}`)
        .then((res) => {
            // Log to check that we've deleted something
            console.log("Success, song deleted")
            // Toggle refresh variable
            setRefresh(!refresh)
        })
        .catch((err) => {
            // Log error if we get one
            console.log("Handle delete error ", err)
        })
    }

    return (
        <div>
            <h1>Song Bird Dashboard</h1>
            <button className='btn btn-outline-primary'><Link to={'/create'}>
                Add a Song
            </Link></button>

            {/* Song Table */}
            <table className='table'>
                {/* Table Header */}
                <thead>
                    <th>Artist</th>
                    <th>Song Title</th>
                    <th>Rating</th>
                    <th>Top 100</th>
                    <th>Album Cover</th>
                    <th>Action</th>
                </thead>
                {/* Table Body */}
                <tbody>
                    {
                        songList.map((song, i) => {
                            return (
                                <tr key={i}>
                                    <td>{song.artist}</td>
                                    <td>{song.title}</td>
                                    <td>{song.rating}</td>
                                    <td>{song.top100 ? "Yes" : "No"}</td>
                                    <td><img src={song.img} alt="Album Cover" height="75px"/></td>
                                    <td>
                                        {/* View Button */}
                                        <button 
                                        className='btn btn-outline-warning'>
                                            <Link to={`/details/${song._id}`}>Details</Link>
                                        </button>
                                        {/* Edit Button */}
                                        <button 
                                        className='btn btn-outline-success'>
                                            <Link to={`/update/${song._id}`}>Update</Link>
                                        </button>
                                        {/* Delete Button */}
                                        <button 
                                        className='btn btn-outline-danger'
                                        onClick={(e) => {handleDelete(e, song._id)}}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dash