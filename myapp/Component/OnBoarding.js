import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Modal, Image, ScrollView } from "react-native";

const OnBoarding = ({ navigation }) => {
    const [checkboxStates, setCheckboxStates] = useState({
        foodRemedies: false,
        drinkRemedies: false,
        selfCareRemedies: false,
        healthCareRemedies: false,
        selectLanguages: false
    });
    const toggleCheckbox = (checkboxKey) => {
        setCheckboxStates((prevState) => ({
            ...prevState,
            [checkboxKey]: !prevState[checkboxKey],
        }));
    };

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('Select Language');
    const languages = ['Select Language', 'English', 'Spanish', 'Mandarin Chinese', 'Arabic', 'Japanese'];
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const onLanguageSelect = (language) => {
        setSelectedLanguage(language);
        setIsDropdownVisible(false);
    };

    return (
        <ScrollView style={styles.BoardingHeadScroll}>
            <View style={styles.bordingMn}>
                <SafeAreaView style={styles.main}>
                    <View style={styles.maintitle}>
                        <Text style={styles.maintitleTxt}>What would you like to find?</Text>
                    </View>

                    <View style={styles.desc}>
                        <Text style={styles.descTxt}>Explore a variety of remedies for different ailments. Discover natural solutions such as food, juice, tea and other remedies to help you feel better. We also have a shop page where you can purchase  products related to your health.</Text>
                    </View>

                    <View style={styles.allItmMain}>

                        <TouchableOpacity onPress={() => toggleCheckbox('foodRemedies')} style={styles.checkboxContainer}>
                            <View style={[styles.checkItem, { marginTop: 10 }]}>
                                <View style={styles.checkAbout}>
                                    <View>
                                        <Image
                                            source={require('../assets/images/leaf.png')}
                                            style={styles.txtIcn}
                                        />
                                    </View>
                                    <View style={styles.texticn}>
                                        <Text style={styles.checkAbtTxt1}>Food remedies</Text>
                                        <Text style={styles.checkAbtTxt2}>Discover natural solutions</Text>
                                    </View>
                                </View>
                                <View
                                    style={[
                                        styles.checkbox,
                                        checkboxStates.foodRemedies ? styles.checked : styles.unchecked,
                                    ]}>
                                    {checkboxStates.foodRemedies && <Text style={styles.checkmark}>&#10003;</Text>}
                                </View>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => toggleCheckbox('drinkRemedies')} style={styles.checkboxContainer}>
                            <View style={styles.checkItem}>
                                <View style={styles.checkAbout}>
                                    <View>
                                        <Image
                                            source={require('../assets/images/app-icon.png')}
                                            style={styles.txtIcn} />
                                    </View>
                                    <View style={styles.texticn}>
                                        <Text style={styles.checkAbtTxt1}>Drink remedies</Text>
                                        <Text style={styles.checkAbtTxt2}>Find remedies in drinks</Text>
                                    </View>
                                </View>
                                <View
                                    style={[
                                        styles.checkbox,
                                        checkboxStates.drinkRemedies ? styles.checked : styles.unchecked,
                                    ]}>
                                    {checkboxStates.drinkRemedies && <Text style={styles.checkmark}>&#10003;</Text>}
                                </View>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => toggleCheckbox('selfCareRemedies')} style={styles.checkboxContainer}>
                            <View style={styles.checkItem}>
                                <View style={styles.checkAbout}>
                                    <View>
                                        <Image
                                            source={require('../assets/images/app-icon02.png')}
                                            style={styles.txtIcn} />
                                    </View>
                                    <View style={styles.texticn}>
                                        <Text style={styles.checkAbtTxt1}>Self-care remedies</Text>
                                        <Text style={styles.checkAbtTxt2}>Take care of yourself naturally</Text>
                                    </View>
                                </View>
                                <View
                                    style={[
                                        styles.checkbox,
                                        checkboxStates.selfCareRemedies ? styles.checked : styles.unchecked,
                                    ]}>
                                    {checkboxStates.selfCareRemedies && <Text style={styles.checkmark}>&#10003;</Text>}
                                </View>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => toggleCheckbox('healthCareRemedies')} style={styles.checkboxContainer}>
                            <View style={styles.checkItem}>
                                <View style={styles.checkAbout}>
                                    <View>
                                        <Image
                                            source={require('../assets/images/app-icon04.png')}
                                            style={styles.txtIcn} />
                                    </View>
                                    <View style={styles.texticn}>
                                        <Text style={styles.checkAbtTxt1}>Shop for health products</Text>
                                    </View>
                                </View>

                                <View
                                    style={[
                                        styles.checkbox,
                                        checkboxStates.healthCareRemedies ? styles.checked : styles.unchecked,
                                    ]}>
                                    {checkboxStates.healthCareRemedies && <Text style={styles.checkmark}>&#10003;</Text>}
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => toggleCheckbox('selectLanguages')} style={styles.checkboxContainer}>
                            <View style={styles.checkItem}>
                                <View style={styles.checkAbout}>
                                    <View>
                                        <Image
                                            source={require('../assets/images/app-icon03.png')}
                                            style={styles.txtIcn} />
                                    </View>

                                    <TouchableOpacity
                                        onPress={toggleDropdown}>
                                        <View style={styles.dropdownmain}>
                                            <View>
                                                <TouchableOpacity onPress={toggleDropdown}>
                                                    <View style={styles.heckbox}>
                                                        <Text style={[styles.heckAbtTxt1, styles.checkAbtTxt1]}>{selectedLanguage}</Text>
                                                    </View>
                                                </TouchableOpacity>

                                                {isDropdownVisible && (
                                                    <View style={styles.ropdownContainer}>
                                                        {languages.map((language) => (
                                                            <TouchableOpacity
                                                                key={language}
                                                                onPress={() => onLanguageSelect(language)}
                                                            >
                                                                <Text style={styles.anguageItem}>{language}</Text>
                                                            </TouchableOpacity>
                                                        ))}
                                                    </View>
                                                )}
                                            </View>

                                            <Image
                                                source={require('../assets/images/arrowdown.png')}
                                                style={styles.arrowdown}
                                            />
                                        </View>
                                    </TouchableOpacity>

                                </View>

                                <View
                                    style={[
                                        styles.checkbox,
                                        checkboxStates.selectLanguages ? styles.checked : styles.unchecked,
                                    ]}>
                                    {checkboxStates.selectLanguages && <Text style={styles.checkmark}>&#10003;</Text>}
                                </View>

                            </View>
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.endTxt}>Browse our shop page</Text>
                        </View>

                    </View>

                    <View style={styles.buttonMain}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Product')}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>

            <View style={{ marginVertical: 20 }}>
                <Text>&nbsp;</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    bordingMn: {
        width: '92%',
        flex: 1,
        marginTop: 20,
        alignSelf: 'center',
    },
    BoardingHeadScroll: { width: '100%', marginTop: 20 },
    main: {
        flex: 1,
        justifyContent: "space-evenly",
        width: '100%',
    },
    allItmMain: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    maintitle: {
        marginTop: 5,
        marginBottom: 35,
        marginTop: 30,
    },
    maintitleTxt: {
        fontWeight: '800',
        fontSize: 27,
    },
    desc: {
        marginVertical: 20,
    },
    descTxt: {
        color: 'gray',
        lineHeight: 22,
        fontSize: 14
    },
    txtIcn: {
        width: 30,
        height: 30
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 3,
        width: '100%',
        marginVertical: 15,
        paddingVertical: 10
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: "gray",
        width: 20
    },
    checked: {
        backgroundColor: "rgb(8,212,198)",
        borderColor: "rgb(8,212,198)",
    },
    unchecked: {
        backgroundColor: 'transparent',
    },
    checkmark: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    dropdownmain: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 50,
        width: '70%'
    },
    checkItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        width: '100%',
    },
    lastcmpt: {
        marginTop: 10
    },
    checkAbout: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        width: '95%',
        gap: 7
    },
    checkAbtTxt1: {
        fontSize: 18,
        color: "black",
        fontWeight: '700'
    },
    checkAbtTxt2: {
        fontSize: 14,
        color: "gray",
        fontWeight: '600'
    },
    arrowdown: { width: 20, height: 20, },
    endTxt: {
        color: "gray",
        fontWeight: '800',
        zIndex: 2,
        marginTop: 10
    },
    buttonMain: {
        width: '50%',
        marginTop: 30,
        alignSelf: "flex-end",
    },
    button: {
        justifyContent: "flex-end",
        backgroundColor: "rgb(8,212,198)",
        padding: 20,
        borderRadius: 30,
        marginTop: 5,
        fontWeight: '900',
    },
    buttonText: {
        color: "white",
        fontWeight: '900',
        textAlign: "center",
    },
    ropdownContainer: {
        position: 'absolute',
        top: 25,
        left: 0,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        zIndex: 3,
        width: 190,
    },
    anguageItem: {
        paddingVertical: 7,
        paddingHorizontal: 10,
        fontSize: 14,
    },
})

export default OnBoarding;