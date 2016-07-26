/**
 * Created by 1004w455 on 2016. 7. 26..
 */
import React, {Component} from 'react';

import List from './List';

class InputText extends Component {
    constructor() {
        super();
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.state = {
            children: [],
            count: 0
        };
    }

    handleKeyUp(e) {
        const str = e.target.value;
        if (e.key === 'Enter' && str !== '') {
            console.log(`${str} 입력하였습니다.`);
            this.state.children.push(<List name={str} key={this.state.count}/>);
            this.setState({
                children: this.state.children,
                count: this.state.count += 1
            });
            e.target.value = '';
        }
    }

    render() {
        return (
            <div>
                <input type="text" onKeyUp={this.handleKeyUp}/>
                <div>
                    {this.state.children}
                </div>
            </div>
        )
    }
}

export default InputText;
