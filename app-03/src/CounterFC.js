import { useState,useEffect } from 'react';

const CounterFC = () => {

    let [units, setUnits] = useState(0);
    let [packs, setPacks] = useState(0);

    useEffect(() => setUnits(1),[]);

    useEffect(() => {
        if(units===10){
            setUnits(0);
            setPacks(packs+1);
        } else if (units===-1 && packs===0){
            setUnits(0);
        } else if (units===-1 && packs>0){
            setUnits(9);
            setPacks(packs-1);
        }
    },[units]);

    return (

        <div>
            <p>
                <button type='button' className='btn btn-sm btn-danger me-1'
                    onClick={event => setUnits(units - 1)} >REMOVE</button>
                <strong>{packs}</strong> Packs and <strong>{units}</strong> pieces.
                <button type='button' className='btn btn-sm btn-primary ms-1'
                    onClick={event => setUnits(units + 1)}>ADD</button>
            </p>
        </div>
    );
}


export default CounterFC;