import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    createAddFriendAction,
    createUpdateFriendAction,
    createUnMarkFriendEditableAction
} from '../state/friendsActions';

const groups = ["FAMILY", "WORK", "OTHERS"];

const FriendListFormItem = ({ friend }) => {

    let [id, setId] = useState(friend ? friend.id : 0);
    let [fullName, setFullName] = useState(friend ? friend.fullName : '');
    let [mobile, setMobile] = useState(friend ? friend.mobile : '');
    let [mail, setMail] = useState(friend ? friend.mail : '');
    let [group, setGroup] = useState(friend ? friend.group : '');
    let isEditable = friend ? friend.isEditable : false;
    let [errs, setErrs] = useState(null);

    const initData = () => {
        setId(0);
        setFullName('');
        setMobile('');
        setMail('');
        setGroup('');
        setErrs(null);
    };

    const dispatch = useDispatch();

    const formSubmitted = event => {
        event.preventDefault();

        let errsList = [];

        if (!fullName || fullName.trim().length < 3) {
            errsList.push("Full Name can not be blank and must be atleast three chars in length")
        }

        if (!mobile || !mobile.match(/[1-9][0-9]{9}/)) {
            errsList.push("Mobile Number can not be blank and must be exactly 10 digit not starting with zero")
        }

        if (errsList.length > 0) {
            setErrs(errsList);
        } else {
            let friend = { id, fullName, mobile, mail, group };
            let action = isEditable ? createUpdateFriendAction(friend) : createAddFriendAction(friend);
            dispatch(action);
            initData();
        }
    };

    const cancelBtnClicked = event => isEditable ? dispatch(createUnMarkFriendEditableAction(id)) : initData();

    return (
        <Fragment>
            {errs &&
                <div className="row p-2">
                    <ul className='col'>
                        { errs.map( e => <li>{e} </li>)}
                    </ul>
                </div>
            }
            <form className="row border-bottom border-primary p-2" onSubmit={formSubmitted} >
                <div className="col-1 text-end">{id} </div>
                <div className="col">
                    <input type="text" className='form-control' value={fullName}
                        onChange={event => setFullName(event.target.value)} />
                </div>
                <div className="col-2">
                    <input type="text" className='form-control' value={mobile}
                        onChange={event => setMobile(event.target.value)} />
                </div>
                <div className="col-3">
                    <input type="text" className='form-control' value={mail}
                        onChange={event => setMail(event.target.value)} />
                </div>
                <div className="col-2">
                    <select className='form-control' value={group}
                        onChange={event => setGroup(event.target.value)}>
                        <option value="">--SELECT--</option>
                        {groups.map(g => <option value={g}>{g}</option>)}
                    </select>
                </div>
                <div className="col-2 text-center">
                    <button className="btn btn-sm btn-secondary me-1" type="submit">SAVE</button>
                    <button className="btn btn-sm btn-danger" type="button" onClick={cancelBtnClicked} >
                        CANCEL
                    </button>
                </div>
            </form>
        </Fragment>
    );
}

export default FriendListFormItem;