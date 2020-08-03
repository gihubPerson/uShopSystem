import React from 'react'

import '../../assets/css/search.css'
import { SearchBar, Tag } from 'antd-mobile';
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }
    onChange = (value) => {
        this.setState({ value });
    };

    render() {
        let { value } = this.state
        return (
            <div className="hotCont">
                <SearchBar
                    value={value}
                    placeholder="搜索歌曲歌手专辑"
                    onChange={this.onChange}
                />
                <div className='hotSearch'>
                    <div>热门搜索</div>
                    <a href="">无滤镜</a>
                    <a href="">潘博为</a>
                </div>
            </div>
        )
    }
}

export default Home