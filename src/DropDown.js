import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        return (
            <div>
                <span className='filter-text'>Filter animals by keyword or number of horns: </span>
                <select onChange={this.props.handleChange1}>
                    <option value=''>Show All</option>
                    <option value='rhino'>Rhino</option>
                    <option value='narwhal'>Narwhal</option>
                    <option value='unicorn'>Unicorn</option>
                    <option value='unilego'>Unilego</option>
                    <option value='triceratops'>Triceratops</option>
                    <option value='markhor'>Markhor</option>
                    <option value='mouflon'>Mouflon</option>
                    <option value='addax'>Addax</option>
                    <option value='chameleon'>Chameleon</option>
                    <option value='lizard'>Lizard</option>
                    <option value='dragon'>Dragon</option>
                </select>
                <select onChange={this.props.handleChange2} >
                    <option value=''>Show All</option>
                    <option value='1'>Just One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                    <option value='100'>Too Many</option>
                </select>

            </div>
        )
    }
}
