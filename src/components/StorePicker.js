import React from "react";

export default class StorePicker extends React.Component {
    storeNameInput = React.createRef();

    render() {
        return (
            <form className="jumbotron" onSubmit={this.goToStore}>
                <div className="my-lg-4"> Hi from store picker</div>
                <h1 className="lead">Please enter a name for a store</h1>
                <input id="storeName" className="display-4" type="text" required placeholder="Store Name" ref={this.storeNameInput}/>
                <div className="d-sm-table-row">
                    <button id="storeButton" className="btn btn-primary btn-lg" type="submit">Go to store</button>
                </div>
            </form>
        );
    }

    goToStore = (event) => {
        // stop the form from clearing
        event.preventDefault();
        // Get the value from the form
        const storeName = this.storeNameInput.current.value;
        console.log(this.props);
        // redirect to a different path with the name in url
        this.props.history.push(`/store/${storeName}`);
    };
}