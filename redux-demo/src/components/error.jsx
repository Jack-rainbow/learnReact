import React from 'react';


class Error extends React.Component {

    render() {
        return (
            <div>
                {
                    null.map((v, index)=>{
                        return <li key={index} >{v}</li>
                    })
                }
            </div>
        );
       
    }
}

export default Error;