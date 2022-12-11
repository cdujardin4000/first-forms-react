const TableRow = (item) => {
    const {post} = item;    //console.log(item.post);

    return <tr>
        <td>{post.userId}</td>
        <td>{post.id}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
    </tr>;
}

export default TableRow;