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
            pathname: "/play",
            state: {
                id,
                title
            }
        })
    }

    render() {
        let { songList } = this.props
        return (
            <div>
                <ul className="hotSongs">
                    {
                        songList.map((item, idx) => {
                            return <li onClick={() => this.aa(item.id, item.name)} key={item.id} className='newSongs'>
                                <div className="num">
                                    {(idx + 1).toString().padStart(2, '0')}
                                </div>
                                <div>
                                    <div className='theSong'>{item.name}</div>
                                    <div className="theSinger"><span className="sq">SQ</span>
                                    {
                                        item.ar.map((theItem,idx)=>{
                                        return <span key={item.id}>{theItem.name}{item.ar.map.length-1 == idx ? '' : '/'}</span>
                                        })
                                    }
                                    -{item.al.name}</div>
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

export default List