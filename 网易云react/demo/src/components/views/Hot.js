import React from 'react'

import List from './hotList'

import '../../assets/css/hot.css'
class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            songList:[
                {
                    id: 11,
                    num:'01',
                    song: "致我们终将逝去的青春 (2020重唱版)",
                    singer: "张靓颖-致我们终将失去的青春"
                },
                {
                    id: 12,
                    num:'02',
                    song: "如果我是海",
                    singer: "李荣浩-麻雀"
                },
                {
                    id: 11,
                    num:'03',
                    song: "祝我快乐",
                    singer: "汪苏泷-祝我快乐"
                },
                {
                    id: 12,
                    num:'04',
                    song: "星星之火",
                    singer: "罗云熙-星星之火"
                },
                {
                    id: 11,
                    num:'05',
                    song: "晚来天欲雪",
                    singer: "恋恋故人难 / 云の泣-晚来天欲雪"
                },
                {
                    id: 12,
                    num:'06',
                    song: "先知",
                    singer: "郁可唯-我行我素我爱你"
                },
                {
                    id: 12,
                    num:'07',
                    song: "PARADISE",
                    singer: "Ravi / 河成云-PARADISE"
                },
                {
                    id: 11,
                    num:'08',
                    song: "睹物思人",
                    singer: "武艺-睹物思人"
                },
                {
                    id: 12,
                    num:'09',
                    song: "尘埃",
                    singer: "董嘉鸿-尘埃"
                },
            ]
        }
    }

    render(){
        let {songList} = this.state
        return (
            <div>
                <div className="banner">
                    <div className='hot'>
                        <div className="hotIcon">

                    </div>
                    <div className="updateTime">
                        更新日期:<span>07月30日</span>
                    </div>
                    </div>
                    
                </div>
                
                <List songList={songList} history={this.props.history}></List>

            </div>
        )
    }
}

export default Home