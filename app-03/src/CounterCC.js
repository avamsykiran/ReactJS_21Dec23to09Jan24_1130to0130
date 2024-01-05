import { Component } from 'react';

class CounterCC extends Component {
    constructor() {
        super();
        this.state = {
            units: 0,
            packs: 0
        };
    }

    componentDidMount() {
        this.setState({ units: 1 });
    }

    componentDidUpdate(){
        let { units, packs } = this.state;

        if(units===10){
            this.setState({units:0,packs:packs+1});
        } else if (units===-1 && packs===0){
            this.setState({units:0});
        } else if (units===-1 && packs>0){
            this.setState({units:9,packs:packs-1});
        }
    }

    render() {
        let { units, packs } = this.state;

        return (
            <div>
                <p>
                    <button type='button' className='btn btn-sm btn-danger me-1'
                        onClick={event => this.setState({ units: units - 1 })} >REMOVE</button>
                    <strong>{packs}</strong> Packs and <strong>{units}</strong> pieces.
                    <button type='button' className='btn btn-sm btn-primary ms-1'
                        onClick={event => this.setState({ units: units + 1 })}>ADD</button>
                </p>
            </div>
        );
    }
}

export default CounterCC;