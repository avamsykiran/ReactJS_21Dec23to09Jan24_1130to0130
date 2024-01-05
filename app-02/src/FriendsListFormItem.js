import { Component } from 'react';

const groups = ["FAMILY","WORK","OTHERS"];

class FriendListFormItem extends Component {
    constructor(props) {
        super(props);
        this.state = props.friend?{...props.friend} : this.initData();
    }

    initData = () => ({
        id:null,
        fullName:'',
        mobile:'',
        mail:'',
        group:''
    });

    formSubmitted = event => {
        event.preventDefault();
        this.props.save({...this.state});
        this.setState(this.initData());
    };

    cancelBtnClicked = event => { 
        this.state.isEditable ? 
            this.props.cancel(this.state.id) : 
            this.setState(this.initData());
    }

    render() {

        let {id,fullName,mobile,mail,group} = this.state;

        return (
            <form className="row border-bottom border-primary p-2" onSubmit={this.formSubmitted} >
                <div className="col-1 text-end">{id} </div>
                <div className="col">
                    <input type="text" className='form-control' value={fullName}
                    onChange={ event => this.setState({fullName:event.target.value}) }/>
                </div>
                <div className="col-2">
                    <input type="text" className='form-control' value={mobile} 
                    onChange={ event => this.setState({mobile:event.target.value}) }/>
                </div>
                <div className="col-3">
                    <input type="text" className='form-control' value={mail}
                    onChange={ event => this.setState({mail:event.target.value}) }/>
                </div>
                <div className="col-2">
                    <select className='form-control' value={group} 
                    onChange={ event => this.setState({group:event.target.value}) }>
                        <option value="">--SELECT--</option>
                        { groups.map( g => <option value={g}>{g}</option>) }
                    </select>
                </div>
                <div className="col-2 text-center">
                    <button className="btn btn-sm btn-secondary me-1" type="submit">SAVE</button>
                    <button className="btn btn-sm btn-danger" type="button" onClick={ this.cancelBtnClicked } >
                        CANCEL
                    </button>
                </div>
            </form>
        );
    }
}

export default FriendListFormItem;