import React from 'react'
import qs from 'querystring'
class Play extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){

    }
    render(){
        // let queryStr = this.props.location.search.slice(1)
        return(
            <div>
                play
                {/* id--{this.props.match.params.id}
                title--{this.props.match.params.title} */}
                {/* id--{qs.parse(queryStr).id} */}
                {/* title--{qs.parse(queryStr).title} */}
                {this.props.location.state.id}
                {this.props.location.state.title}
            </div>
        )
    }
}


export default Play