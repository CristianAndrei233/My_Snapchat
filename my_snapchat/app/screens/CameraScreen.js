import React from "react";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
import AppIcon from "../components/appIcon/AppIcon";
import { useEffect, useRef } from "react";

const CameraScreen = ({navigation}) => {
  const [allowedCamera, setAllowedCamera] = useState(false);
  const [typeCamera, setTypeCamera] = useState("back");
  const [flashMode, setFlashMode] = useState("off");
  const [imagePreview, setImagePreview] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const changeFlashMode = () => {
    if (flashMode == "off") {
      setFlashMode("on");
    } else {
      setFlashMode("off");
    }
  };

  const changeCameraType = () => {
    if (typeCamera == "front") {
      setTypeCamera("back");
    } else if (typeCamera == "back") {
      setTypeCamera("front");
    } else {
      setTypeCamera("front");
    }
  };

  useEffect(() => {
    allowPermission();
  }, []);

  const allowPermission = async () => {
    try {
      const camera = await Permissions.askAsync(Permissions.CAMERA);
      if (!camera.granted) {
        return Permissions.askAsync(Permissions.CAMERA);
      }
      setAllowedCamera(true);
    } catch (error) {
      console.log("error loading the camera");
    }
  };

  const camRef = useRef();

  const takePicture = async () => {
    if (!camRef) {
      return;
    }
    try {
      const pic = await camRef.current.takePictureAsync();
      console.log(pic);
      setImagePreview(pic.uri);
      setIsOpen(true);
    } catch (error) {
      console.log("error taking picture");
    }
  };

  const closeImagePreview = () => {
    setImagePreview(null);
    setIsOpen(false);
  };

  if (!allowedCamera) {
    return (
      <View style={styles.notAllowed}>
        <TouchableOpacity style={styles.btn} onPress={allowPermission}>
          <Text style={styles.btnText}>Allow camera Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (imagePreview) {
    return (
      <Modal animationType="fade" visible={isOpen}>
        <Image
          source={{ uri: imagePreview }}
          style={{ height: "100%", width: "100%" }}
        />
        <View style={styles.actionBottom}>
          <AppIcon
            IonName="send-outline"
            size={25}
            color="#eee"
            style={styles.sendBtn}
          />
        </View>
        <View style={styles.closeBtn}>
          <AppIcon
            AntName="closecircleo"
            size={25}
            color="#eee"
            style={styles.sendBtn}
            onPress={closeImagePreview}
          />
        </View>
      </Modal>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={typeCamera}
        flashMode={flashMode}
        ref={camRef}
      >
        <TouchableOpacity
          style={styles.captureBtn}
          onPress={takePicture}
        ></TouchableOpacity>
        <View style={styles.header}>
          <AppIcon
            style={styles.headerIcons}
            AntName="user"
            color="#eee"
            size={24}
            onPress={() => navigation.navigate("profile")}
          />
          <AppIcon
            style={styles.headerIcons}
            IonName="settings-outline"
            color="#eee"
            size={24}
            onPress={() => navigation.navigate("settings")}
          />
        </View>
        <View style={styles.sideItem}>
          <AppIcon
            style={styles.sideIcons}
            IonName="camera-outline"
            color="#eee"
            size={24}
            onPress={changeCameraType}
          />
          <AppIcon
            style={styles.sideIcons}
            IonName="flash-outline"
            color="#eee"
            size={24}
            onPress={changeFlashMode}
          />
          <AppIcon
            style={styles.sideIcons}
            IonName="ios-musical-notes-outline"
            color="#eee"
            size={24}
          />
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  notAllowed: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    padding: 10,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    color: "#eee",
    fontSize: 18,
    fontWeight: "bold",
  },
  captureBtn: {
    position: "absolute",
    bottom: 20,
    width: 80,
    height: 80,
    borderRadius: 100,
    borderColor: "#eee",
    borderWidth: 6,
    alignSelf: "center",
  },
  header: {
    position: "absolute",
    top: 40,
    justifyContent: "space-between",
    padding: 10,
    flexDirection: "row",
    width: "100%",
  },
  headerIcons: {
    width: 50,
    heigth: 50,
    backgroundColor: "rgba(52, 52, 52, 0.2)",
  },
  sideItem: {
    position: "absolute",
    top: 110,
    right: 0,
    padding: 10,
  },
  sideIcons: {
    width: 45,
    heigth: 45,
    marginVertical: 10,
    backgroundColor: "rgba(52, 52, 52, 0.2)",
  },
  actionBottom: {
    position: "absolute",
    bottom: 20,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    left: 330,
    width: "100%",
  },
  sendBtn: {
    backgroundColor: "#000",
  },
  closeBtn: {
    position: "absolute",
    padding: 10,
    top: 40,
  },
});

export default CameraScreen;
