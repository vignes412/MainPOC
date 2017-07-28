import React from 'react';
import ReactDom from 'react-dom';
import { Button, TextBox } from './component/common/FormItem';
var pubnub = new PubNub({
    subscribeKey: "sub-c-6a6b24c4-7123-11e7-a41b-02ee2ddab7fe",
    publishKey: "pub-c-5250120f-e981-4ae4-9976-d12f95557bc0",
    ssl: true,
    uuid: "Client-k6nm0"
});


pubnub.subscribe({
    channels: ['Channel-dpthr29tf'],
    withPresence: true
});

export default class App extends React.Component {

    constructor() {
        super();
        this.state = { value: '' };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        var _this = this;
        pubnub.addListener({
         
            message: function (message) {
                console.log(message)
                _this.setState({ value: message.message });
            },
             presence: function(presenceEvent) {
                console.log("presen",presenceEvent)
            }
        });
       
    }
    handleClick() {
        console.log(this.state.value);
        pubnub.publish({
            channel: 'Channel-dpthr29tf',
            message: this.state.value,
        });
    }
    handleChange(value) {
        this.setState({ value: value });

    }
    render() {
        return (<div>
            <TextBox value={this.state.value} textBoxChange={this.handleChange} />
            <Button Name="Submit" onclick={this.handleClick} />
        </div>);
    }

}

