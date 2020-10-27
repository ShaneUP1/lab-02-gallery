import React, { Component } from 'react'
import ImageItem from './ImageItem.js'
import images from './data.js'

export default class ImageList extends Component {
    state = {
        filter: ''
    }

    handleChange = e => {
        this.setState({
            filter: e.target.value
        });
    }

    render() {
        const filteredAnimals = this.props.images.filter((animal) => {
            if (!this.state.filter) return true;
            if (animal.keyword === this.state.filter) return true;
            return false;
        });
        return (
            <>
                <span className='filter-text'>Filter animals by keyword: </span>
                <select onChange={this.handleChange}>
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
                <div className="image-list">
                    {
                        filteredAnimals.map(animal =>
                            <ImageItem
                                url={animal.url}
                                title={animal.title}
                                description={animal.description}
                                keyword={animal.keyword}
                                horns={animal.horns} />)
                    }

                </div>
            </>
        )
    }
}
