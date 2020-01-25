import React, { Component } from 'react';
import TextBody from './TextBody';
import Caption from './Caption';


class MainPage extends Component {
    render() {
        return (
            <div>
                <Caption/>
                <TextBody/>
            </div>
        );
    }
}

export default MainPage;