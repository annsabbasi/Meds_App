import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import BottomBanner from './BottomBanner';

const HealthQuiz = ({ navigation }) => {
    const [text, setText] = useState('');

    const onChangeText = (newText) => {
        setText(newText);
    };

    return (
        <>
            <SafeAreaView style={{ marginTop: 20 }}>
                <ScrollView>
                    <View style={styles.HealthMain}>

                        <TouchableOpacity style={styles.healthtxt} onPress={() => navigation.navigate('Product')}>
                            <View style={styles.ParentTxtItm}>
                                <Image
                                    source={require('../assets/images/showleft.png')}
                                    style={styles.gobackimg} />
                                <Text style={styles.parentTxt}>Health Quiz</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.LH}>
                            <Text style={{ color: 'gray', fontWeight: '500' }}>Low</Text>
                            <Text style={{ color: 'gray', fontWeight: '500' }}>
                                High
                            </Text>
                        </View>

                        <View style={styles.RangeCont}>
                            <View style={styles.RangeItem}>
                                <Text style={styles.rangeTxt}>Sleep</Text>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={100}
                                    minimumTrackTintColor="black"
                                    maximumTrackTintColor="black"
                                    thumbTintColor='black'
                                    value={50} />
                            </View>
                        </View>

                        <View style={styles.RangeCont}>
                            <View style={styles.RangeItem}>
                                <Text style={styles.rangeTxt}>Water Intake</Text>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={100}
                                    minimumTrackTintColor="black"
                                    maximumTrackTintColor="black"
                                    thumbTintColor='black'
                                    value={50}
                                />
                            </View>
                        </View>

                        <View style={styles.RangeCont}>
                            <View style={styles.RangeItem}>
                                <Text style={styles.rangeTxt}>Apetite</Text>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={100}
                                    minimumTrackTintColor="black"
                                    maximumTrackTintColor="black"
                                    thumbTintColor='black'
                                    value={50} />
                            </View>
                        </View>

                        <View style={styles.RangeCont}>
                            <View style={styles.RangeItem}>
                                <Text style={styles.rangeTxt}>Constipation</Text>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={100}
                                    minimumTrackTintColor="black"
                                    maximumTrackTintColor="black"
                                    thumbTintColor='black'
                                    value={50} />
                            </View>
                        </View>

                        <View style={styles.RangeCont}>
                            <View style={styles.RangeItem}>
                                <Text style={styles.rangeTxt}>Anxiety</Text>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={100}
                                    minimumTrackTintColor="black"
                                    maximumTrackTintColor="black"
                                    thumbTintColor='black'
                                    value={50} />
                            </View>
                        </View>

                        <View style={styles.RangeCont}>
                            <View style={styles.RangeItem}>
                                <Text style={styles.rangeTxt}>Restlessness</Text>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={100}
                                    minimumTrackTintColor="black"
                                    maximumTrackTintColor="black"
                                    thumbTintColor='black'
                                    value={50} />
                            </View>
                        </View>

                        <View style={styles.ReviewMn}>
                            <Text style={styles.ReviewMnTxt}>Pain Severity</Text>
                            <View style={styles.ReviewCnt}>

                                <TouchableOpacity style={styles.RweviewItm}>
                                    <Image source={require('../assets/images/mild.png')}
                                        style={styles.ReviewImg} />
                                    <Text style={styles.ReviewTxt}>Mild</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.RweviewItm}>
                                    <Image source={require('../assets/images/moderate.png')}
                                        style={styles.ReviewImg} />
                                    <Text style={styles.ReviewTxt}>Moderate</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.RweviewItm}>
                                    <Image source={require('../assets/images/severe.png')}
                                        style={styles.ReviewImg} />
                                    <Text style={styles.ReviewTxt}>Severe</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.RweviewItm}>
                                    <Image source={require('../assets/images/chronic.png')}
                                        style={styles.ReviewImg} />
                                    <Text style={styles.ReviewTxt}>Chronic</Text>
                                </TouchableOpacity>

                            </View>

                            <View style={{ width: '100%' }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Where?'
                                    value={text}
                                    onChangeText={onChangeText}
                                    selectionColor="red"/>

                            </View>

                            <View style={styles.buttonMain}>
                                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Product')}>
                                    <Text style={styles.buttonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                    <View><Text style={{ marginVertical: 20 }}>&nbsp;</Text></View>
                </ScrollView>
            </SafeAreaView>
            <View>
                <BottomBanner />
            </View>
        </>

    );
}

export default HealthQuiz;

const styles = StyleSheet.create({
    HealthMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'start',
        width: '100%',
    },
    slider: {
        width: '80%',
        height: 0,
        paddingVertical: 10,
        marginVertical: 5
    },
    healthtxt: { width: '100%' },
    ParentTxtItm: {
        display: 'flex',
        width: '40%',
        paddingTop: 20,
        paddingBottom: 10,
        marginLeft: 15,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    parentTxt: {
        fontSize: 25,
        fontWeight: '900'
    },
    gobackimg: {
        width: 20,
        height: 20
    },
    LH: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: 250,
        marginTop: 30,
        marginBottom: 10
    },
    RangeCont: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 30,
    },
    RangeItem: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 7,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 13,
        width: '100%',
    },
    rangeTxt: {
        fontWeight: '400',
    },
    ReviewMn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        marginVertical: 25,
        width: '100%',
    },
    ReviewMnTxt: {
        fontSize: 16,
        marginBottom: 5
    },
    gobackimg: {
        width: 20,
        height: 20
    },
    ReviewCnt: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 15
    },
    RweviewItm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginVertical: 10,
        width: '20%'
    },
    ReviewImg: {
        width: 35,
        height: 35,
    },
    ReviewTxt: {
        fontSize: 14,
        color: 'gray'
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '70%',
        borderRadius: 30,
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical: 10,
        marginVertical: 15,
        alignSelf: 'center',
        marginBottom: 25
    },

    buttonMain: {
        width: '90%',
        marginTop: 5,
    },
    button: {
        backgroundColor: "rgb(8,212,198)",
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 5,
    },
    buttonText: {
        color: "white",
        fontWeight: '500',
        textAlign: "center",
    },
})