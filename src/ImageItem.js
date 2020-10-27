import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div className="animal-section">
                <div className="section-image">
                    <img src={this.props.url} alt="" />
                </div>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <span className="fineprint">
                    <p>Keyword: {this.props.keyword}</p>
                    <p>Number of horns: {this.props.horns}</p>
                </span>
            </div>
        )
    }
}
