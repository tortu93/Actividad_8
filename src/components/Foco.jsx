import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native-web";

const Foco  = () => {
    const [isLit, setIsLit] = useState(false);
  
    return (
      <TouchableOpacity 
          onPress={() => {
              setIsLit(!isLit)
          }}
          style={styles.container}>
        <Image style={styles.img} source={isLit ? require("../img/focoOff.png") : require("../img/focoOn.png")} />
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      width: 244,
      height: 400,
    },
    img: {
      height: '100%'
    },
  });
  
  export { Foco };