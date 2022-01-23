import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function GoToButton({ label }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=> navigation.navigate("ClaimScreen")} style={styles.claimBtn}>
            <Text style={{color: "#ff0064", fontWeight: "300"}}>Claim Spot</Text>
        </TouchableOpacity>
    );
}
const HospitalRecCard = ({id, hospitalName, waitMinutes, lineLength, distance, onPress}) => {
    return (
        <View style={styles.container}>
            <View style={{borderBottomWidth: 0.5, borderColor: "lightgray", flexDirection: "row"}}>
                <Text style={{fontSize: 20, fontWeight: '500', paddingBottom: 5}}>{hospitalName}</Text>
                <Text style={{fontSize: 17, color: "gray", paddingTop: 1}}>{`\t\t`}({distance} miles)</Text>
            </View>
            
            <View style={{flexDirection:"row", alignItems: 'center', justifyContent:"center", paddingTop: 10}}>
                <MaterialCommunityIcons name="account-clock" size={20} color="black" />
                <Text style={{fontSize: 17, paddingLeft: 5}}>{waitMinutes} minutes,  {lineLength} patients</Text>
            </View>
            
            <TouchableOpacity onPress={onPress} style={styles.claimBtn}>
                <Text style={{color: "#ff0064", fontWeight: "300"}}>Claim Spot</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HospitalRecCard

const styles = StyleSheet.create({
    container : {
        height: 140,
        backgroundColor: "#f5f5f5", 
        width: "93%",
        marginTop: 20,
        borderRadius: 20, 
        padding: 15, 
        alignItems: 'center',
    },
    claimBtn : {
        height: "25%",
        borderWidth: 1,
        width: "90%",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        borderColor: "#ff0064", 
        marginTop: 15,
    }
})
