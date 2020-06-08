import React,{ Component} from 'react';
import axios from 'axios';
import {
    Button,
    Pagination
} from 'antd';


class Demo extends Component {
    constructor(props) {
        super(props)
        this.state=  {
            List: []
        }
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage() {
        console.log(this.refs.myRef, 'btn');
    }
    componentDidMount() {
        axios.get('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php').then((res)=>{
            this.setState({
                List: res.data.banner
            })
        })
    }
    
    render() {
        let listItems = this.state.List.map((v, i) => {
          return  <div key={i}>{v.title}</div>
        })
        return (
            <React.Fragment>
                {
                    listItems
                }
                <Pagination defaultCurrent={2} total={50} onChange={this.onChangePage} />
            </React.Fragment>
        )
    }
   
} 
export default Demo;