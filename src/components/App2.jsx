import React, { useState } from 'react'
import data from './data'

const App2 = () => {

    const [select, setSelect] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(id) {
        setSelect(id === select ? null : id)
        // console.log(select);


    }

    function handelMultiSelection(id) {
        let cpyMultiple = [...multiple];
        let findIndexofId = cpyMultiple.indexOf(id);
        // console.log(findIndexofId);

        findIndexofId === -1 ? cpyMultiple.push(id) : cpyMultiple.splice(findIndexofId, 1);

        // console.log(cpyMultiple);
        setMultiple(cpyMultiple);
    }
    console.log(select, multiple);


    return (
        <div className='wrapper'>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable MultiSelection</button>
            <div className="accordion">
                {
                    data && data.length > 0 ?

                        data.map(element =>
                            <div className='item'>
                                <div onClick={enableMultiSelection ? () => handelMultiSelection(element.id) : () => handleSingleSelection(element.id)} className='title'>
                                    <h3>{element.query}</h3>
                                    <span>+</span>
                                </div>


                                {
                                    enableMultiSelection ?
                                        multiple.indexOf(element.id) !== -1 && <div className='content'>{element.content}</div>
                                        : select === element.id && <div className='content'>{element.content}</div>
                                }

                                {/* 
                                {
                                    select === element.id || multiple.indexOf(element.id) !== -1 ?
                                        <div className='content'>
                                            {element.content}
                                        </div>
                                        : null
                                } */}
                            </div>

                        )

                        : <div>NO Data Found</div>
                }
            </div>
        </div>
    )
}

export default App2