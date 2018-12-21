import React from 'react';
import { Switch } from 'react-native';

const CustomSwitch = ({ onValueChange, value }) => (
    <Switch
        onValueChange={onValueChange}
        value={value}
    />
);

export { CustomSwitch };
