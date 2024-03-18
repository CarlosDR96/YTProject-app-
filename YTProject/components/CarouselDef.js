import React, { useState } from "react";
import { View, Modal, Image, TouchableWithoutFeedback } from "react-native";
import CustomCarousel from "./CustomCarousel";

function CarouselDef({ fotos }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImagePress = (index) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const images =
    fotos && fotos.length > 0 ? fotos.map((url) => ({ imageUrl: url })) : [];

  return (
    <View style={{ position: 'relative', height: 240 }}>
      <CustomCarousel images={images} onImagePress={handleImagePress} />
      <Modal transparent animationType="slide" visible={modalVisible}>
        <View style={{ flex: 1 }}>
          <TouchableWithoutFeedback onPress={closeModal}>
            <Image
              source={{ uri: images[selectedImageIndex].imageUrl }}
              style={{ flex: 1 }}
            />
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </View>
  );
}

export default CarouselDef;
