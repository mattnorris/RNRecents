import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import SpacesList from './webex/SpacesList';

export default class App extends React.Component {
  spacesListSpaces = [
    {
      activityText: 'I\'m a direct space!',
      avatarUrl: "https://1efa7a94ed216783e352-c62266528714497a17239ececf39e9e2.ssl.cf1.rackcdn.com/V1~aebdece11a795253ab6dd74cbcb3a113~WNPdL2bTRpqVQfRKYrJuKA==~110",
      id: "direct-space-id",
      lastActivityTime: "Yesterday",
      name: "Direct Space",
      type: "direct"
    },
    {
      activityText: 'Hey there!',
      callStartTime: Date.now(),
      id: 'jane-doe-space',
      lastActivityTime: '9:05 PM',
      latestActivity: {
        actorName: 'Jane Doe',
        type: 'post'
      },
      isUnread: true,
      name: 'Webex User',
      teamColor: 'blue',
      teamName: 'Best Team'
    },
    {
      activityText: 'Hey there!',
      callStartTime: Date.now(),
      id: 'red-team-group-space',
      lastActivityTime: '9:05 PM',
      latestActivity: {
        actorName: 'Jane Doe',
        type: 'post'
      },
      isUnread: true,
      name: 'Red Team Group Space',
      teamColor: 'red',
      teamName: 'Red Team',
      type: 'group'
    }
  ];


  render() {
    return (
      <View style={styles.container}>
        <SpacesList
          spaces={this.spacesListSpaces}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
