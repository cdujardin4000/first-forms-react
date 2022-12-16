import {useEffect, useState} from "react";
import axios from "axios";

function Form({posts, setPosts}) {
    const [keyword, setKeyword] = useState('');

    console.log(`The name you entered was: ${keyword}`)

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            console.log(response.data);
            posts =  response.data.filter((post)=>post.title.includes(keyword));
            setPosts(posts);
        }
        fetchData();
    }, [keyword]);

    return <form>
        <div>
            <input type="text" placeholder="Search..." name="keyword" value = { keyword } onChange={(e) => setKeyword(e.target.value)} />
            <button>Search</button>
        </div>
    </form>
}

export default Form;