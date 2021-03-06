import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import Icon, {ICONS} from '@ciscospark/react-component-icon';
import {Image, Text, View} from 'react-native';

// import styles from './styles.css';

const propTypes = {
  baseColor: PropTypes.string,
  image: PropTypes.string,
  isSelfAvatar: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.number.isRequired
};

const defaultProps = {
  baseColor: '',
  image: '',
  isSelfAvatar: false,
  name: ''
};

const rnStyles = {
  avatar: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarLetter: {
    fontSize: 14,
    fontWeight: '300',
    color: '#fff',
    textAlign: 'center'
  }
};

function Avatar({
  baseColor,
  name,
  image,
  isSelfAvatar,
  size
}) {
  let avatarContents;
  const backgroundStyle = {};

  const letter = name ? name.replace(/[^0-9a-z]/gi, '').substr(0, 1).toUpperCase() : undefined;

  if (isSelfAvatar) {
    /* Not easily supported with React-native */
    // avatarContents = (
    //   <span className={classNames('ciscospark-avatar-self', styles.avatarSelf)}>
    //     <Icon color="#04c9ef" type={ICONS.ICON_TYPE_MESSAGE} />
    //   </span>
    // );
  }
  else if (image) {
    avatarContents = (
      <Image source={{uri: image}} style={{borderRadius: size / 2, height: size, width: size}} />
    );
  }
  else if (baseColor) {
    backgroundStyle.backgroundColor = baseColor;
    avatarContents = <Text style={rnStyles.avatarLetter}>{letter}</Text>;
  }
  else if (name) {
    backgroundStyle.backgroundColor = '#7d7e7f';
    rnStyles.avatarLetter.fontSize = size / 3;
    avatarContents = (
      <Text style={rnStyles.avatarLetter}>{letter}</Text>
    );
  }

  return (
    <View className={classNames('ciscospark-avatar')} style={[rnStyles.avatar, backgroundStyle, {height: size, width: size, borderRadius: size / 2}]}>
      {avatarContents}
    </View>
  );
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
