
import Card from "./Card";
import { TouchableOpacity } from 'react-native-gesture-handler';

const TouchableCard = ({ onPress, title, tags, tagsList, desc, sourceImg }) => {
 
  const filteredTags = tagsList.filter((tag, index) => tags.includes(index));
 // console.log("Filtered tags: ", tagsList);
  const thumbnailUrl = `https://img.youtube.com/vi/${sourceImg}/hqdefault.jpg`;
  
  //const filteredTags = tagsList.filter((tag, index) => index === tags); // Filtra los tags por índice// Filtra los tags por ID
    return (
            //<TouchableOpacity style={styles.touchable}>
                <Card onPress={onPress} titulo={title} tags={filteredTags} descripcion={desc} imagenFuente={thumbnailUrl}></Card>
         //   </TouchableOpacity>
    );

 /* const thumbnailUrl = `https://img.youtube.com/vi/${sourceImg}/hqdefault.jpg`;

  const filteredTags = tagsList.filter((tag, index) => tags.includes(index));

  return (
    <TouchableOpacity onPress={() => onPress({ title, tags, desc, sourceImg })}>
      <Card titulo={title} tags={filteredTags} descripcion={desc} imagenFuente={thumbnailUrl}></Card>
    </TouchableOpacity>
  );
*/
};


export default TouchableCard;