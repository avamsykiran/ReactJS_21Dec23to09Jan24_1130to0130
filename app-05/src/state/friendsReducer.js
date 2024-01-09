
import {ADD_FRIEND,DEL_FRIEND,UPD_FRIEND,MARK_EDIT_FRIEND,UNMARK_EDIT_FRIEND} from './friendsActions';

const initState = () => ({
    friends:[
        { id: 101, fullName: "Vamsy Kiran", mobile: "9052224753", mail: "a.vamc.it@gmail.com", group: "FAMILY" },
        { id: 102, fullName: "Sagar Guru Charan", mobile: "9052224703", mail: "sagar@gmail.com", group: "WORK" },
        { id: 103, fullName: "Suseela", mobile: "9052024753", mail: "suseelarani@gmail.com", group: "FAMILY" },
        { id: 104, fullName: "Sarada Gowri", mobile: "9051224753", mail: "sarada@gmail.com", group: "WORK" },
        { id: 105, fullName: "Indhikaa Valli", mobile: "9052824753", mail: "indu@gmail.com", group: "FAMILY" }
    ],
    nextId:106
});

const friendsReducer = (oldState=initState(),action) => {

    let {friends,nextId} = oldState;

    switch(action.type){
        case ADD_FRIEND: 
            friends = [...friends,{...action.friend,id:nextId}];
            nextId = nextId+1;
            break;
        case UPD_FRIEND: 
            friends = friends.map( f => f.id==action.friend.id?{...action.friend,isEditable:undefined}:f ) ;
            break;
        case DEL_FRIEND: 
            friends = friends.filter(f => f.id!=action.id);
            break;
        case MARK_EDIT_FRIEND: 
            friends = friends.map( f => f.id==action.id?{...f,isEditable:true}:f ) ;
            break;
        case UNMARK_EDIT_FRIEND: 
            friends = friends.map( f => f.id==action.id?{...f,isEditable:undefined}:f ) ;
            break;
    }

    return {friends,nextId}; //modifiedState
};

export default friendsReducer;