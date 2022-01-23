import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import { StatusBar } from 'expo-status-bar'
import HospitalRecCard from '../components/HospitalRecCard';
import { ScrollView } from 'react-native';




const HomeGeneral = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Care Near You</Text>
                <AntDesign name="heart" size={20} color="#ff0065" style={{marginLeft: 5}}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{width: "100%", paddingLeft: 24}}>
                <HospitalRecCard 
                    hospitalName="Sample Hospital A" 
                    lineLength={19} 
                    waitMinutes={87}
                    distance={1.4}
                    onPress={() => navigation.navigate('ClaimScreen')}
                />
                <HospitalRecCard 
                    hospitalName="Childern's Hospital" 
                    lineLength={10} 
                    waitMinutes={65}
                    distance={0.5}
                    onPress={() => navigation.navigate('ClaimScreen')}
                />
                <HospitalRecCard 
                    hospitalName="St. Peters Hospital" 
                    lineLength={20} 
                    waitMinutes={135}
                    distance={0.5}
                    onPress={() => navigation.navigate('ClaimScreen')}
                />
                <HospitalRecCard 
                    hospitalName="Albany Medical" 
                    lineLength={14} 
                    waitMinutes={98}
                    distance={2.7}
                    onPress={() => navigation.navigate('ClaimScreen')}
                />
                <HospitalRecCard 
                    hospitalName="Sample Hospital B" 
                    lineLength={13} 
                    waitMinutes={120}
                    distance={2.7}
                    onPress={() => navigation.navigate('ClaimScreen')}
                />
                <HospitalRecCard 
                    hospitalName="Sample Hospital C" 
                    lineLength={19} 
                    waitMinutes={87}
                    distance={1.4}
                    onPress={() => navigation.navigate('ClaimScreen')}
                />
                
            </ScrollView>            
        </View>
    )
}

export default HomeGeneral

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // justifyContent: 'center',
        height: "100%", 
        width: "100%",
        backgroundColor: "white"
    },
    headerContainer : {
        marginTop: "15%",
        flexDirection: "row",
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        width: "90%",
        borderColor: "lightgray"
    },
    header : {
        fontSize: 25,
        fontWeight: "bold",
    }
})
