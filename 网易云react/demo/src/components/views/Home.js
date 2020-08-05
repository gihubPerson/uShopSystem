import React from 'react'

//swiper
import 'swiper/js/swiper.min.js'
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper'


//引入axios接口
import { getPersonAlized, getNewSong, getBanner } from '../../axios'

import '../../assets/css/home.css'
import Title from '../public/title'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            cardList: [],
            newSongs: [],
            bannerList: []
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
            if (res.data.code == 200) {
                this.setState({
                    newSongs: res.data.result
                })
            }
        })
        getBanner(2).then((res => {
            console.log(res);
            if (res.data.code == 200) {
                this.setState({
                    bannerList: res.data.banners.filter((item,idx)=>idx<5)
                }, () => {
                    var swiper = new Swiper('.swiper-container', {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        centeredSlides: true,
                        loop: true,
                        autoplay:true,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        },
                    });
                })
            }
        }))
    }

    render() {
        let { cardList, newSongs ,bannerList} = this.state
        return (
            <div>
                <Title titleName="推荐歌单"></Title>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            bannerList.map(item=>{
                                return <div className="swiper-slide" key='item.pic'>
                                    <img className="bannerImg" src={item.pic} alt=""/>
                                </div>
                            })
                        }
                        
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
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
                                            item.song.artists.map((theItem, idx) => {
                                                return <span key={theItem.id}>{theItem.name}{item.song.artists.length - 1 == idx ? '' : '/'}</span>
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