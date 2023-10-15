import { FlatList, StyleSheet, Text, View } from 'react-native';
import Message from '../../components/message/Messages';
import messageData from "../../constants/Chats";
import MessageInput from '../../components/messageInput/MessageInput';


export default function ChatRoomScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={messageData.messages} 
        renderItem={({item}) => <Message message={item}/>}
        inverted
      />
      <MessageInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
