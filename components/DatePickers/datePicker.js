import React, { Component } from "react";
import { View, DatePicker, Text } from "react-native";
import PropTypes from 'prop-types';


const Datepicker = (props) => {
    const { title, onDateChange } = props
    return (

        <View>
            <Text>{title}</Text>
            <DatePicker
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d2d2d2" }}
                onDateChange={onDateChange}
                disabled={false} />
        </View>
    );
};
Datepicker.propTypes = {
    onDateChange: PropTypes.func,
    title: PropTypes.string.isRequired,
}
export default Datepicker;
