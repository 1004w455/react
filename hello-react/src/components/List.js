/**
 * Created by 1004w455 on 2016. 7. 23..
 */
import React, {Component} from 'react';

class List extends Component {
    constructor() {
        super();
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        this.props.remove(this.props.idx);
    }

    render() {
        return (
            <div>
                {this.props.name}&nbsp;&nbsp;
                <button type="button" onClick={this.handleOnClick}>X</button>
            </div>
        )
    }
}

export default List;