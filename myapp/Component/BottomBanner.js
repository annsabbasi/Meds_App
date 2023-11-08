import React from 'react';
import { StyleSheet, SafeAreaView, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const icons = [
    {icon : require('../assets/images/homeIcn.png'), screen: 'Product'},
    {icon : require('../assets/images/yogaIcn.png'), screen: 'Meditation' },
    {icon : require('../assets/images/likeIcn.png'), screen: 'Discover'},
    {icon : require('../assets/images/calendarIcn.png'), screen: 'Schedule'},
    {icon : require('../assets/images/userIcn.png'), screen: 'HealthData'},
];



const BottomBanner = () => {
    const navigation = useNavigation();
    const handleNavigate = (list) =>{
        navigation.navigate(list)
    }

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.mainCnt}>
                {icons.map((icon, index) => (
                    <TouchableOpacity key={index} style={[styles.iconContainer, index === 2 ? styles.white : '']} onPress={() => handleNavigate(icon.screen)}>
                        <Image source={icon.icon} style={styles.icon} />
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'rgb(8, 212, 198)',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        right: '0%'
    },
    mainCnt: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 5
    },
    iconContainer: {
        padding: 10,
    },
    white: {
        padding: 13,
        borderRadius: 50,
        backgroundColor: 'white',
    },
    icon: {
        width: 23,
        height: 22,
    },
});

export default BottomBanner;