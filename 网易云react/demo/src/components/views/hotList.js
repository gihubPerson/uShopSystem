import React from 'react'

import { NavLink } from 'react-router-dom'
class List extends React.Component {
    constructor() {
        super()
    }

    aa(id, title) {
        // this.props.history.push('/play/' + id + '/' + title)
        // this.props.history.push(`/play?id=${id}title=${title}`)
        this.props.history.push({
            pathname:"/play",
            state:{
                id,
                title
            }
        })
    }

    render() {
        let { songList } = this.props
        return (
            <div>
                <ul  className="hotSongs">
                    {
                        songList.map(item => {
                            return <li onClick={() => this.aa(item.id, item.title)} key={item.id} className='newSongs'>
                                <div className="num">
                                    {item.num}
                                </div>
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

export default List