import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";
import BottomBanner from "./BottomBanner";

const { width } = Dimensions.get("window");

const Product = ({ navigation }) => {
    // Top Slider Code Functionality Start
    const [active, setActive] = useState(0);

    const images = [
        { id: '1', source: require('../assets/images/doctor.jpg') },
        { id: '2', source: require('../assets/images/friends.jpg') },
        { id: '3', source: require('../assets/images/Pdata.jpg') },
        { id: '4', source: require('../assets/images/walk.jpg') },
        { id: '5', source: require('../assets/images/bpmeter.jpg') },
    ];

    const change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== active) {
            setActive(slide);
        }
    };
    // Top Slider Code Functionality End

    const handleButtonPress = () => {
        console.log("Button Pressed");
    }

    return (
        <>
            <ScrollView style={styles.productParent}>
                {/* Top Slider Code Start */}
                <Text style={styles.parentTxt}>Welcome to HealMeHealthy!</Text>
                <SafeAreaView style={styles.mainSafe}>
                    <View style={styles.container}>
                        <View style={styles.imgMain}>
                            <ScrollView
                                horizontal
                                style={styles.scroll}
                                onScroll={change}
                                pagingEnabled
                                showsHorizontalScrollIndicator={false}
                            >
                                {images.map((image, index) => (
                                    <Image
                                        key={image.id}
                                        source={image.source}
                                        style={styles.image}
                                    />
                                ))}
                            </ScrollView>
                        </View>
                        <View>
                            <Text style={styles.adtnItms}>Explore our remedies!</Text>
                            <View style={styles.pagination}>
                                {images.map((i, k) => (
                                    <Text key={k} style={k === active ? styles.paginationActiveText : styles.paginationText}></Text>
                                ))}
                            </View>
                        </View>

                        <View style={styles.containerEnd}>
                            <View>
                                <Text style={styles.bold}>Find remedies</Text>
                                <Text style={styles.light}>Fast and easy</Text>
                            </View>
                            <TouchableOpacity style={styles.bton} onPress={() => navigation.navigate('Herbs')}>
                                <Text style={styles.buttonTx}>Search</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </SafeAreaView>
                {/* Top Slider Code End */}

                <View style={styles.main}>
                    <View style={styles.productMain}>
                        <Text style={styles.productTxt}>Our Products</Text>

                        <View style={styles.allItms}>
                            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('HealthData')}>
                                <View style={styles.itemInsd}>
                                    <Image
                                        source={require('../assets/images/app-icon07.png')}
                                        style={styles.itemIcn}
                                    />
                                    <Text style={styles.itmTxt}>Health data</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Discover')}>
                                <View style={styles.itemInsd}>
                                    <Image
                                        source={require('../assets/images/leaf.png')}
                                        style={styles.itemIcn}
                                    />
                                    <Text style={[styles.itmTxt, styles.itmtxtnaturalRmd]}>Natural{'\n'}remedies</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Shop')}>
                                <View style={styles.itemInsd}>
                                    <Image
                                        source={require('../assets/images/app-icon04.png')}
                                        style={styles.itemIcn}
                                    />
                                    <Text style={styles.itmTxt}>Shop page</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('HealthQuiz')}>
                                <View style={styles.itemInsd}>
                                    <Image
                                        source={require('../assets/images/bookIcn.png')}
                                        style={styles.itemIcn}
                                    />
                                    <Text style={styles.itmTxt}>Medical quiz</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.addictionMain}>
                            <Text style={styles.adtnItms}>New addictions</Text>
                            <View style={styles.allItms}>

                                <View style={styles.addictionitem}>
                                    <TouchableOpacity style={styles.addictioninsd} onPress={() => navigation.navigate('Checkout')}>
                                        <Image
                                            source={require('../assets/images/dineIcn.png')}
                                            style={styles.addictionIcn}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.addictionTxt}>Food remedies</Text>
                                </View>

                                <View style={styles.addictionitem}>
                                    <TouchableOpacity style={styles.addictioninsd} onPress={() => navigation.navigate('Food')}>
                                        <Image
                                            source={require('../assets/images/pcIcn.png')}
                                            style={styles.addictionIcn}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.addictionTxt}>Medical quiz</Text>
                                </View>

                            </View>
                        </View>

                        <View style={styles.addictionMain}>
                            <Text style={styles.adtnItms}>New ailment remedy request</Text>
                            <View style={styles.ailItms}>

                                <View style={styles.redmiitem}>
                                    <Text style={styles.addictionTxt}>Email us</Text>
                                    <View style={styles.buttonMain}>
                                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RDatabase')}>
                                            <Text style={styles.buttonText}>Send</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={styles.ailmentImg}>
                                    <Image
                                        source={require('../assets/stone.jpg')}
                                        style={styles.ailImg}
                                    />
                                </View>

                            </View>
                        </View>

                    </View>
                </View>
                <View><Text style={{ marginVertical: 40 }}>&nbsp;</Text></View>
            </ScrollView>
            <View>
                <BottomBanner />
            </View>
        </>

    );
}

