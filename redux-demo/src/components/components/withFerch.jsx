import React from 'react';


// 低配版高阶组件
const withFerch = (url) => (View) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                loading: true,
                data: null
            }
        }
        componentDidMount() {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        loading: false,
                        data
                    })
                })
        }
        

        render() {
            if(this.state.loading) {
                return (
                    <div>
                        Loading.....
                    </div>
                );
            }else{
                return <View data={this.state.data}> </View>
            }
        }
    }

}

export default withFerch;
