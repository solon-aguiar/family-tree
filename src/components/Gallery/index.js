import React from 'react';
import {
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import styles from './styles';
import ClickableAvatar from '../ClickableAvatar';

export default function Gallery(props) {
    const {width} = Dimensions.get('window');
    const photoWidth = width/4;

    const allPeople = Object.values(props.store.people);
    const people = props.query ? allPeople.filter((person) => person.name.toLowerCase().indexOf(props.query.toLowerCase()) !== -1) : allPeople;

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {people.map((person, index) =>
                <ClickableAvatar
                    key={index}
                    width={photoWidth}
                    height={1.3*photoWidth}
                    imageUrl={person.avatar.url}
                    style={styles.photo}
                    onClick={() => props.onClick(person.name)}
                 />
            )}
        </ScrollView>
    );
}
