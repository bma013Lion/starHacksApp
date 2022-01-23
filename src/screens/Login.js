import React, {useState} from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Feather, AntDesign } from '@expo/vector-icons';
import { Button, Input, Image } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';
import {auth} from '../../firebase'

const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secureTextEntry, setSecureTextEntry] = useState(false);

    const signIn = () => {
    
    }
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light" />
            <Animatable.Image 
                source={require('../assets/ERExpressLogo.png')}
                style={styles.image}
                animation="fadeInDown"
            />
            <Animatable.View animation="fadeInUpBig" style={styles.loginView}>
                <View style={[styles.titleContainer]}>
                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.titleSubheader}>Please sign in to continue</Text>
                </View>
                <View style={[styles.textInputContainer, {marginTop: 15}]}>
                    <TextInput
                        placeholder="Email"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={[styles.textInputContainer, {flexDirection: 'row'}]}>
                    <TextInput
                        placeholder="Password"
                        style={styles.textInput}
                        autoCapitalize="none"
                        secureTextEntry={secureTextEntry ? true : false}
                        onChangeText={(text) => setPassword(text)}
                    />
                <TouchableOpacity
                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                    style={{padding: 10, right: 50}}>
                    {secureTextEntry ? (
                    <Feather name="eye-off" color="grey" size={20} />
                    ) : (
                    <Feather name="eye" color="grey" size={20} />
                    )}
                </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeGeneral")}>
                    <Text
                    style={[
                        {color: 'white', fontWeight: '300', fontSize: 13},
                    ]}>
                    LOGIN
                    </Text>
                    <AntDesign name="caretright" size={11} color="white" style={{ marginLeft: 5}}/>
                </TouchableOpacity>
                <View style={{bottom: -100, alignItems: 'center', width: '100%'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{color: '#000'}}>Don't have an account?</Text>
                        <TouchableOpacity style={{marginLeft: 5}}>
                            <Text
                                onPress={() => navigation.navigate('Register')}
                                style={{color: '#ff0065'}}
                            >
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{color: '#000'}}>or</Text>
                        <TouchableOpacity style={{marginLeft: 5}}>
                            <Text 
                                onPress={() => navigation.navigate('HomeHospital')} 
                                style={{color: 'gray'}}
                            >
                                continue as guest
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animatable.View>
            
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#ff0065',
        alignItems: 'center',
        height: "100%",
        // justifyContent: 'center',
    },
    image: {
        width: 250, 
        height: 75,
        marginTop: 100,
        marginBottom: 20
    },
    titleContainer: {
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
      textInputContainer: {
        width: '85%',
        margin: 5,
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
        width: 100,
        marginTop: 50,
        backgroundColor: '#ff0065',
        borderRadius: 50,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection:"row",
        marginLeft: "60%"
    },
    loginView:{
        paddingTop: 50,
        width: "100%", 
        alignItems: 'center', 
        backgroundColor:"white", 
        flex: 3, 
        borderRadius: 30
    }
})
