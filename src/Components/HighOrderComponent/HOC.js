import React from 'react';
import axios from 'axios';

function myHOC(Component, url) {
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                data: null
            }
        }

        getData = () => {
            axios.get(url).then(res => {
                this.setState({
                    data: res.data
                })
            })
        }
        
        render(){
            return(
                <div>
                {
                    this.state.data
                    ?
                    <Component {...this.props} data={this.state.data}/>
                    :
                    this.getData()
                }
                </div>
            )
        }
    }
}

export default myHOC;