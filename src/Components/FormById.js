import React, {useEffect, useState} from "react";
import axios from "axios";


function FormById({posts, setPosts}) {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${inputValue}`)
            console.log(response.data)
            setPosts(response.data);

        }
        fetchData();
    }, [inputValue]);



    return <form>
        <div>
            <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <label htmlFor="filterByUser">Only show posts from user</label>
        </div>
    </form>
}

export default FormById;