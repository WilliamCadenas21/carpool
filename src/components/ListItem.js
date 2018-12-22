import React from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';
import { Card } from './Card';

const ListItem = (props) => {
    const { driver, vehicle, hour, starting, arrival } = props.travel.item;
    return (
        <Card
            color={props.color}
        >
            <Text>{driver}</Text>
            <Text>{starting} -> {arrival}</Text>
            <Text>{hour}</Text>
            <Text>{vehicle}</Text>
        </Card>
    );
};

export { ListItem };
