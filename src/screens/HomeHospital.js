import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import { StatusBar } from 'expo-status-bar'
import HospitalRecCard from '../components/HospitalRecCard';
import PatientInfoCard from '../components/PatientInfoCard';

const HomeHospital = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Children's Hospital</Text>
                <AntDesign name="heart" size={20} color="#ff0065" style={{marginLeft: 5}}/>
            </View>
            <View style={{flexDirection: "row", borderBottomWidth: 0.5, borderColor: "lightgray", paddingBottom: 15}}>
                <View style={{marginHorizontal: 10, backgroundColor:"#f5f5f5", width: 150, height: 100, marginTop: 15, borderRadius: 20, alignItems: 'center', justifyContent: "center"}}>
                    <Text style={{padding: 0, fontSize: 25, color: "#000", fontWeight: "300", fontWeight: "300"}}>10</Text>
                    <Text style={{paddingBottom: 5, fontSize: 14, color: "gray", fontWeight: "300"}}>Patients</Text> 
                    <View style={{ borderTopWidth: 0.5,width: "100%", alignItems: 'center', borderColor: "lightgray"}}>
                        <Text style={{padding: 5, fontSize: 14, color: "gray",fontWeight: "300"}}>Line Length</Text>
                    </View>   
                    
                </View>
                <View style={{marginHorizontal: 10,backgroundColor:"#f5f5f5", width: 150, height: 100, marginTop: 15, borderRadius: 20, alignItems: 'center', justifyContent: "center"}}>
                <Text style={{padding: 0, fontSize: 25, color: "#000", fontWeight: "300"}}>65</Text>
                    <Text style={{paddingBottom: 5, fontSize: 14, color: "gray",fontWeight: "300"}}>Minutes</Text> 
                    <View style={{ borderTopWidth: 0.5,width: "100%", alignItems: 'center', borderColor: "lightgray"}}>
                        <Text style={{padding: 5, fontSize: 14, color: "gray", fontWeight: "300"}}>Wait Time</Text>
                    </View>   
                </View>
            </View>
            <View style={{marginTop: 15}}>
                <Text style={{fontSize: 18, fontWeight: "600"}}>Upcoming Patients</Text>
            </View>
            <PatientInfoCard 
                patientName="Manasa Bala" 
                distance={0.5} 
                info="Inflamation in right ankle after falling off a bicycle. Have been icing the inflamed area."
            />
            <PatientInfoCard 
                patientName="Child Patient " 
                distance={1.2} 
                info="Got hit in the right temple with a soccer ball. Mild dizziness"
            />
            <PatientInfoCard 
                patientName="Alexandra Ly" 
                distance={12.4} 
                info="A rasin is caught in my child's nostril. She is having trouble breathing."
            />
        </View>
    )
}

export default HomeHospital

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
