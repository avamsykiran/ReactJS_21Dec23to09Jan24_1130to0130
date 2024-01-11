import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { createGetAllFriendsAction } from '../state/friendsActions';
import FriendsListHeader from './FriendsListHeader';
import FriendsListItem from './FriendsListItem';
import FriendListFormItem from './FriendsListFormItem';

const FriendsList = () => {

    const dispatch = useDispatch();

    useEffect(() => dispatch(createGetAllFriendsAction()), []);

    let friends = useSelector(state => state.friends);
    let infoMsg = useSelector(state => state.infoMsg);
    let errMsg = useSelector(state => state.errMsg);

    return (
        <div className='container-fluid p-4'>
            <div className='col-sm-10 border border-secondary p-4 mx-auto'>
                <h3>Friends List</h3>

                <FriendsListHeader />

                <FriendListFormItem />

                {infoMsg &&
                    <p className='alert alert-info fw-bold'>
                        {infoMsg}
                    </p>
                }

                {errMsg &&
                    <p className='alert alert-danger fw-bold'>
                        {errMsg}
                    </p>
                }

                {friends && friends.length === 0 &&
                    <p className='alert alert-info fw-bold'>
                        No Friends To display
                    </p>
                }

                {friends && friends.length > 0 &&
                    friends.map(f => (
                        f.isEditable ?
                            <FriendListFormItem key={f.id} friend={f} /> : 
                            <FriendsListItem key={f.id} friend={f} />
                    ))
                }
            </div>
        </div>
    );
}

export default FriendsList;