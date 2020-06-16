import React from 'react';
import WithFetch from './components/withFerch';

const NewChengpin = WithFetch('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')(props => {
    return (
        <div>
            <p> {props.data.chengpinDetails[0].title} </p>
        </div>
    )
})


export default NewChengpin;
