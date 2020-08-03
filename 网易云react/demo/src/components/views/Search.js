import React from 'react'

import { getHotSearch, getSearchResult, getSearchSuggest } from '../../axios'
import '../../assets/css/search.css'
import Item from 'antd/lib/list/Item'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            hotSearchList: [],
            searchResult: [],
            value: '',
            suggestAlbumsList: [],
            suggestartistsList: [],
            suggestSongsList: [],
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
        getSearchResult(keywords).then(res => {
            if (res.data.code == 200) {
                this.setState({
                    searchResult: res.data.result.songs,
                    value: keywords
                })

            }
        })
    }
    //清除搜索内容
    clear() {
        this.setState({
            searchResult: [],
            value: ''
        })
    }
    //输入内容  出现清除按钮
    inputChange(e) {
        // 填写value
        this.setState({
            value: e.target.value
        })
        //获取建议搜索
        getSearchSuggest(e.target.value).then(res => {
            if (res.data.code == 200) {
                this.setState({
                    suggestAlbumsList: res.data.result.albums ? res.data.result.albums : [],
                    suggestartistsList: res.data.result.artists ? res.data.result.artists : [],
                    suggestSongsList: res.data.result.songs ? res.data.result.songs : [],
                })  
            }
        })
    }
    //回车搜索
    enter() {
        if (window.event.keyCode === 13) {
            this.getResult(this.state.value)
        }
    }
    render() {
        let { value, hotSearchList, searchResult, suggestAlbumsList, suggestartistsList ,suggestSongsList} = this.state
        // 热门搜索变量
        let hotTag =
            <div>
                <div className='hotSearchTitle'>
                    热门搜索
                    </div>
                <div className='hotTag'>
                    {
                        hotSearchList.map(item => {
                            return <span key={item.first} onClick={() => this.getResult(item.first)}>{item.first}</span>
                        })
                    }
                </div>
            </div>
        // 建议搜索变量
        let suggest = <div>
            {
                <div className='suggest'>
                    <ul>
                        {
                            suggestAlbumsList.map(item => {
                                return <li onClick={()=>{this.getResult(item.name)}} key={item.id}>{item.name}</li>
                            })
                        }
                    </ul>
                    <ul>
                        {
                            suggestartistsList.map(item => {
                                return <li onClick={()=>{this.getResult(item.name)}} key={item.id}>{item.name}</li>
                            })
                        }
                    </ul>
                    <ul>
                        {
                            suggestSongsList.map(item => {
                                return <li onClick={()=>{this.getResult(item.name)}} key={item.id}>{item.name}</li>
                            })
                        }
                    </ul>
                </div>
            }
        </div>
        return (
            <div className="hotCont">
                <div className='ipt'>
                    <input onKeyDown={() => { this.enter() }} ref={this.input} onChange={(event) => { this.inputChange(event) }} value={value} type="text" />
                    {
                        value == '' ? '' : <i onClick={() => this.clear()}>X</i>
                    }
                </div>
                <div className='hotSearch'>
                    {/* 热门搜索 */}
                    {
                        searchResult.length == 0 & value == '' ? hotTag : ''
                    }
                    {/* 搜索列表 */}
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
                    {/* 建议搜索 */}

                </div>
                {
                    value == '' ? '' : suggest
                }
            </div>
        )
    }
}

export default Home