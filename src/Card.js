import React, { Component } from 'react'



// export default function Card(props) {
//     return(
//         <div className='card'>
//             <h2>{props.name}</h2>
//             <h3>{props.lastName}</h3>
//             <p>{props.description}</p>
//             <img src={props.img} alt="" />
//         </div>
//     )
// }


class Card extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
      }
    render() {
        return(
            <div className='card'>
            <h2>{this.props.name}</h2>
            <h3>{this.props.lastName}</h3>
            <p>{this.props.description}</p>
            <img src={this.props.img} alt="" />
        </div>
        )

    }
}

export default Card;
