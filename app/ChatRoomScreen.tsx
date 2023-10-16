import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Message from '../components/message/Messages';
import messageData from "../constants/Chats";
import MessageInput from '../components/messageInput/MessageInput';



export default function ChatRoomScreen() {
 const route = useRoute();
 console.warn(`Displaying route: ${route.params?.id}`)

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={messageData.messages} 
        renderItem={({item}) => <Message message={item}/>}
        inverted
      />
      <MessageInput/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
