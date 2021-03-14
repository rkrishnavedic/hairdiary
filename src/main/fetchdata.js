import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetching(){
    const [data, setData] = useState([]);

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>{
                console.log(response);
                setData(response.data);
            })
            .catch(err =>{
                console.log(err);
            })

    },[])

    return (
        <div>

        </div>
    )
}

export default DataFetching;
