
//action types

export const ADD_FRIEND = "add friend";
export const UPD_FRIEND = "update friend";
export const DEL_FRIEND = "delete friend";
export const MARK_EDIT_FRIEND = "set editable";
export const UNMARK_EDIT_FRIEND = "unset editable";

//action creators

export const createAddFriendAction = friend => ({ type: ADD_FRIEND, friend });
export const createUpdateFriendAction = friend => ({ type: UPD_FRIEND, friend });
export const createDeleteFriendAction = id => ({ type: DEL_FRIEND, id });
export const createMarkFriendEditableAction = id => ({ type: MARK_EDIT_FRIEND, id });
export const createUnMarkFriendEditableAction = id => ({ type: UNMARK_EDIT_FRIEND, id });