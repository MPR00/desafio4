import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    KeyboardAvoidingView,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    Button,
    Animated,
    Keyboard
} from 'react-native';
// import likeVermelho from '../../../assets/likeVermelho.png';
import avatar1 from '../../../assets/avatar3.png';
import avatar2 from '../../../assets/avatar4.png';
import avatar3 from '../../../assets/avatar5.png';
export default function index({ navigation }) {

    const [liked, setLiked] = useState(false);

    return (
        <View style={styles.post}>
            <View style={styles.footer}>
                <ScrollView>

                    <View style={styles.commentLine}>
                    <View style={styles.commentCont}>
                            <TouchableOpacity >
                                <Image style={styles.commentPhoto} source={avatar1} />
                            </TouchableOpacity>
                            <Text style={styles.commentName}>Raimunda de Jesus</Text>
                            <Text>Curtiu sua foto</Text>
                        </View>
                        <TouchableOpacity 
                            onPress={()=>{
                            setLiked(!liked)
                            }}>
                         <Image
                                source={!liked
                                ? require("../Feed/images/heart.png")
                                : require("../Feed/images/heart-outline.png")
                            }
                            style={{height: 20, width: 20}}
                            resizeMode="cover"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.commentLine}>
                    <View style={styles.commentCont}>
                            <TouchableOpacity >
                                <Image style={styles.commentPhoto} source={avatar2} />
                            </TouchableOpacity>
                            <Text style={styles.commentName}>Jurubeba Rios</Text>
                            <Text>Curtiu sua foto</Text>
                        </View>
                        <TouchableOpacity 
                            onPress={()=>{
                            setLiked(!liked)
                            }}>
                         <Image
                                source={!liked
                                ? require("../Feed/images/heart.png")
                                : require("../Feed/images/heart-outline.png")
                            }
                            style={{height: 20, width: 20}}
                            resizeMode="cover"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.commentLine}>
                    <View style={styles.commentCont}>
                            <TouchableOpacity >
                                <Image style={styles.commentPhoto} source={avatar3} />
                            </TouchableOpacity>
                            <Text style={styles.commentName}>Renata Freitas</Text>
                            <Text>Curtiu sua foto</Text>
                        </View>
                        <TouchableOpacity 
                            onPress={()=>{
                            setLiked(!liked)
                            }}>
                         <Image
                                source={!liked
                                ? require("../Feed/images/heart.png")
                                : require("../Feed/images/heart-outline.png")
                            }
                            style={{height: 20, width: 20}}
                            resizeMode="cover"
                            />
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>

    
        </View>
    );
}

const styles = StyleSheet.create(
    {
        post: {
            flex: 1,
            backgroundColor: '#fff',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        footer: {
            paddingHorizontal: 5,
            paddingBottom: 10,
        },
        commentLine: {
            marginTop: 5,
            marginBottom: 5,
            paddingBottom: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#a7a7a7',
            alignItems: "center",
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        commentPhoto: {
            width: 20,
            height: 20,
            borderRadius: 16,
            marginRight: 10
        },
        commentName: {
            fontSize: 15,
            fontWeight: 'bold',
            paddingRight: 5,
        },
        commentSubmit: {
            paddingTop: 20,
            flexDirection: 'row',
            height: 70,
            justifyContent: 'center',
        },
        commentCont: {
            alignItems: "center",
            flexDirection: 'row',
            justifyContent: 'flex-start',
        },
        textSubmit: {
            width: '80%',
            color: '#000',
            fontSize: 15,
            borderTopWidth: 1,
            borderTopColor: '#a7a7a7',
        },
        textButtonSubmit: {
            fontSize: 15,
            color: '#35AAFF',
            paddingLeft: 5,
            paddingTop: 12,
            borderTopWidth: 1,
            borderTopColor: '#a7a7a7',
        },

    }
)
