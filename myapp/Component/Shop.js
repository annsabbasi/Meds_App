import React from 'react';
import { Image, SafeAreaView, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import BottomBanner from './BottomBanner';

const Shop = ({ navigation }) => {
    const data = [
        {
            "id": 1,
            "img": require('../assets/images/bpmeter.jpg'),
            "desc1": '$20',
            "desc2": "BlueLight Glasses",
            "desc3": "Eye Health",
        },
        {
            "id": 2,
            "img": require('../assets/images/doctor.jpg'),
            "desc1": '$50/mo',
            "desc2": "omega 3 + DHA",
            "desc3": "Heart and Brain",
        },
        {
            "id": 3,
            "img": require('../assets/images/friends.jpg'),
            "desc1": '13/mo',
            "desc2": "sea moss",
            "desc3": "92 minerals",
        },
        {
            "id": 4,
            "img": require('../assets/images/walk.jpg'),
            "desc1": '100/mo',
            "desc2": "activated charcol",
            "desc3": "Cleanse",
        },
        {
            "id": 5,
            "img": require('../assets/images/Pdata.jpg'),
            "desc1": '50/mo',
            "desc2": "shea butter",
            "desc3": "Skin Health",
        },
        {
            "id": 6,
            "img": require('../assets/images/doctor.jpg'),
            "desc1": '100/mo',
            "desc2": "silk sheet",
            "desc3": "Skin Care",
        },
        {
            "id": 7,
            "img": require('../assets/images/bpmeter.jpg'),
            "desc1": '$20',
            "desc2": "BlueLight Glasses",
            "desc3": "Eye Health",
        },
        {
            "id": 8,
            "img": require('../assets/images/friends.jpg'),
            "desc1": '$50/mo',
            "desc2": "omega 3 + DHA",
            "desc3": "Heart and Brain",
        },
    ]

    const handleButtonPress = () => {
        console.log("Button pressed");
    };

    return (
        <>
            <SafeAreaView style={styles.shopHeader}>
                <TouchableOpacity style={styles.cart} onPress={() => navigation.navigate('Checkout')}>
                    <Image
                        source={require('../assets/images/cart.png')}
                        style={styles.cartImg} />
                </TouchableOpacity>
                <ScrollView>
                    <View style={styles.ShopMain}>

                        <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                            <View style={styles.ParentTxtItm}>
                                <Image
                                    source={require('../assets/images/showleft.png')}
                                    style={styles.gobackimg} />
                                <Text style={styles.parentTxt}>Shop</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.GrdCnt}>
                            {data.map((value) => (
                                <View style={styles.items} key={value.id}>
                                    <Image
                                        source={value.img}
                                        style={styles.img} />
                                    <Text style={styles.itmTxt1}>{value.desc1}</Text>
                                    <Text style={styles.itmTxt2}>{value.desc2}</Text>
                                    <Text style={styles.itmTxt3}>{value.desc3}</Text>
                                    <View style={styles.buttonMain}>
                                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Checkout')}>
                                            <Text style={styles.buttonText}>Buy</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>

            <View>
                <BottomBanner />
            </View>
        </>
    );
}

export default Shop;

const styles = StyleSheet.create({
    shopHeader: { marginTop: 20, zIndex: 0, flex: 1, },
    ShopMain: {
        flex: 1,
        width: '100%',
        marginTop: 10,
        zIndex: 0,
    },
    parentTxt: {
        fontSize: 25,
        fontWeight: '900'
    },
    parentTxtSc: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    img: {
        width: '80%',
        height: 100,
        borderRadius: 30,
        marginBottom: 10,
        zIndex: 0
    },
    buttonMain: {
        width: 100,
    },
    items: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70,
        zIndex: 0,
    },
    GrdCnt: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
        paddingTop: 20,
        zIndex: 0,
    },
    button: {
        backgroundColor: "rgb(8,212,198)",
        paddingVertical: 10,
        borderRadius: 30,
        marginTop: 5,
    },
    buttonText: {
        fontWeight: '500',
        textAlign: "center",
    },
    ParentTxtItm: {
        display: 'flex',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 10,
        marginLeft: 15,
        alignItems: 'start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        gap: 15,
        alignSelf: 'flex-start',
        alignItems: 'center',
    },
    parentTxt: {
        fontSize: 25,
        fontWeight: '900'
    },
    gobackimg: {
        width: 20,
        height: 20
    },
    cart: {
        position: 'absolute',
        top: 30,
        right: 20,
        zIndex: 3,
    },
    cartImg: {
        width: 25,
        height: 25,
        zIndex: 3,
    },
    itmTxt1: {
        color: 'gray',
        fontWeight: '400',
        paddingBottom: 5
    },
    itmTxt2: {
        color: 'gray',
        fontWeight: '400',
        paddingBottom: 10
    },
    itmTxt3: {
        color: 'gray',
        fontWeight: '400',
        marginTop: 8,
        paddingBottom: 5
    },
})