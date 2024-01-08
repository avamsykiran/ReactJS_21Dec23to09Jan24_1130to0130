import { useState } from 'react';

const groups = ["FAMILY", "WORK", "OTHERS"];

const FriendListFormItem = ({ friend, save, cancel }) => {

    let [id, setId] = useState(friend ? friend.id : null);
    let [fullName, setFullName] = useState(friend ? friend.fullName : '');
    let [mobile, setMobile] = useState(friend ? friend.mobile : '');
    let [mail, setMail] = useState(friend ? friend.mail : '');
    let [group, setGroup] = useState(friend ? friend.group : '');
    let isEditable = friend ? friend.isEditable : false;

    const initData = () => {
        setId(null);
        setFullName('');
        setMobile('');
        setMail('');
        setGroup('');
    };

    const formSubmitted = event => {
        event.preventDefault();
        save({ id, fullName, mobile, mail, group });
        initData();
    };

    const cancelBtnClicked = event => isEditable ? cancel(id) : initData();

    return (
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
    );
}

export default FriendListFormItem;