import Card from "./Card";
import { TouchableOpacity } from 'react-native-gesture-handler';

const TouchableCard = ({ onPress, title, tags, tagsList, desc, sourceImg }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${sourceImg}/hqdefault.jpg`;

  const filteredTags = tagsList.filter((tag, index) => tags.includes(index));

  return (
    <TouchableOpacity onPress={() => onPress({ title, tags, desc, sourceImg })}>
      <Card titulo={title} tags={filteredTags} descripcion={desc} imagenFuente={thumbnailUrl}></Card>
    </TouchableOpacity>
  );
};


export default TouchableCard;