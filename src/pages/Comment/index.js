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
// import like from '../../../assets/like.png';
import avatar1 from '../../../assets/avatar1.png';
import avatar2 from '../../../assets/avatar2.png';
import avatar3 from '../../../assets/avatar3.png';
import avatar4 from '../../../assets/avatar4.png';
import avatar5 from '../../../assets/avatar5.png';
import avatar6 from '../../../assets/avatar6.png';
import avatar7 from '../../../assets/avatar7.png';
import avatar8 from '../../../assets/avatar8.png';
import avatar9 from '../../../assets/avatar9.png';

export default function index ({ navigation }) {

    const [liked, setLiked] = useState(false);
    const [text, setText] = useState('')
    const [comentarios, setComentarios] = useState([])

    const onSave = async (id) => {
        try {
            await AsyncStorage.setItem(id, text);
            setComentarios([...comentarios, ...text])
        } catch (error) {
            // Error saving data
        }
    }
    
    return (
        <View style={styles.post}>
            <View style={styles.footer}>
                <ScrollView>

                    <View style={styles.commentLine}>
                    <View style={styles.commentCont}>
                            <TouchableOpacity>
                                <Image style={styles.commentPhoto} source={avatar1} />
                            </TouchableOpacity>
                            <Text style={styles.commentName}>Paulo Soares</Text>
                            <Text>Que amiga lida q eu tenho!</Text>
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
                            <TouchableOpacity>
                                <Image style={styles.commentPhoto} source={avatar2} />
                            </TouchableOpacity>
                            <Text style={styles.commentName}>José Santana</Text>
                            <Text>Sou o melhor fotógrafo!</Text>
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
                            <TouchableOpacity>
                                <Image style={styles.commentPhoto} source={avatar3} />
                            </TouchableOpacity>
                            <Text style={styles.commentName}>Fernanda Paiva</Text>
                            <Text>Voa voa voa voa voa voa...</Text>
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
                            <TouchableOpacity>
                                <Image style={styles.commentPhoto} source={avatar4} />
                            </TouchableOpacity>
                            <Text style={styles.commentName}>Jaqueline Neves</Text>
                            <Text>uuuuuuaaaaaaauuuuuuu!</Text>
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
                            <TouchableOpacity>
                                <Image style={styles.commentPhoto} source={avatar5} />
                            </TouchableOpacity>
                            <Text style={styles.commentName}>Gabriela Silva</Text>
                            <Text>Horrivel, não gostei...</Text>
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
                            <TouchableOpacity>
                                <Image style={styles.commentPhoto} source={avatar6} />
                            </TouchableOpacity>
                            <Text style={styles.commentName}>Raimunda de Jesus</Text>
                            <Text>Fiquei encatada demais...</Text>
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
                            <TouchableOpacity>
                                <Image style={styles.commentPhoto} source={avatar7} />
                            </TouchableOpacity>
                            <Text style={styles.commentName}>Jurubeba Rios</Text>
                            <Text>Eiiitaaa q perfeição!!!!</Text>
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
                            <TouchableOpacity>
                                <Image style={styles.commentPhoto} source={avatar8} />
                            </TouchableOpacity>
                            <Text style={styles.commentName}>Renato Freitas</Text>
                            <Text>ai ai, assim vc me mata!</Text>
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
                            <TouchableOpacity>
                                <Image style={styles.commentPhoto} source={avatar9} />
                            </TouchableOpacity>
                            <Text style={styles.commentName}>Gustavo Petrovk</Text>
                            <Text>Achei mais ou menos...</Text>
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

            <View style={styles.commentSubmit}>

            <View style={styles.submitImage}>
                    <TouchableOpacity>
                        <Image style={styles.subPhoto} source={avatar2} />
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={styles.textSubmit}
                    value={text}
                    multiline={true}
                    onChangeText={(text) => setText(text)}
                    placeholder={"Adicionar um comentario..."}
                />

                <TouchableOpacity onPress={() => onSave(String(item.id))}>
                    <Text style={styles.textButtonSubmit}>
                        Publicar
                </Text>
                </TouchableOpacity>
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
        commentCont: {
            alignItems: "center",
            flexDirection: 'row',
            justifyContent: 'flex-start',
        },
        commentSubmit: {
            paddingTop: 20,
            flexDirection: 'row',
            height: 70,
            justifyContent: 'center',
        },
        textSubmit: {
            width: '75%',
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
        submitImage: {
            lineHeight: 40,
            borderTopWidth: 1,
            borderTopColor: '#a7a7a7',
            paddingTop: 15,
        },
        subPhoto:{
            width: 20,
            height: 20,
            borderRadius: 16,
            marginRight: 10
        }

    }
)
