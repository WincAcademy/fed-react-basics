import React from "react";

export class CustomButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };

        // bind ensures "this" inside handleClick refers
        // to this instance of the component
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                You clicked {this.state.count} times
            </button>
        );
    }
}
