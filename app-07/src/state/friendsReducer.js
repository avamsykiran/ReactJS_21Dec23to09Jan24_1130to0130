
import {REFRESH_FRIENDS,WAIT,ERROR,MARK_EDIT_FRIEND,UNMARK_EDIT_FRIEND} from './friendsActions';

const initState = () => ({
    friends:null,
    infoMsg:null,
    errMsg:null
});

const friendsReducer = (oldState=initState(),action) => {

    let {friends,infoMsg,errMsg} = oldState;

    switch(action.type){
        case REFRESH_FRIENDS:
            friends = action.friends;
            infoMsg = null;
            errMsg = null;
            break;
        case WAIT:
            infoMsg = action.infoMsg;
            errMsg = null;
            break;
        case ERROR:
            errMsg = action.errMsg;
            infoMsg = null;
            break;
        case MARK_EDIT_FRIEND: 
            friends = friends.map( f => f.id==action.id?{...f,isEditable:true}:f ) ;
            break;
        case UNMARK_EDIT_FRIEND: 
            friends = friends.map( f => f.id==action.id?{...f,isEditable:undefined}:f ) ;
            break;
    }

    return {friends,infoMsg,errMsg}; //modifiedState
};

export default friendsReducer;