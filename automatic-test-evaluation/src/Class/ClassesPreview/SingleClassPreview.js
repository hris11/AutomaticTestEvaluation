import React,{Component} from 'react';

class SingleClassPreview extends Component {
    render() {
        console.log(this.props.data);
        return (
            <li>
                name: {this.props.data.name}
            </li>
        );
    }
}

export default SingleClassPreview;