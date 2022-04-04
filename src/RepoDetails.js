import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"



function RepoDetails({searchValue}) {
    const { id } = useParams()
    const [showRepo, setShowRepo] = useState([]);


    // useEffect(() => {
    //     fetch(`https://api.github.com/orgs/${searchValue}/repos/${id}`)
    //         .then((r) => r.json())
    //         .then(data => {
    //             setShowRepo(() => data)
    //         })
    // }, []);

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

export default RepoDetails