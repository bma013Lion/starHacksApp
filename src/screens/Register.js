import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import SwitchSelector from "react-native-switch-selector";
import DateTimePicker from '@react-native-community/datetimepicker';

const Register = ({navigation}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [accoutType, setAccoutType] = useState(0);
    const [hospitalName, setHospitalName] = useState("");
    const [hospitalVerification, setHospitalVerification] = useState("");
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));

    const showPicker = () => {
        setIsPickerShow(true);
    };
    const closePicker = () => {
        setIsPickerShow(false);
    };
    const onChange = (event, value) => {
        setDate(value);
        setDateOfBirth(
          `${value.getMonth() + 1}/${value.getDate()}/${value.getFullYear()}`,
        );
        if (Platform.OS === 'android') {
          setIsPickerShow(false);
        }
    };
    const options = [
        { label: "Patient", value: 0},
        { label: "Hospital", value: 1 },
      ];
    const onChoose = (newValue) => {
        setAccoutType(newValue);
    };
     

    const register = () => {

    }


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
                    <Text style={styles.title}>Sign Up</Text>
                    <Text style={styles.titleSubheader}>
                        Create an account to get started
                    </Text>
                </View>
                <SwitchSelector
                    initial={0}
                    onPress={value => onChoose(value)}
                    textColor={"gray"} //'#7a44cf'
                    selectedColor={"white"}
                    buttonColor={"#ff0065"}
                    borderColor={"white"}
                    height={35}
                    borderRadius={50}
                    hasPadding
                    options={options}
                    testID="account-type-switch-selector"
                    accessibilityLabel="account-type-gender-switch-selector"
                    style={{width: "83%", borderWidth: 0, borderRadius: 4, borderColor:"lightgray"}}
                    backgroundColor={"#f5f5f5"}
                />
                {accoutType === 0 ? (
                    <View style={{width: '100%', alignItems: 'center'}}>
                        <View style={[styles.textInputContainer, {marginTop: 15}]}>
                            <TextInput
                                placeholder="First Name"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={value => setFirstName(value)}
                            />
                        </View>
                        <View style={[styles.textInputContainer, {marginTop: 15}]}>
                            <TextInput
                                placeholder="Last Name"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={value => setLastName(value)}
                            />
                        </View>
                    </View>
                    ) : (
                        <View style={{width: '100%', alignItems: 'center'}}>
                            <View style={[styles.textInputContainer, {marginTop: 15}]}>
                                <TextInput
                                placeholder="Hospital Name"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={value => setHospitalName(value)}
                                />
                            </View>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                placeholder="Verification Code"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={value => setHospitalVerification(value)}
                                />
                            </View>
                        </View>
                    )}
                    <View style={[styles.textInputContainer, {marginTop: 15}]}>
                        <TextInput
                            placeholder="Email"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={value => setEmail(value)}
                        />
                    </View>
                    <View style={[styles.textInputContainer, {marginTop: 15}]}>
                        <TextInput
                            placeholder="Password"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={value => setPassword(value)}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeGeneral")}>
                        <Text
                            style={[
                                {color: 'white', fontWeight: '300', fontSize: 13},
                            ]}
                        >
                            SIGN UP
                        </Text>
                        <AntDesign name="caretright" size={11} color="white" style={{ marginLeft: 5}}/>
                    </TouchableOpacity>
                </View> 
            </View>
    )
}

export default Register

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
      btnContainer: {
        padding: 10,
      },
      textInput: {
        height: 40,
        marginLeft: 10,
        width: '100%',
      },
      datePicker: {
        width: "100%",
        height: 90,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: 10,
        paddingHorizontal: 25,
        backgroundColor: 'white',
        marginTop: 10
      },
      pickedDate: {
        fontSize: 14,
        color: 'gray',
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
        marginLeft: "50%"
    },
})
