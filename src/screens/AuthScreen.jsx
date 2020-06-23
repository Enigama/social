import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import background from "./auth-background.png";
import { EvilIcons } from "@expo/vector-icons";

const AuthScreen = () => {
  return (
    <View style={style.wrapper}>
      <ImageBackground source={background} style={style.image}>
        <View style={style.block}>
          <Image
            source={require("./auth-pic.png")}
            style={style.authPic}
          ></Image>
          <TouchableOpacity style={style.btnSocial}>
            <EvilIcons name="sc-facebook" size={24} color="white"></EvilIcons>
            <Text style={style.socialText}>Login width facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.btn}>
            <Text style={style.btnText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.btn}>
            <Text style={style.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  authPic: {
    width: 268,
    height: 270,
    marginBottom: 68,
  },
  block: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnSocial: {
    flexDirection: "row",
    justifyContent: "center",
    width: 255,
    marginBottom: 16,
    paddingVertical: 14,
    backgroundColor: "rgb(55, 88, 153)",
    borderRadius: 20,
  },
  socialText: {
    color: "#fff",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    width: 255,
    marginBottom: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 20,
  },
  btnText: {
    color: "#fff",
  },
});
export default AuthScreen;
