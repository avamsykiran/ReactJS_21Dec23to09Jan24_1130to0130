import { useSelector } from 'react-redux';
import FriendsListHeader from './FriendsListHeader';
import FriendsListItem from './FriendsListItem';
import FriendListFormItem from './FriendsListFormItem';

const FriendsList = () => {

    let friends = useSelector(state => state.friends);

    return (
        <div className='container-fluid p-4'>
            <div className='col-sm-10 border border-secondary p-4 mx-auto'>
                <h3>Friends List</h3>

                <FriendsListHeader />

                <FriendListFormItem />

                {friends.length === 0 ?
                    <p className='alert alert-info fw-bold'>
                        No Friends To display
                    </p> :
                    friends.map(f => (
                        f.isEditable ? 
                            <FriendListFormItem key={f.id} friend={f} /> : <FriendsListItem key={f.id} friend={f} />
                    ))
                }
            </div>
        </div>
    );
}

export default FriendsList;