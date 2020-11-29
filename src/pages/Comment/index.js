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
import like from '../../../assets/like.png';

export default function index ({ navigation }) {
    
    return (
        <View style={styles.post}>
            <View style={styles.footer}>
                <ScrollView>

                    <View style={styles.commentLine}>
                        <Text style={styles.commentPhoto}>Foto</Text>
                        <Text style={styles.commentName}>Nome</Text>
                        <Text style={styles.commentCont}>conteudo</Text>
                        <TouchableOpacity>
                            <Image source={like} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.commentLine}>
                        <Text style={styles.commentPhoto}>Foto</Text>
                        <Text style={styles.commentName}>Nome</Text>
                        <Text style={styles.commentCont}>conteudo</Text>
                        <TouchableOpacity>
                            <Image source={like} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.commentLine}>
                        <Text style={styles.commentPhoto}>Foto</Text>
                        <Text style={styles.commentName}>Nome</Text>
                        <Text style={styles.commentCont}>Conteudo</Text>
                        <TouchableOpacity>
                            <Image source={like} />
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>

            <View style={styles.commentSubmit}>
                <TextInput
                    style={styles.textSubmit}

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
        commentSubmit: {
            paddingTop: 20,
            flexDirection: 'row',
            height: 70,
            justifyContent: 'center',
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
