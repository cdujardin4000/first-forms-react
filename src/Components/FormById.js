import { useState } from "react";

function FormById({posts, setPosts}) {
    const [id, setId] = useState('');

    const handleInput = async (e) => {
        e.preventDefault();
        let id = await e.target.value;
        console.log(`The id you entered was: ${id}`)
        console.log(posts);
        console.log(parseInt(id));
        posts =  posts.filter((post)=>post.userId = parseInt(id));
        setPosts(posts);
        console.log(posts);
    }
    return <form onChange={handleInput}>
        <div>
            <input  type="number" name="filterByUser" id="filterByUser" value = { id } onChange={(e) => setId(e.target.value)}/>
            <label htmlFor="filterByUser">Only show posts from user</label>
        </div>
    </form>
}

export default FormById;