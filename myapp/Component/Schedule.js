import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import BottomBanner from './BottomBanner';


export default function ({ navigation }) {
    const handleButtonPress = () => {
        console.log("Button pressed");
    };

    return (
        <>
            <View style={styles.ScheduleMain}>
                <SafeAreaView>
                    <ScrollView>

                        <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                            <View style={styles.ParentTxtItm}>
                                <Image
                                    source={require('../assets/images/showleft.png')}
                                    style={styles.gobackimg} />
                                <Text style={styles.parentTxt}>Schedule</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.ScheduleInpCnt}>
                            <View style={styles.ScheduleItm}>
                                <Text>Event Name</Text>
                                <TextInput
                                    style={styles.ScheduleInp}
                                    placeholder='Event Name'
                                />
                            </View>


                            <View style={styles.ScheduleItm}>
                                <Text>Date</Text>
                                <TextInput
                                    style={styles.ScheduleInp}
                                    placeholder='Date'
                                />
                            </View>

                            <View style={styles.ScheduleItm}>
                                <Text>Time</Text>
                                <TextInput
                                    style={styles.ScheduleInp}
                                    placeholder='Time'
                                />
                            </View>
                        </View>

                        <View style={styles.AlarmItm}>
                            <Image
                                source={require('../assets/images/bell.png')}
                                style={styles.AlarmImg} />
                            <TextInput
                                style={styles.ScheduleInp}
                                placeholder='Alarm Time' />
                        </View>

                        <View style={styles.TimeTbleCnt}>
                            <Text style={styles.repeat}>Repeat</Text>

                            <TouchableOpacity style={styles.weekItm}>
                                <Text style={{ color: 'gray' }}>Su</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.weekItm}>
                                <Text style={{ color: 'gray' }}>Mo</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.weekItm}>
                                <Text style={{ color: 'gray' }}>Tu</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.weekItm}>
                                <Text style={{ color: 'gray' }}>We</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.weekItm}>
                                <Text style={{ color: 'gray' }}>Th</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.weekItm}>
                                <Text style={{ color: 'gray' }}>Fr</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.weekItm}>
                                <Text style={{ color: 'gray' }}>Sa</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.AlarmItm}>
                            <Image
                                source={require('../assets/images/capsule.png')}
                                style={styles.AlarmImg} />
                            <TextInput
                                style={styles.ScheduleInp}
                                placeholder='Medication' />
                        </View>

                        <View style={styles.btns}>
                            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.uploadItm}>
                            <Image
                                source={require('../assets/images/upload.png')}
                                style={{ width: 35, height: 35, marginTop: 10 }}
                            />
                            <Text style={[styles.uploadTxt, { marginTop: 15 }]}>upload</Text>
                            <Text style={styles.uploadTxt}>business card</Text>

                            <TouchableOpacity style={styles.buttn} onPress={handleButtonPress}>
                                <Text style={styles.buttnText}>Upload</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.InpContainer}>
                            <Text style={styles.InpCntTxt}>Doctor Information</Text>

                            <View style={styles.CheckoutInpItm}>
                                <View style={styles.FrImg}>
                                    <Image
                                        source={require('../assets/images/usered.png')}
                                        style={{ width: 25, height: 25 }}
                                    />
                                </View>
                                <View style={styles.FrInput}>
                                    <TextInput
                                        style={styles.inputName}
                                        placeholder='Name of Doctor'
                                    />
                                </View>
                            </View>

                            <View style={styles.CheckoutInpItm}>
                                <View style={styles.FrImg}>
                                    <Image
                                        source={require('../assets/images/phone.png')}
                                        style={{ width: 25, height: 25 }}
                                    />
                                </View>
                                <View style={[styles.FrInput, styles.FrPhMonInp]}>
                                    <TextInput
                                        style={styles.inputPhNum}
                                        placeholder='Phone Number'
                                    />
                                    <TextInput
                                        style={styles.inputMob}
                                        placeholder='Mobille'
                                    />
                                </View>
                            </View>


                            <View style={styles.CheckoutInpItm}>
                                <View style={styles.FrImg}>
                                    <Image
                                        source={require('../assets/images/location.png')}
                                        style={{ width: 25, height: 25 }}
                                    />
                                </View>
                                <View style={styles.FrInput}>
                                    <TextInput
                                        style={styles.inputName}
                                        placeholder='Address'
                                    />
                                </View>
                            </View>

                            <View style={styles.CheckoutInpItm}>
                                <View style={styles.FrImg}>
                                    <Text>&nbsp;</Text>
                                </View>
                                <View style={[styles.FrInput, styles.FrPhMonInp]}>
                                    <TextInput
                                        style={styles.inputCity}
                                        placeholder='City'
                                    />
                                    <TextInput
                                        style={styles.inputState}
                                        placeholder='State'
                                    />
                                    <TextInput
                                        style={styles.inputZip}
                                        placeholder='Zip'
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={styles.btns}>
                            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                                <Text style={styles.buttonText}>Back to calendar</Text>
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
    ScheduleMain: {
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
    ScheduleInpCnt: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        alignSelf: 'center',
        paddingHorizontal: 5
    },
    ScheduleItm: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        gap: 10,
        marginVertical: 10
    },
    ScheduleInp: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 30
    },
    AlarmItm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        alignSelf: 'center',
        flexDirection: 'row',
        gap: 10,
        marginVertical: 25
    },
    AlarmImg: {
        width: 35,
        height: 35,
        borderRadius: 20
    },
    TimeTbleCnt: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 10
    },
    repeat: {
        marginRight: 15,
        color: 'gray'
    },
    weekItm: {
        borderWidth: 2,
        borderColor: 'black',
        paddingHorizontal: 2,
        marginHorizontal: 10
    },
    button: {
        backgroundColor: "rgb(8,212,198)",
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 5,
        width: '50%'
    },
    buttonText: {
        fontWeight: '500',
        textAlign: "center",
        color: 'white'
    },
    buttn: {
        backgroundColor: "black",
        paddingVertical: 12,
        borderRadius: 30,
        marginTop: 15,
        width: '80%'
    },
    buttnText: {
        fontWeight: '600',
        textAlign: "center",
        color: 'white'
    },
    btns: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15, flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginVertical: 10
    },
    uploadItm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: '95%',
        alignSelf: 'center',
        marginVertical: 15,
        backgroundColor: 'rgba(211, 211, 211, 0.6)',
        borderRadius: 30,
        marginTop: 50
    },
    uploadTxt: {
        marginTop: 2
    },
    InpContainer: {
        width: '96%',
        paddingVertical: 20,
        paddingHorizontal: 10,
        paddingRight: 25,
        alignSelf: 'center'
    },
    InpCntTxt: {
        fontSize: 17,
        fontWeight: '600',
        marginVertical: 15
    },
    inputPhn: {
        width: '42%',
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        paddingHorizontal: 15,
    },
    inputCity: {
        width: '40%',
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        paddingHorizontal: 15,
    },
    inputState: {
        width: '30%',
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        paddingHorizontal: 15,
    },
    inputZip: {
        width: '20%',
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        paddingHorizontal: 15,
    },
    CheckoutInpItm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 15,
        width: '100%',
        marginVertical: 10
    },
    FrImg: { width: '10%' },
    FrInput: { width: '90%', },
    inputPhNum: {
        width: '60%',
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        paddingHorizontal: 15,
    },
    inputMob: {
        width: '35%',
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        paddingHorizontal: 15,
    },
    inputName: {
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        paddingHorizontal: 15,
    },
    FrPhMonInp: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 15
    },

})