/**
 * Created by 1004w455 on 2016. 7. 23..
 */
import React, {Component} from "react";

class List extends Component {
    constructor() {
        super();
        this.handleOnClick = this.handleOnClick.bind(this);
        this.state = {
            btnText: '->'
        };
    }

    handleOnClick() {
        if (this.state.btnText === '->') {
            // TODO 이 부분 적용이 안된다.
            this.setState({
                btnText: '<-'
            });
        } else {
            // TODO 지우는 동작에서 신규 배열이 생성 되서 그러는 것 같음. 이유를 찾아보자.
            this.props.remove(this.props.idx, this.btnText);
        }
    }

    render() {
        return (
            <div>
                {this.props.name}&nbsp;&nbsp;
                <button type="button" onClick={this.handleOnClick}>{this.state.btnText}</button>
            </div>
        )
    }
}

export default List;
