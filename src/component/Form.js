import React from "react";

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input class="input-city" type="text" name="city" placeholder="City..."></input>
                <input class="input-country" type="text" name="country" placeholder="Country..."></input>
                <br></br><button class="submit-button">Get Weather</button>
            </form>
        );
    }
};

export default Form;