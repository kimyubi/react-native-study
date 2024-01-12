import React from 'react';
import { Typography } from '../components/Typography';

export class HeaderTitle extends React.Component{
    render(){
        return (
            <Typography fontSize={18}>{this.props.title}</Typography>
        )
    }
}