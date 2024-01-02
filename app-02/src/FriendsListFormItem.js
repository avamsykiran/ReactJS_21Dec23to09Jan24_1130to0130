import { Component } from 'react';

class FriendListFormItem extends Component {
    constructor(props) {
        super(props);
        this.state = this.initData();
    }

    initData = () => ({
        id:null,
        fullName:'',
        mobile:'',
        mail:''
    });

    formSubmitted = event => {
        event.preventDefault();
        this.props.save({...this.state});
        this.setState(this.initData());
    };

    cancelBtnClicked = event => this.setState(this.initData())

    render() {

        let {id,fullName,mobile,mail} = this.state;

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