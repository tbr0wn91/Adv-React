import React, { Component } from 'react';
import axios from 'axios';
import Display from './Display';
import './Presentational.scss'
// https://picsum.photos/v2/list

class Container extends Component{
    constructor(){
        super();
        this.state = {
            photos: []
        }
    }

    componentDidMount(){
        axios.get('https://picsum.photos/v2/list').then(res => {
            this.setState({
                photos: res.data
            })
        })
    }
    render(){
        return (
            <div>
                <u><h1>Presentational</h1></u>
                <Display 
                    data={this.state.photos}
                />
            </div>
        )
    }
}

export default Container;