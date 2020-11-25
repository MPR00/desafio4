import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, Image, FlatList, Button, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios'
import LazyImage from '../../components/LazyImage';
import { AsyncStorage } from 'react-native';

import options from '../../../assets/options.png';
import like from '../../../assets/like.png';
import comment from '../../../assets/comment.png';
import send from '../../../assets/send.png';
import save from '../../../assets/save.png';


import { Container, Post, Header, Avatar, Name, Description, Loading } from './styles';
import { withTheme } from 'styled-components';

export default function Feed() {
  const [error, setError] = useState('');
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [viewable, setViewable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [text, setText] = useState('')
  const [comentarios, setComentarios] = useState([])

  const MAX_LENGTH = 250;

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (pageNumber === total) return;
    if (loading) return;

    setLoading(true);
    //https://demo8350856.mockable.io/feed?page=${pageNumber}&limit=4
    //utilizar server.js no jsonserver
    //https://demo8350856.mockable.io/feed
    //utilizar o server2.js no www.mockapi.io
    axios
      .get(`https://demo8350856.mockable.io/feed?page=${pageNumber}&limit=4`)
      .then(response => {
        const totalItems = response.headers["x-total-count"]
        const data = response.data
        //console.log(data)
        setLoading(false)
        setTotal(Math.floor(totalItems / 4));
        setPage(pageNumber + 1);
        setFeed(shouldRefresh ? data : [...feed, ...data]);
      })
      .catch(err => {
        setError(err.message);
        setLoading(true)
      })
  }

  async function refreshList() {
    setRefreshing(true);

    await loadPage(1, true);

    setRefreshing(false);
  }

  const onGet = (id) => {
    try {

      const value = AsyncStorage.getItem(id);

      if (value !== null) {
        // We have data!!
        setComentarios(value)
      }
    } catch (error) {
      // Error saving data
    }
  }

  const onSave = async (id) => {
    try {
      await AsyncStorage.setItem(id, text);
      setComentarios([...comentarios, ...text])
    } catch (error) {
      // Error saving data
    }
  }



  useEffect(() => {
    loadPage()
  }, []);



  const renderItem = ({ item }) => {
    return (
      <Post style={styles.post}>
        <Header style={styles.postHeader}>
          <TouchableOpacity>
            <Avatar source={{ uri: item.profile.userPhoto }} />
          </TouchableOpacity>
          <Name style={styles.userName}>{item.profile.userName}</Name>
        </Header>

        <LazyImage
          aspectRatio={item.aspectRatio}
          shouldLoad={viewable.includes(item.id)}
          smallSource={{ uri: item.feedPhotoMini }}
          source={{ uri: item.feedPhoto }}
        />

        <View style={styles.footer}>
          <View style={styles.actions}>

            <View style={styles.leftActions}>
              <TouchableOpacity style={styles.action}>
                <Image
                  source={like}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.action}>
                <Image
                  source={comment}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  source={send}
                />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Image
                  source={save}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <TouchableOpacity>
              <Text style={styles.likes}>{item.likes} Likes</Text>
            </TouchableOpacity>
            <View style={styles.subtitle}>
              <TouchableOpacity>
                <Text style={styles.descName}>{item.profile.userName}</Text>
              </TouchableOpacity>
              <Text>{item.Subtitle}</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.comment}>Ver todos os comentários...</Text>
              </TouchableOpacity>
              <Text>{item.comment}</Text>
              <Text>{comentarios}</Text>
            </View>
          </View>

        </View>

        <View>
          <TextInput
            multiline={true}
            onChangeText={(text) => setText(text)}
            placeholder={"Adicionar um comentario..."}
            style={[styles.text]}
            maxLength={MAX_LENGTH}
            value={text}
          />


          <Button
            title="Publicar"
            onPress={() => onSave(String(item.id))}
            accessibilityLabel="Adicionar Comentário">
          </Button>
        </View>
      </Post>
    )
  }

  const handleViewableChanged = useCallback(({ changed }) => {
    setViewable(changed.map(({ item }) => item.id));
  }, []);

  return (
    <Container>
      <FlatList
        key="list"
        data={feed}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        ListFooterComponent={loading && <Loading />}
        onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 10,
        }}
        showsVerticalScrollIndicator={false}
        onRefresh={refreshList}
        refreshing={refreshing}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadPage()}
      />
    </Container>
  );
}

const styles = StyleSheet.create(
  {
    text: {
      fontSize: 18,
      lineHeight: 1,//rever
      color: "#333333",
      padding: 25,
      paddingTop: 15,
      // height:50,
      minHeight: 20,
      borderTopWidth: 1,
      borderWidth: 1,
      margin: 10,
      borderRadius: 16,
      borderColor: "rgb(0,0,0)"
    },

    post: {
      marginVertical: 15
    },

    postHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      alignItems: "center",
      backgroundColor: '#ffffff'
    },

    userName: {
      fontWeight: 'bold',
      marginRight: 260
    },

    place: {
      fontSize: 12,
      color: '#666',
    },

    footer: {
      paddingHorizontal: 15
    },

    actions: {
      paddingVertical: 15,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    action: {
      marginRight: 8
    },
    leftActions: {
      flexDirection: 'row',
    },
    likes: {
      fontWeight: 'bold',
      fontSize: 12
    },
    comment: {
      color: '#a7a7a7',
    },
    description: {
      color: '#000',
      lineHeight: 18
    },
    descName: {
      fontWeight: 'bold',
      paddingRight: 5
    },
    subtitle: {
      flexDirection: 'row',
      paddingVertical: 5
    }

  })
