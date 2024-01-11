import axios from 'axios';

const apiUrl = "http://localhost:9999/friends";

//action types

export const WAIT = "wait for rest api call";
export const ERROR = "Got error ";
export const REFRESH_FRIENDS = "refresh friends data";
export const MARK_EDIT_FRIEND = "set editable";
export const UNMARK_EDIT_FRIEND = "unset editable";

//action creators

export const createWaitAction = infoMsg => ({ type: WAIT, infoMsg });
export const createErrorAction = errMsg => ({ type: ERROR, errMsg });
export const createRefreshAction = friends => ({ type: REFRESH_FRIENDS, friends });
export const createMarkFriendEditableAction = id => ({ type: MARK_EDIT_FRIEND, id });
export const createUnMarkFriendEditableAction = id => ({ type: UNMARK_EDIT_FRIEND, id });

//thunkAction creators

export const createGetAllFriendsAction = friend => (dispatch => {
    dispatch(createWaitAction("Please wait while loading data..!"));
    axios.get(apiUrl)
        .then(resp => dispatch(createRefreshAction(resp.data)))
        .catch(resp => {
            console.log(resp);
            dispatch(createErrorAction("Unable to retrive! Please try again!"))
        })
});

export const createAddFriendAction = friend => (dispatch => {
    dispatch(createWaitAction("Please wait while adding data..!"));
    axios.post(apiUrl, friend)
        .then(resp => createGetAllFriendsAction()(dispatch) )
        .catch(resp => {
            console.log(resp);
            dispatch(createErrorAction("Unable to add! Please try again!"))
        })
});

export const createUpdateFriendAction = friend => (dispatch => {
    dispatch(createWaitAction("Please wait while updating data..!"));
    axios.put(apiUrl + "/" + friend.id, friend)
    .then(resp => createGetAllFriendsAction()(dispatch) )
    .catch(resp => {
        console.log(resp);
        dispatch(createErrorAction("Unable to update! Please try again!"))
    })
});

export const createDeleteFriendAction = id => (dispatch => {
    dispatch(createWaitAction("Please wait while deleting data..!"));
    axios.delete(apiUrl + "/" + id)
    .then(resp => createGetAllFriendsAction()(dispatch) )
    .catch(resp => {
        console.log(resp);
        dispatch(createErrorAction("Unable to delete! Please try again!"))
    })
});
