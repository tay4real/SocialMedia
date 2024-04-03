import {View, Text, Image} from 'react-native';
import React from 'react';
import style from './style';
import PropTypes from 'prop-types';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookBookmark,
  faEllipsisH,
  faHeart,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';

const UserPost = props => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimensions={48}
          />
          <View style={style.userTextContainer}>
            <Text style={style.username}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={style.location}>{props.location}</Text>
            )}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} size={24} color={'#79869F'} />
      </View>
      <View style={style.postImage}>
        <Image source={props.image} />
      </View>
      <View style={{marginLeft: 10, flexDirection: 'row'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesomeIcon icon={faHeart} color={'#79869F'} />
          <Text style={{marginLeft: 3, color: '#79869F'}}>{props.likes}</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 27}}>
          <FontAwesomeIcon icon={faMessage} color={'#79869F'} />
          <Text style={{marginLeft: 3, color: '#79869F'}}>{props.likes}</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 27}}>
          <FontAwesomeIcon icon={faBookBookmark} color={'#79869F'} />
          <Text style={{marginLeft: 3, color: '#79869F'}}>{props.likes}</Text>
        </View>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
  profileImage: PropTypes.any.isRequired,
};
export default UserPost;
