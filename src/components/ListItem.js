import React from 'react';
import {
    Text,
} from 'react-native';
import { Card } from './Card';

const ListItem = (props) => {
    const { date, startingPoint, endPoint, seats, } = props.travel.item;
    return (
        <Card
            color={props.color}
        >
            <Text>{startingPoint} -> {endPoint}</Text>
            <Text>{date}</Text>
            <Text>num max asientos: {seats}</Text>
        </Card>
    );
};

export { ListItem };
