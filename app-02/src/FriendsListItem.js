
const FriendsListItem = ({ friend, deleteFriend, setEditable }) => (
    <div className="row border-bottom border-primary p-2">
        <div className="col-1 text-end">{friend.id}</div>
        <div className="col">{friend.fullName}</div>
        <div className="col-2 text-center">{friend.mobile}</div>
        <div className="col-3">{friend.mail}</div>
        <div className="col-2 text-center">{friend.group}</div>
        <div className="col-2 text-center">
            <button className="btn btn-sm btn-secondary me-1" type="button"
                onClick={event => setEditable(friend.id)}>EDIT</button>
            <button className="btn btn-sm btn-danger" type="button"
                onClick={event => deleteFriend(friend.id)}>DELETE</button>
        </div>
    </div>
);

export default FriendsListItem;