import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import BottomBanner from './BottomBanner';
import Slider from '@react-native-community/slider';

export default function ({ navigation }) {
    const data = [
        {
            "id": 1,
            "img": require('../assets/images/friends.jpg'),
            "songName": "Full Meditation Healing",
            "views": "3.5M views",
            "play": require('../assets/images/play.png'),
            "playNxt": require('../assets/images/playNxt.png'),
            "volume": require('../assets/images/volume.png'),
        },
        {
            "id": 2,
            "img": require('../assets/images/Pdata.jpg'),
            "songName": "DNA Repair",
            "views": "25.3M views",
            "play": require('../assets/images/play.png'),
            "playNxt": require('../assets/images/playNxt.png'),
            "volume": require('../assets/images/volume.png'),
        },
        {
            "id": 3,
            "img": require('../assets/images/walk.jpg'),
            "songName": "Deep Sleeping Healing Hypnosis",
            "views": "28M views",
            "play": require('../assets/images/play.png'),
            "playNxt": require('../assets/images/playNxt.png'),
            "volume": require('../assets/images/volume.png'),
        },
        {
            "id": 4,
            "img": require('../assets/images/doctor.jpg'),
            "songName": "Clear My Mind Zen",
            "views": "63M views",
            "play": require('../assets/images/play.png'),
            "playNxt": require('../assets/images/playNxt.png'),
            "volume": require('../assets/images/volume.png'),
        },
    ]

    const handleButtonPress = () => {
        console.log("Button pressed");
    };

    return (
        <>
            <View style={styles.DiscoverMain}>
                <SafeAreaView>
                    <ScrollView>

                        <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                            <View style={styles.ParentTxtItm}>
                                <Image
                                    source={require('../assets/images/showleft.png')}
                                    style={styles.gobackimg} />
                                <Text style={styles.parentTxt}>Meditation</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.headerimgcnt}>
                            <Image
                                source={require('../assets/images/walk.jpg')}
                                style={styles.headerimg} />
                            <View style={styles.AllItmplay}>

                                <TouchableOpacity>
                                    <Image
                                        source={require('../assets/images/play.png')}
                                        style={styles.AllPlay} />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Image
                                        source={require('../assets/images/playNxt.png')}
                                        style={styles.AllPlay} />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Image
                                        source={require('../assets/images/volume.png')}
                                        style={styles.AllPlay} />
                                </TouchableOpacity>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={100}
                                    minimumTrackTintColor="rgb(8,212,198)"
                                    maximumTrackTintColor="rgb(8,212,198)"
                                    thumbTintColor='rgb(8,212,198)'
                                    value={50}
                                    step={1}
                                    touchSlop={1} />

                            </View>
                        </View>
                        {data.map((i) => {
                            return (
                                <View style={styles.songLstMn} key={i.id}>
                                    <Image
                                        source={i.img}
                                        style={styles.songLstImg} />
                                    <View style={styles.songLstDetails}>
                                        <Text>{i.songName}</Text>
                                        <Text style={styles.songViews}>{i.views}</Text>
                                        <View style={styles.Itmplay}>

                                            <TouchableOpacity>
                                                <Image
                                                    source={i.play}
                                                    style={styles.ItmPlay} />
                                            </TouchableOpacity>

                                            <TouchableOpacity>
                                                <Image
                                                    source={i.playNxt}
                                                    style={styles.ItmPlay} />
                                            </TouchableOpacity>

                                            <TouchableOpacity>
                                                <Image
                                                    source={i.volume}
                                                    style={styles.ItmPlay} />
                                            </TouchableOpacity>

                                            <Slider
                                                style={styles.sliderItm}
                                                minimumValue={0}
                                                maximumValue={100}
                                                minimumTrackTintColor="rgb(8,212,198)"
                                                maximumTrackTintColor="rgb(8,212,198)"
                                                thumbTintColor='rgb(8,212,198)'
                                                value={50} />
                                        </View>
                                    </View>
                                </View>
                            );
                        })}


                        <View style={styles.buttonMain}>
                            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                                <Text style={styles.buttonText}>Download Meditation app</Text>
                            </TouchableOpacity>
                        </View>

                        <View><Text style={{ marginVertical: 30 }}>&nbsp;</Text></View>
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
    DiscoverMain: {
        width: '100%',
        flex: 1,
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
    headerimgcnt: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 30
    },
    headerimg: {
        width: '100%',
        height: 250,
        borderRadius: 30
    },
    AllItmplay: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        marginVertical: 15,
        alignItems: 'center',
        width: '100%'
    },
    AllPlay: {
        width: 28,
        height: 28
    },
    slider: {
        width: '70%',
        height: 1,
        paddingVertical: 8
    },
    Itmplay: {
        display: 'flex',
        flexDirection: 'row',
        gap: 3,
        marginVertical: 5,
        alignItems: 'center',
        width: '100%',
        paddingVertical: 5,
        paddingRight: 5
    },
    sliderItm: {
        width: '70%',
        height: 1,
        paddingVertical: 8
    },
    ItmPlay: {
        width: 22,
        height: 22
    },
    songLstMn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 7,
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginVertical: 20
    },
    songLstImg: {
        height: 100,
        borderRadius: 30,
        width: '30%',
    },
    songLstDetails: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 3,
        width: '70%'
    },
    songViews: { color: 'gray', fontSize: 11 },
    buttonMain: {
        width: 'auto',
        marginTop: 10,
        alignSelf: 'center'
    },
    button: {
        paddingHorizontal: 15,
        backgroundColor: "rgb(8,212,198)",
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 5,
    },
    buttonText: {
        color: "black",
        fontWeight: '500',
        textAlign: "center",
    },
})