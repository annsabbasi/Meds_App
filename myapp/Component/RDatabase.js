import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import BottomBanner from './BottomBanner';

const handleButtonPress = () => {
    console.log("Button pressed");
};

export default function RDatabase({ navigation }) {

    const data = [
        {
            "id": 1,
            "title": "Foods",
            "desc1": "Caption line 1 here",
            "desc2": "Caption line 2 here",
            "img": require('../assets/images/bpmeter.jpg')
        },
        {
            "id": 2,
            "title": "Juice",
            "desc1": "Caption line 1 here",
            "desc2": "Caption line 2 here",
            "img": require('../assets/images/doctor.jpg')
        },
        {
            "id": 3,
            "title": "Tea",
            "desc1": "Caption line 1 here",
            "desc2": "Caption line 2 here",
            "img": require('../assets/images/walk.jpg')
        },
    ]

    return (
        <>
            <SafeAreaView style={styles.Rdataheader}>
                <ScrollView>
                    <View style={styles.RdMain}>

                        <TouchableOpacity style={styles.widthfull} onPress={() => navigation.navigate('Product')}>
                            <View style={styles.ParentTxtItm}>
                                <Image
                                    source={require('../assets/images/showleft.png')}
                                    style={styles.gobackimg} />
                                <Text style={styles.parentTxt}>Remedy Database</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.RintroCont}>
                            <View>
                                <Text style={styles.CntTxt1}>Illness Name</Text>
                                <Text style={styles.CntTxt2}>(name of Illness)</Text>
                            </View>
                            <Image
                                source={require('../assets/images/friends.jpg')}
                                style={styles.topimg} />
                        </View>

                        <View style={styles.moduloContainer}>
                            {data.map((item, index) => {
                                return (
                                    <View style={[styles.moduloItm, index % 2 === 0 ? styles.ree : styles.changedModulo]}>
                                        <View>
                                            <Text style={styles.moduloTxt1}>{item.title}</Text>
                                            <Text style={styles.moduloTxt2}>{item.desc1}</Text>
                                            <Text style={styles.moduloTxt3}>{item.desc2}</Text>
                                        </View>
                                        <Image
                                            source={item.img}
                                            style={styles.itmimg}
                                        />
                                    </View>
                                )
                            })}
                        </View>

                        <View style={styles.HerbsCont}>
                            <Text>Herbs</Text>
                            <View style={styles.HerbsBox}>
                                <TouchableOpacity style={styles.bton} onPress={handleButtonPress}>
                                    <Text style={styles.buttonTx}>Upgrade</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View><Text style={{ marginVertical: 30 }}>&nbsp;</Text></View>
                </ScrollView>
            </SafeAreaView>

            <View>
                <BottomBanner />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    Rdataheader: { marginTop: 20, width: '100%' },
    RdMain: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    widthfull: { width: '100%' },
    ParentTxtItm: {
        display: 'flex',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 30,
        marginLeft: 15,
        alignItems: 'start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        gap: 15,
        alignSelf: 'flex-start',
        alignItems: 'center',
        zIndex: 0,
    },
    parentTxt: {
        fontSize: 25,
        fontWeight: '900'
    },
    gobackimg: {
        width: 20,
        height: 20
    },
    topimg: {
        width: 150,
        height: 150,
        borderRadius: 30
    },
    RintroCont: {
        borderWidth: 3,
        borderColor: 'rgb(8,212,198)',
        borderRadius: 30,
        padding: 20,
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '97%',
        marginTop: 10
    },
    itmimg: {
        width: 140,
        height: 120,
        borderRadius: 30
    },
    CntTxt1: {
        color: 'gray',
        fontSize: 20,
        marginVertical: 5,
        fontWeight: '600'
    },
    CntTxt2: {
        color: 'black',
        fontSize: 20,
        marginVertical: 5,
        fontWeight: '600'
    },

    bton: {
        backgroundColor: 'black',
        paddingVertical: 10,
        borderRadius: 30,
        marginTop: 5,
        paddingHorizontal: 30
    },
    buttonTx: {
        color: "white",
        fontWeight: '600',
        textAlign: "center",
    },
    HerbsCont: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginVertical: 20
    },
    HerbsBox: {
        borderWidth: 3,
        borderColor: 'rgb(8,212,198)',
        borderRadius: 30,
        padding: 20,
        paddingHorizontal: 40
    },
    moduloContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 25,
    },
    moduloItm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginVertical: 25,
        paddingHorizontal: 20
    },
    changedModulo: {
        flexDirection: 'row-reverse',
    },
    moduloTxt1: {
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 8
    },
    moduloTxt2: {
        fontSize: 13,
        fontWeight: '500',
        marginVertical: 5,
        marginLeft: 8,
        color: 'gray'
    },
    moduloTxt3: {
        fontSize: 13,
        fontWeight: '500',
        marginVertical: 5,
        marginLeft: 8,
        color: 'gray'
    },
})