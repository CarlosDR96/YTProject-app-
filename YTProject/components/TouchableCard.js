import Card from "./Card";
import { TouchableOpacity } from 'react-native-gesture-handler';

const TouchableCard = ({ onPress, title, tags, desc, sourceImg }) => {
    return (
            <TouchableOpacity onPress={onPress}>
                <Card titulo={title} tags={tags} descripcion={desc} imagenFuente={sourceImg}></Card>
            </TouchableOpacity>
    );
};


export default TouchableCard;