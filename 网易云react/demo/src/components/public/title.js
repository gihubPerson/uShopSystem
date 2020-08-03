import React from 'react'

import '../../assets/css/title.css'
class Title extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="title">
                {
                    this.props.titleName
                }
            </div>
        )
    }
}

export default Title