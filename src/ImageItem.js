import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div className="animal-section">
                <img src={this.props.url} />
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <h3>Keyword: {this.props.keyword}</h3>
                <h4>Number of horns: {this.props.horns}</h4>
            </div>
        )
    }
}
