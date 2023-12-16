import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Platform,
     TouchableOpacity, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style = {styles.droidSafeArea}/>
                <ImageBackground source = {require("../assets/stars.gif")} style = {styles.backgroundImage}>
                <View style = {styles.titleBar}>
                  <Image source = {require("../assets/main-icon.png")} style = {styles.mainImage}/>
                  <Text style = {styles.titleText}>Stellar</Text>
                  <Text style = {styles.titleText}>App</Text>
                </View>
                <TouchableOpacity style = {styles.routeCards} onPress={() => 
                    this.props.navigation.navigate("SpaceCrafts")}>
                    <Text style = {styles.routeText}>Space Crafts</Text>
                    <Image source = {require("../assets/space_crafts.png")} style = {styles.iconImage}/>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.routeCards}  onPress={() => 
                    this.props.navigation.navigate("StarMap")}>
                    <Text style = {styles.routeText}>Star Map</Text>
                    <Image source = {require("../assets/star_map.png")} style = {styles.iconImage}/>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.routeCards}  onPress={() => 
                    this.props.navigation.navigate("DailyPic")}>
                    <Text style = {styles.routeText}>Daily Pictures</Text>
                    <Image source = {require("../assets/daily_pictures.png")} style = {styles.iconImage}/>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },
    mainImage: {
        marginTop: 200,
        width: 170,
        height: 170,
        marginBottom: 15
    },
    titleBar: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 200,
    },
    titleText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: "#fff",
    },
    routeCards: {
        flex: 0.15,
        marginLeft: 50,
        marginTop: 20,
        marginRight: 50,
        backgroundColor: "#fff",
        borderRadius: 50,
        alignItems: 'center',
    },
    routeText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: "#e75480",
        paddingTop: 25,
    },
    iconImage: {
        position: "absolute",
        height: 80,
        width: 80,
        resizeMode: "contain",
        right: -20,
        top: -15
    },
})