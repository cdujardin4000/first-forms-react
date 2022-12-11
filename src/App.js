import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

import Form from "./Components/Form";
import Table from "./Components/Table";
import FormById from "./Components/FormById";


function App() {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://jsonplaceholder.typicode.com/posts',
            );

            setPosts(result.data);
        };

        fetchData();
    }, []);

      return (
        <div className="App">
            <Form posts={posts} setPosts={setPosts} />
            <FormById posts={posts} setPosts={setPosts} />
            <Table posts={posts} error={error} />
        </div>

      );
}

export default App;
