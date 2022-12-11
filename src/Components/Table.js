import TableRow from "./TableRow";

function Table({posts, error})  {
    return <table>
        <thead>
        <tr>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
        </tr>
        </thead>
        <tbody>
        { posts.map(post => {   //console.log(post);
            return <TableRow post={post} key={post.id} />

            /*{
            return <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
            </tr>
            }*/
        })
        }
        </tbody>
    </table>
}

export default Table;