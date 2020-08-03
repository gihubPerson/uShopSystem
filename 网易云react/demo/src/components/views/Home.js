import React from 'react'

//引入axios接口
import { getPersonAlized, getNewSong } from '../../axios'

import '../../assets/css/home.css'
import Title from '../public/title'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            cardList: [],
            newSongs: []
        }
    }

    componentDidMount() {
        getPersonAlized(6).then((res) => {
            if (res.data.code == 200) {
                this.setState({
                    cardList: res.data.result
                })
            }
        })
        getNewSong().then((res) => {
            console.log(res);
            if (res.data.code == 200) {
                this.setState({
                    newSongs: res.data.result
                })
            }
        })
    }

    render() {
        let { cardList, newSongs } = this.state
        return (
            <div>
                <Title titleName="推荐歌单"></Title>
                <ul className="cardList">
                    {
                        cardList.map(item => {
                            return <li key={item.id}>
                                <img src={item.picUrl} alt="" />
                                <div className='cardTitle'>
                                    {item.name}
                                </div>
                            </li>
                        })
                    }
                </ul>
                <Title titleName="最新音乐"></Title>
                <ul>
                    {
                        newSongs.map(item => {
                            return <li key={item.song.id} className='newSongs'>
                                <div>
                                    <div className='theSong'>{item.song.name}
                                        {
                                            item.song.alias ? item.song.alias.map(item => {
                                                return <span key={item}>
                                                    ({item})
                                                </span>
                                            }) : ''
                                        }
                                    </div>
                                    <div className="theSinger"><span className="sq">SQ</span>
                                    {
                                        item.song.artists.map((theItem,idx)=>{
                                        return <span key={theItem.id}>{theItem.name}{item.song.artists.length-1 == idx ? '' : '/'}</span>
                                        })
                                    }
                                    -{item.song.album.name}</div>
                                </div>
                                <div className='play'><img src={require('../../assets/img/QXbpD5KOv8.png')} alt="" /></div>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Home