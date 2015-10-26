var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image
} = React;

var deviceWidth = Dimensions.get('window').width;

class Player extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View>
            <Image
              style={styles.avatar}
              source={{uri: 'https://i1.sndcdn.com/artworks-000061103371-2wqlsw-large.jpg'}}
            />
          </View>
          <View style={styles.description}>
            <Text style={styles.username}>Jamie xx - Lound Places (feat. Romy)</Text>
            <Text style={styles.title}>[Eekkoo Edit]</Text>
          </View>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: 70,
    padding: 10,
    backgroundColor: '#3a3f41',
    borderTopWidth: 2,
    borderTopColor: '#f50'
  },
  card: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10
  },
  avatar: {
    padding: 10,
    width: 50,
    height: 50
  },
  description: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'column'
  },
  username: {
    fontSize: 12,
    paddingTop: 10,
    color: '#E2E2E2'
  },
  title: {
    flex: 1,
    flexWrap: 'wrap',
    color: '#fff',
    fontSize: 14
  },
});

export default Player