export default Product;

const styles = StyleSheet.create({
    productParent: {
        width: '100%',
        margin: 'auto',
        marginTop: 20,
        paddingHorizontal: 2
    },
    parentTxt: {
        fontSize: 25,
        paddingTop: 30,
        paddingBottom: 10,
        marginLeft: 15,
        fontWeight: '900'
    },
    // Top Slider Code CSS Start
    container: {
        width: '94%',
        height: 350,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        marginBottom: 25,
    },
    mainSafe: {
        backgroundColor: "rgb(8,212,198)",
        width: '100',
        borderRadius: 30,
        margin: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroll: {
        width,
        height: '100%',
    },
    imgMain: {
        borderRadius: 30,
        height: 200,
        overflow: 'hidden',
        marginTop: 30
    },
    image: {
        width,
        height: '100%',
        resizeMode: 'cover',
    },
    pagination: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 10
    },
    paginationText: {
        color: 'white',
        margin: 3,
        width: '18%',
        height: 3,
        backgroundColor: 'white'
    },
    paginationActiveText: {
        margin: 3,
        backgroundColor: 'black',
        width: '20%',
        height: 3,
    },
    adtnItms: {
        fontSize: 23,
        fontWeight: '600',
        marginBottom: 10,
        marginTop: 15,
    },
    bold: {
        fontSize: 17,
        fontWeight: '600',
    },
    light: {
        fontSize: 13,
        fontWeight: '400',
        marginTop: 2,
        color: 'black',
    },
    bton: {
        backgroundColor: 'black',
        paddingVertical: 8,
        borderRadius: 30,
        marginTop: 5,
        paddingHorizontal: 30
    },
    buttonTx: {
        color: "white",
        fontWeight: '500',
        textAlign: "center",
    },
    containerEnd: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
        width: '100%'
    },
    // Top Slider Code CSS End
    main: {
        marginTop: 30,
    },
    ailImg: {
        width: '100%',
        height: 80,
        borderRadius: 15
    },
    buttonMain: {
        width: 100,
        marginTop: 5,
    },
    button: {
        backgroundColor: "rgb(8,212,198)",
        paddingVertical: 8,
        borderRadius: 30,
        marginTop: 5,
    },
    buttonText: {
        color: "white",
        fontWeight: '500',
        textAlign: "center",
    },
    productMain: {
        borderColor: "rgb(8,212,198)",
        borderWidth: 3,
        borderRadius: 30,
        padding: 10,
        marginHorizontal: 7
    },
    productTxt: {
        fontSize: 25,
        fontWeight: '600',
        marginBottom: 10,
        marginTop: 20
    },
    allItms: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 10,
        gap: 2,
    },
    itemIcn: {
        width: 30,
        height: 30
    },
    itmtxtnaturalRmd: {
        width: '55%',
        textAlign: 'left',
        paddingLeft: 5
    },
    item: {
        borderColor: "rgb(8,212,198)",
        borderWidth: 2,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 15,
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 20,
        width: "48%",
    },
    itmTxt: {
        color: "gray",
        fontWeight: '400',
        textAlign: "right",
        paddingRight: 10
    },
    itemInsd: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        height: 70,
    },
    adtnItms: {
        fontSize: 25,
        fontWeight: '600',
        marginBottom: 10,
        marginTop: 10,
    },
    addictioninsd: {
        borderColor: "rgb(8,212,198)",
        borderWidth: 2,
        borderRadius: 30,
        paddingHorizontal: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
        width: "100%",
        height: 100
    },
    addictionMain: {
        paddingTop: 20,
        paddingBottom: 10,
    },
    redmiitem: {
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        flexDirection: "column",
        gap: 5,
        width: '30%'
    },
    addictionitem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 0,
        width: "48%",
    },
    ailmentImg: {
        width: '50%',
    },
    ailItms: {
        borderColor: "rgb(8,212,198)",
        borderWidth: 2,
        borderRadius: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    addictionIcn: {
        marginHorizontal: 10,
        marginVertical: 10,
        width: 60,
        height: 58,
    },
    addictionTxt: {
        color: "gray",
        fontWeight: '400',
        marginLeft: 5
    },
})