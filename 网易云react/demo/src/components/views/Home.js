import React from 'react'

import '../../assets/css/home.css'
import Title from '../public/title'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            cardList: [
                {
                    id: 1,
                    title: '这就是街舞3BGM | 这街3 高能炸场',
                    img: require('../../assets/img/1.jpg')
                },
                {
                    id: 2,
                    title: '盛夏白瓷梅子汤，碎冰碰壁铛啷响',
                    img: require('../../assets/img/2.jpg')
                },
                {
                    id: 3,
                    title: '伤感片段:夜和你都在熬我',
                    img: require('../../assets/img/3.jpg')
                },
                {
                    id: 4,
                    title: '打野BGM［游戏专用］',
                    img: require('../../assets/img/4.jpg')
                },
                {
                    id: 5,
                    title: '宝藏857蹦迪DJ',
                    img: require('../../assets/img/5.jpg')
                },
                {
                    id: 6,
                    title: '中文DJ（电摇版）（车载DJ）开车驾车必听',
                    img: require('../../assets/img/6.jpg')
                },
            ],
            newSongs: [
                {
                    id: 11,
                    song: "致我们终将逝去的青春 (2020重唱版)",
                    singer: "张靓颖-致我们终将失去的青春"
                },
                {
                    id: 12,
                    song: "如果我是海",
                    singer: "李荣浩-麻雀"
                },
                {
                    id: 11,
                    song: "祝我快乐",
                    singer: "汪苏泷-祝我快乐"
                },
                {
                    id: 12,
                    song: "星星之火",
                    singer: "罗云熙-星星之火"
                },
                {
                    id: 11,
                    song: "晚来天欲雪",
                    singer: "恋恋故人难 / 云の泣-晚来天欲雪"
                },
                {
                    id: 12,
                    song: "先知",
                    singer: "郁可唯-我行我素我爱你"
                },
                {
                    id: 12,
                    song: "PARADISE",
                    singer: "Ravi / 河成云-PARADISE"
                },
                {
                    id: 11,
                    song: "睹物思人",
                    singer: "武艺-睹物思人"
                },
                {
                    id: 12,
                    song: "尘埃",
                    singer: "董嘉鸿-尘埃"
                },

            ]
        }
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
                                <img src={item.img} alt="" />
                                <div className='cardTitle'>
                                    {item.title}
                                </div>
                            </li>
                        })
                    }
                </ul>
                <Title titleName="最新音乐"></Title>
                <ul>
                    {
                        newSongs.map(item => {
                            return <li key={item.id} className='newSongs'>
                                <div>
                                    <div className='theSong'>{item.song}</div>
                                    <div className="theSinger"><span className="sq">SQ</span>{item.singer}</div>
                                </div>
                                <div className='play'><img src={require('../../assets/img/QXbpD5KOv8.png')} alt=""/></div>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Home