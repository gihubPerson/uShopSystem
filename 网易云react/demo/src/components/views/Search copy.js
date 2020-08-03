import React from 'react'

import { getHotSearch, getSearchResult } from '../../axios'
import '../../assets/css/search.css'
import Item from 'antd/lib/list/Item'
class Home extends React.Component {
    constructor() {
        super()
        this.input = React.createRef()
        this.state = {
            hotSearchList: [],
            searchResult: [],
        }
    }
    componentDidMount() {
        //获取热门搜索
        getHotSearch().then(res => {
            console.log(res);
            if (res.data.code == 200) {
                this.setState({
                    hotSearchList: res.data.result.hots
                })
            }
        })
    }
    //关键字搜索
    getResult(keywords) {
        this.input.current.value = keywords
        getSearchResult(keywords).then(res => {
            console.log(res);
            if (res.data.code == 200) {
                this.setState({
                    searchResult: res.data.result.songs
                })
            }
        })
    }
    //清除搜索内容
    clear(){
        this.setState({
            searchResult:[],
        })
        this.input.current.value = ''
    }
    //输入框有内容  出现清除按钮
    inputChange(){
        console.log(1);
    }
    render() {
        let { hotSearchList, searchResult } = this.state
        let hotTag = <div className='hotTag'>
            {
                hotSearchList.map(item => {
                    return <span key={item.first} onClick={() => this.getResult(item.first)}>{item.first}</span>
                })
            }
        </div>
        return (
            <div className="hotCont">
                <div className='ipt'>
                    <input onChange={()=>{this.inputChange()}} ref={this.input} type="text" />
                    <i onClick={()=>this.clear()}>X</i>
                </div>
                <div className='hotSearch'>
                    <div className='hotSearchTitle'>
                        热门搜索
                    </div>
                    {
                        searchResult.length == 0? hotTag : ''
                    }
                    <ul>
                        {
                            searchResult.map(item => {
                                return <li key={item.id} className='newSongs'>
                                    <div>
                                        <div className='theSong'>{item.name}
                                            {
                                                item.alias ? item.alias.map(item => {
                                                    return <span key={item}>
                                                        ({item})
                                                </span>
                                                }) : ''
                                            }
                                        </div>
                                        <div className="theSinger"><span className="sq">SQ</span>
                                            {
                                                item.artists.map((theItem, idx) => {
                                                    return <span key={theItem.id}>{theItem.name}{item.artists.length - 1 == idx ? '' : '/'}</span>
                                                })
                                            }
                                    -{item.album.name}</div>
                                    </div>
                                    <div className='play'><img src={require('../../assets/img/QXbpD5KOv8.png')} alt="" /></div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home