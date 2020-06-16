import React from 'react';
import WithFetch from './components/withFerch';

const NewChange = WithFetch('http://iwenwiki.com/api/blueberrypai/getChengpinInfo.php')(props=>{
    return (
        <div>
            <p> {props.data.chengpinInfo[0].title} </p>            
        </div>
    )
})


export default NewChange;
