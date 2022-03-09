const ListFriend = ({ data: listFriend, onclick }) => {
    return (
        <ul>
            {listFriend.map(item => (
                <li key={item.id} style={{ padding: '4px 0' }}>
                    {item.name}
                    <button style={{ marginLeft: 10 }} onClick={() => onclick(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default ListFriend;