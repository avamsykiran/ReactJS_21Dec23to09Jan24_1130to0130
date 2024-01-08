import { useState } from 'react';
import FriendsListHeader from './FriendsListHeader';
import FriendsListItem from './FriendsListItem';
import FriendListFormItem from './FriendsListFormItem';

const FriendsList = () => {

    let [friends, setFriends] = useState([
        { id: 101, fullName: "Vamsy Kiran", mobile: "9052224753", mail: "a.vamc.it@gmail.com", group: "FAMILY" },
        { id: 102, fullName: "Sagar Guru Charan", mobile: "9052224703", mail: "sagar@gmail.com", group: "WORK" },
        { id: 103, fullName: "Suseela", mobile: "9052024753", mail: "suseelarani@gmail.com", group: "FAMILY" },
        { id: 104, fullName: "Sarada Gowri", mobile: "9051224753", mail: "sarada@gmail.com", group: "WORK" },
        { id: 105, fullName: "Indhikaa Valli", mobile: "9052824753", mail: "indu@gmail.com", group: "FAMILY" }
    ]);

    let [nextId, setNextId] = useState(106);

    const addFriend = friend => {
        setFriends([...friends, { ...friend, id: nextId }]);
        setNextId(nextId + 1);
    }

    const deleteFriend = id => setFriends(friends.filter(f => f.id != id));

    const updateFriend = friend => {
        setFriends(friends.map(f => f.id == friend.id ? { ...friend, isEditable: undefined } : f));
    }

    const setEditable = id => setFriends(friends.map(f => f.id == id ? { ...f, isEditable: true } : f));

    const unSetEditable = id => setFriends(friends.map(f => f.id == id ? { ...f, isEditable: undefined } : f));

    return (
        <div className='container-fluid p-4'>
            <div className='col-sm-10 border border-secondary p-4 mx-auto'>
                <h3>Friends List</h3>

                <FriendsListHeader />

                <FriendListFormItem save={addFriend} />

                {friends.length === 0 ?
                    <p className='alert alert-info fw-bold'>
                        No Friends To display
                    </p> :
                    friends.map(f => (
                        f.isEditable ?
                            <FriendListFormItem
                                key={f.id}
                                friend={f}
                                save={updateFriend}
                                cancel={unSetEditable} /> :
                            <FriendsListItem
                                key={f.id}
                                friend={f}
                                deleteFriend={deleteFriend}
                                setEditable={setEditable} />
                    ))
                }
            </div>
        </div>
    );
}

export default FriendsList;