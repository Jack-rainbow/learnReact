import React from 'react';


class ErrorBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        }
    }   
    componentDidCatch(error, info) {
        this.setState({ 
            hasError: true,
            error, 
            errorInfo: info 
        });
    }


    render() {
        if (this.state.hasError) {
            return (
                <div>
                    {
                     this.props.render(this.state.error, this.state.errorInfo)
                    }
                </div>
            );
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBody;
