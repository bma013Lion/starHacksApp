import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PatientInfoCard = ({id, patientName, distance, info}) => {
    return (
        <View style={styles.container}>
            <View style={{borderBottomWidth: 0.5, borderColor: "lightgray", flexDirection: "row"}}>
                <Text style={{fontSize: 20, fontWeight: '500', paddingBottom: 5}}>{patientName}</Text>
                <Text style={{fontSize: 17, color: "gray", paddingVertical: 1, left: 120}}>({distance} mi.)</Text>
            </View>
            
            <View style={{flexDirection:"row", marginTop: 10, padding: 5}}>
                <MaterialCommunityIcons name="format-list-bulleted" size={20} color="#ff0064" />
                <Text style={{fontSize: 18, paddingLeft: 5}}>{info}</Text>
            </View>
            
            {/* <TouchableOpacity style={styles.claimBtn}>
                <Text style={{color: "#ff0064", fontWeight: "300"}}>Claim Spot</Text>
                <AntDesign name="caretright" size={13} color="#ff0064" style={{ marginLeft: 5}}/>
            </TouchableOpacity> */}
        </View>
    )
}

export default PatientInfoCard

const styles = StyleSheet.create({
    container : {
        height: 155,
        backgroundColor: "#f5f5f5", 
        width: "85%",
        marginTop: 20,
        borderRadius: 20, 
        padding: 15
    },
    claimBtn : {
        height: "25%",
        borderWidth: 1,
        width: "40%",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        borderColor: "#ff0064", 
        marginTop: 12,
        left: "160%",
    }
})
