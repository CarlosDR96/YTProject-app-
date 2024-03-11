import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const YoutubeVideo = ({ videoUrl }) => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          html: `
            <html>
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
              </head>
              <body style="margin:0;padding:0;">
                <iframe
                  src="${videoUrl}"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  style="width: 100%; height: 100%;"
                ></iframe>
              </body>
            </html>
          `,
        }}
        style={styles.webview}
        originWhitelist={['*']}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    aspectRatio: 16 / 9,
    overflow: 'hidden', // Oculta cualquier contenido que pueda salir del límite del contenedor
  },
  webview: {
    flex: 1,
  },
});

export default YoutubeVideo;
