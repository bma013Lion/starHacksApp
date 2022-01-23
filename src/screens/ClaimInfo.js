import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import SwitchSelector from "react-native-switch-selector";

const ClaimInfo = ({navigation}) => {
    const [info, setInfo] = useState("");
    return (
        <View style={styles.container}>
           <View style={{width: '100%', alignItems: 'flex-start'}}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{marginTop: 50, flexDirection: 'row'}}>
                    <AntDesign
                        name="arrowleft"
                        color="#000"
                        size={23}
                        style={{marginLeft: 20}}
                    />
                </TouchableOpacity>
            </View>
            <View style={[styles.centeredView]}>
                <View style={[styles.titleContainer]}>
                    <Text style={styles.title}>Claim Spot</Text>
                    <Text style={styles.titleSubheader}>
                        First Name: Manasa{`\n`}
                        Last Name: Bala{`\n`}
                        Hospital Address: Children's Hospital
                        {`\n\t\t\t\t`} 123 Hospital Ave.
                        {`\n\t\t\t\t`} Latham, NY, 12110{`\n`}
                        Wait Time: 65{`\n`}
                        Patient Line: 10{`\n`}
                    </Text>
                </View>
                <Text style={{fontSize: 18, fontWeight: "600"}}>Incident Decription</Text>
                <View style={[styles.textInputContainer, {marginTop: 15}]}>
                    <TextInput
                        placeholder="Incident Description"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={value => setInfo(value)}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeGeneral")}>
                    <Text
                        style={[
                            {color: 'white', fontWeight: '300', fontSize: 13},
                        ]}
                    >
                        CLAIM SPOT
                    </Text>
                </TouchableOpacity>
            </View> 
        </View>
    )
}

export default ClaimInfo

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'white',
    },
    titleContainer: {
        margin: 20,
        alignItems: 'flex-start',
        width: '80%',
      },
      title: {
        fontWeight: 'bold',
        fontSize: 23,
        color: '#000',
      },
      titleSubheader: {
        marginTop: 10,
        color: 'gray',
      },
      centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
      },
      textInputContainer: {
        width: '80%',
        marginTop: 15,
        // backgroundColor: "#ededed",
        borderRadius: 2,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
      },
      textInput: {
        height: 40,
        marginLeft: 10,
        width: '100%',
      },
      button: {
        width: 120,
        marginTop: 50,
        backgroundColor: '#ff0065',
        borderRadius: 50,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection:"row",
        padding: 5
    },
})
