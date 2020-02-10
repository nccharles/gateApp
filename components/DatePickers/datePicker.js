import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import DatePicker from 'react-native-datepicker';
import PropTypes from 'prop-types';



const Datepicker = (props) => {
    const { title, onDateChange, date } = props
    return (

        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <DatePicker
                style={styles.date}
                locale={"en"}
                date={date}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                placeHolderTextStyle={{ color: "#d2d2d2" }}
                onDateChange={onDateChange}
                disabled={false} />
        </View>
    );
};
Datepicker.propTypes = {
    onDateChange: PropTypes.func,
    onDateChange: PropTypes.func,
    title: PropTypes.string.isRequired,
}
export default Datepicker;
const styles = StyleSheet.create({
    container: {
        paddingTop: 8,
    },
    title: {
        fontSize: 13,
        color: "#707070",
        fontFamily: 'font-regular'
    },
    date: {
        margin: 5,
        width: 260,
        height: 35,
        // padding: 10,
        borderColor: "#d4d4d4",
        fontFamily: 'font-regular',
        color: "#707070"

    }

});