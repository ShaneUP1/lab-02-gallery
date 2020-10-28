import React, { Component } from 'react'
import ImageItem from './ImageItem.js'


export default class ImageList extends Component {


    render() {
        const keyAnimals = this.props.images.filter((animal) => {
            if (!this.props.keyFilter) return true;
            if (animal.keyword === this.props.keyFilter) return true;
            return false;
        });
        const FilteredAnimals = keyAnimals.filter((animal) => {
            if (!this.props.hornFilter) return true;
            if (+animal.horns === +this.props.hornFilter) return true;
            return false;
        });
        console.log(FilteredAnimals);
        return (
            <>

                <div className="image-list">
                    {
                        FilteredAnimals.map(animal =>
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
