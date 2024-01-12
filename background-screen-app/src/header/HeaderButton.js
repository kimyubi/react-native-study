import React from 'react';
import {Button} from '../components/Button'
import {Icon} from '../components/Icons'

export class HeaderIcon extends React.Component{
    render(){
        return (
            <Button onPress={this.props.onPress}>
                <Icon name={this.props.iconName} size={28} color='black'/>
            </Button>
        )
    }
}