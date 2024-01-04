import { Component } from 'react';
import FriendsListHeader from './FriendsListHeader';
import FriendsListItem from './FriendsListItem';
import FriendListFormItem from './FriendsListFormItem';

class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            friends: [
                { id: 101, fullName: "Vamsy Kiran", mobile: "9052224753", mail: "a.vamc.it@gmail.com" },
                { id: 102, fullName: "Sagar Guru Charan", mobile: "9052224703", mail: "sagar@gmail.com" },
                { id: 103, fullName: "Suseela", mobile: "9052024753", mail: "suseelarani@gmail.com" },
                { id: 104, fullName: "Sarada Gowri", mobile: "9051224753", mail: "sarada@gmail.com" },
                { id: 105, fullName: "Indhikaa Valli", mobile: "9052824753", mail: "indu@gmail.com" }
            ],
            nextId: 106
        };
    }

    addFriend = friend => {
        this.setState({
            friends: [...this.state.friends, { ...friend, id: this.state.nextId }],
            nextId: this.state.nextId + 1
        });
    }

    deleteFriend = id => {
        this.setState({ friends: this.state.friends.filter(f => f.id != id) });
    }

    updateFriend = friend => {
        this.setState({
            friends: this.state.friends.map(f => f.id == friend.id ? {...friend,isEditable:undefined} : f)
        });
    }

    setEditable = id => {
        this.setState({
            friends: this.state.friends.map(f => f.id == id ? {...f,isEditable:true} : f)
        });
    }

    unSetEditable = id => {
        this.setState({
            friends: this.state.friends.map(f => f.id == id ? {...f,isEditable:undefined} : f)
        });
    }

    render() {

        let { friends } = this.state;

        return (
            <div className='container-fluid p-4'>
                <div className='col-sm-10 border border-secondary p-4 mx-auto'>
                    <h3>Friends List</h3>

                    <FriendsListHeader />

                    <FriendListFormItem save={this.addFriend} />

                    {friends.length === 0 ?
                        <p className='alert alert-info fw-bold'>
                            No Friends To display
                        </p> :
                        friends.map(f => (
                            f.isEditable ?
                            <FriendListFormItem 
                                key={f.id} 
                                friend={f}
                                save={this.updateFriend}
                                cancel={this.unSetEditable} /> :
                            <FriendsListItem 
                                key={f.id} 
                                friend={f} 
                                deleteFriend={this.deleteFriend} 
                                setEditable={this.setEditable} />
                        )) 
                    }
                </div>
            </div>
        );
    }
}

export default FriendsList;