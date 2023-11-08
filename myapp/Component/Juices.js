import React from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import BottomBanner from './BottomBanner';

export default function ({ navigation }) {
    const data = [
        {
            "id": 1,
            "img": require('../assets/images/doctor.jpg'),
            "title": "Short description here.",
            "desc": "Short caption here Another caption",
        },
        {
            "id": 2,
            "img": require('../assets/images/Pdata.jpg'),
            "title": "Short description here.",
            "desc": "Short caption here Another caption",
        },
        {
            "id": 3,
            "img": require('../assets/images/friends.jpg'),
            "title": "Short description here.",
            "desc": "Short caption here Another caption",

        },
        {
            "id": 4,
            "img": require('../assets/images/walk.jpg'),
            "title": "Short description here.",
            "desc": "Short caption here Another caption",
        },
    ]


    return (
        <>
            <View style={styles.juicesheader}>
                <SafeAreaView>
                    <ScrollView>

                        <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                            <View style={styles.ParentTxtItm}>
                                <Image
                                    source={require('../assets/images/showleft.png')}
                                    style={styles.gobackimg} />
                                <Text style={styles.parentTxt}>Juices</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.RintroCont}>
                            <View>
                                <Text style={styles.CntTxt1}>Illness Name</Text>
                                <Text style={styles.CntTxt2}>(name of Illness)</Text>
                            </View>
                            <Image
                                source={require('../assets/images/Pdata.jpg')}
                                style={{ width: 150, height: 150, borderRadius: 30 }} />
                        </View>

                        <View style={styles.moduloContainer}>
                            {data.map((item, index) => {
                                return (
                                    <View style={styles.moduloItm}>
                                        <Image
                                            source={item.img}
                                            style={{ width: 140, height: 100, borderRadius: 30 }} />

                                        <View style={{ width: '50%', }}>
                                            <Text style={styles.moduloTxt1}>{item.title}</Text>
                                            <Text style={styles.moduloTxt2}>{item.desc}</Text>
                                        </View>
                                    </View>
                                )
                            })}

                        </View>

                        <View><Text style={{ marginVertical: 10 }}>&nbsp;</Text></View>

                    </ScrollView>
                </SafeAreaView>
            </View>

            <View>
                <BottomBanner />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    juicesheader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
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
        marginTop: 10,
        alignSelf: 'center'
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
    },
    moduloTxt1: {
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center'
    },
    moduloTxt2: {
        fontSize: 13,
        fontWeight: '500',
        marginVertical: 5,
        color: 'gray',
        textAlign: 'center'
    },
})