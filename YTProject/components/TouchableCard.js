import Card from "./Card";
import { TouchableOpacity } from 'react-native-gesture-handler';

const TouchableCard = ({ onPress, title, tags, tagsList, desc, sourceImg }) => {
  
  const filteredTags = tagsList.filter((tag, index) => tags.includes(index));
  console.log("Filtered tags: ", filteredTags);
  
  //const filteredTags = tagsList.filter((tag, index) => index === tags); // Filtra los tags por índice// Filtra los tags por ID
    return (
            <TouchableOpacity onPress={onPress}>
                <Card titulo={title} tags={filteredTags} descripcion={desc} imagenFuente={sourceImg}></Card>
            </TouchableOpacity>
    );
};


export default TouchableCard;