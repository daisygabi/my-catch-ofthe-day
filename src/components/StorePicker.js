import React from "react";

export default class StorePicker extends React.Component {
    storeNameInput = React.createRef();

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <div> Hi from store picker</div>
                <h1>Please enter a name for a store</h1>
                <input id="storeName" type="text" required placeholder="Store Name" ref={this.storeNameInput}/>
                <button id="storeButton" className="goto-store-button" type="submit">Go to store</button>
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