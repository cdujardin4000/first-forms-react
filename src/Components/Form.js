import { useState } from "react";

function Form({posts, setPosts}) {
    const [keyword, setKeyword] = useState('');

    const handleSubmit =  (e) => {
        e.preventDefault();
        console.log(`The name you entered was: ${keyword}`)
        console.log(posts);
        posts =  posts.filter((post)=>post.title.includes(keyword));
        setPosts(posts);
        console.log(posts);
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <input type="text" placeholder="Search..." name="keyword" value = { keyword } onChange={(e) => setKeyword(e.target.value)} />
            <button>Search</button>
        </div>
    </form>
}

export default Form;