// Details Screen
import { View, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const About = ({route, navigation}) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={[styles.text, { fontSize: 30 }]}>This is the About Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text : {
        fontSize: 22,
        color: '#333',  // Dark text for contrast
    }
});

export default About