import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  SafeAreaView,
} from "react-native";
import validationCard from "./validationCard";
import { LinearGradient } from "expo-linear-gradient";
import Chip from "./assets/Chip";
import ElonkyGray from "./ElonkyGray";
import { MaskedTextInput } from "react-native-mask-text";

const { height, width, fontScale } = Dimensions.get("window");

export default function App() {
  let animatedValue = new Animated.Value(0);
  let currentValue = 0;
  const isLoad = useRef(false);
  const [text, onChangeText] = useState("Useless Text");
  const [contentType, setContentType]: any = useState("");
  const [error, setError]: any = useState({});

  const [unMaskedValue, setUnmaskedValue]: any = useState({
    cardHolderName: {
      value: "",
      rawValue: "",
      ref: "",
      //mask: "",
      style: "cardHolderName",
      keyboardType: "default",
      placeHolder: "Name and Surname",
    },
    cardNumber: {
      value: "",
      rawValue: "",
      ref: "",
      //mask: "",
      style: "cardNumber",
      keyboardType: "numeric",
      placeHolder: "Card Number",
    },
    expTime: {
      value: "",
      rawValue: "",
      ref: "",
      mask: "99/99",
      style: "expTime",
      keyboardType: "numeric",
      placeHolder: "MM/YY",
    },
    cvc: {
      value: "",
      rawValue: "",
      ref: "",
      mask: "999",
      style: "cvc",
      keyboardType: "numeric",
      placeHolder: "Cvc",
    },
  });

  const handleChangeInput = (name: string, value: string, rawValue: string) => {
    console.log("rawValue: ", rawValue);
    console.log("value: ", value);

    setUnmaskedValue((prev: any) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        rawValue,
      },
    }));
  };

  const [page, setPage] = useState(true);

  useEffect(() => {
    //setContentType(page ? 'flex-start' : 'center')
    flipImageAnimation();
  }, [page]);
  animatedValue.addListener(({ value }) => {
    currentValue = value;
    // setPage (value >= 180);
  });

  const flipImageAnimation = () => {
    Animated.spring(animatedValue, {
      toValue: 180,
      tension: 10,
      friction: 80,
      useNativeDriver: false,
    }).start();
  };

  const setInterpolate = animatedValue.interpolate({
    inputRange: [0, 90, 180],
    outputRange: ["0deg", "90deg", "0deg"],
  });
  const rotateYAnimatedStyle = {
    transform: [{ rotateY: setInterpolate }],
  };

  useEffect(() => {
    const validCard = validationCard.checkCreditCard(
      unMaskedValue.cardNumber.rawValue
    );
    console.log("validCard: ", validCard);
    setContentType(validCard.type);
    if (!unMaskedValue.cardNumber.rawValue || validCard.success)
      setError((e: any) => {
        delete e.cardNumber;
        return e;
      });
    else if (!validCard.success) {
      setError((e: any) => ({
        ...e,
        cardNumber: validCard.message,
      }));
    }
  }, [unMaskedValue.cardNumber.rawValue]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Animated.View style={[rotateYAnimatedStyle]}>
          <TouchableOpacity onPress={() => setPage((p) => !p)}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              // Background Linear Gradient
              colors={["#000000", "#434343"]}
              style={{
                // width: width * 0.86,
                // height: height * 0.27,
                //borderWidth: 1,
                borderRadius: 5,
                //padding: width * 0.05,
              }}
            >
              <ImageBackground
                source={require("./back4.png")}
                imageStyle={{ opacity: 0.3 }}
                resizeMode="cover"
              >
                <View
                  style={{
                    width: width * 0.86,
                    height: height * 0.26,
                    //borderWidth: 1,
                    //borderRadius:5,
                    padding: width * 0.05,
                    justifyContent: !page ? "center" : undefined,
                  }}
                >
                  {page ? (
                    <>
                      <View
                        style={{
                          width: width * 0.35,
                          height: height * 0.035,
                          //borderWidth: 1,
                          marginVertical: width * 0.02,
                        }}
                      >
                        <Text
                          style={{
                            color: "#E8E8E8",
                            fontSize: fontScale * 24,
                            fontWeight: "700",
                          }}
                        >
                          <ElonkyGray />
                        </Text>
                      </View>
                      <View
                        style={{
                          width: width * 0.1,
                          height: width * 0.1,
                          //borderWidth: 1,
                          justifyContent: "center",
                          alignItems: "center",
                          paddingHorizontal: 40,
                        }}
                      >
                        <Chip width={width * 0.23} height={width * 0.23} />
                      </View>
                      <View
                        style={{
                          width: width * 0.76,
                          height: height * 0.035,
                          //borderWidth: 1,
                          marginVertical: width * 0.02,
                          justifyContent: "center",
                          //alignItems:'center'
                        }}
                      >
                        <Text
                          style={{
                            color: "#E8E8E8",
                            fontSize: fontScale * 24,
                            fontWeight: "700",
                          }}
                        >
                          {unMaskedValue.cardNumber.rawValue.slice(0, 4)}{" "}
                          {unMaskedValue.cardNumber.rawValue.slice(4, 8)}{" "}
                          {unMaskedValue.cardNumber.rawValue.slice(8, 12)}{" "}
                          {unMaskedValue.cardNumber.rawValue.slice(12, 16)}{" "}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: width * 0.6,
                          // height: height * 0.03,
                          // borderWidth: 1,
                          // marginVertical: width * 0.02,
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: "#E8E8E8",
                            fontSize: fontScale * 14,
                            fontWeight: "700",
                          }}
                        >
                          {" "}
                          {unMaskedValue.cardHolderName.rawValue.toUpperCase()}{" "}
                        </Text>
                      </View>
                      <View
                        style={{
                          justifyContent: "center",
                          flexDirection: "row",
                        }}
                      >
                        <View
                          style={{
                            width: width * 0.2,
                            height: height * 0.03,
                            // borderWidth: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            marginVertical: width * 0.02,
                          }}
                        >
                          <Text
                            style={{
                              color: "#E8E8E8",
                              fontSize: fontScale * 18,
                              fontWeight: "700",
                            }}
                          >
                            {" "}
                            {unMaskedValue.expTime.rawValue.slice(0, 2)}/
                            {unMaskedValue.expTime.rawValue.slice(2, 4)}{" "}
                          </Text>
                        </View>
                      </View>

                      <View
                        style={{
                          justifyContent: "flex-end",
                          //borderWidth: 1,
                          width: width * 0.2,
                          height: width * 0.1,
                          position: "absolute",
                          bottom: 10,
                          right: 10,
                        }}
                      >
                        {contentType && (
                          <Image
                            source={{ uri: contentType.url }}
                            style={{ width: width * 0.2, height: width * 0.15 }}
                            resizeMode="contain"
                          />
                        )}
                      </View>
                    </>
                  ) : (
                    <>
                      <View
                        style={{
                          width: width * 0.76,
                          height: height * 0.06,
                          //borderWidth: 1,
                          marginVertical: width * 0.02,
                          backgroundColor: "#c1c1c1",
                          justifyContent: "center",
                        }}
                      >
                        <View
                          style={{
                            width: width * 0.1,
                            height: width * 0.08,
                            position: "absolute",
                            right: 10,
                            backgroundColor: "white",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: "700",
                              fontSize: fontScale * 16,
                            }}
                          >
                            {unMaskedValue.cvc.rawValue}
                          </Text>
                        </View>
                      </View>
                    </>
                  )}
                </View>
              </ImageBackground>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
        <View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {Object.keys(unMaskedValue).map(
              (valueKey: string, index: number) => (
                <View key={index}>
                
                    <MaskedTextInput
                      mask={unMaskedValue[valueKey].mask}
                      onChangeText={(value, rawValue) => {
                        handleChangeInput(valueKey, value, rawValue);
                      }}
                      style={styles[valueKey]}
                      keyboardType={unMaskedValue[valueKey].keyboardType}
                      placeholder={unMaskedValue[valueKey].placeHolder}
                      onFocus={() =>
                        unMaskedValue[valueKey].style === "cvc"
                          ? setPage(false)
                          : setPage(true)
                      }
                      onBlur={() =>
                        unMaskedValue[valueKey].style === "cvc" && setPage(true)
                      }
                      autoComplete="off"
                    />
                  

                  {/* <TextInput
                  keyboardType={
                    valueKey == "cardHolderName" ? "twitter" : "decimal-pad"
                  }
                  placeholder={valueKey}
                  style={styles[valueKey]}
                  //autoFocus={true}
                  onChangeText={(value) => handleChangeInput(valueKey, value)}
                  //value={values[valueKey]}
                  onFocus={() =>
                    valueKey === "cvc" ? setPage(false) : setPage(true)
                  }
                  //maxLength={5}
                  autoComplete="cc-csc"
                  onBlur={() => valueKey === "cvc" && setPage(true)}
                /> */}

                  {error[valueKey] && (
                    <Text style={{ color: "red" }}> {error[valueKey]} </Text>
                  )}
                </View>
              )
            )}
          </View>
        </View>

        <Button title="asdas" />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardHolderName: {
    width: width * 0.76,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderColor: "#c1c1c1",
    padding: 10,
  },
  cardNumber: {
    width: width * 0.76,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderColor: "#c1c1c1",

    padding: 10,
  },
  cardNumberErr: {
    width: width * 0.76,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "red",
    padding: 10,
  },
  expTime: {
    width: width * 0.35,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderColor: "#c1c1c1",

    padding: 10,
  },
  cvc: {
    width: width * 0.35,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderColor: "#c1c1c1",
    padding: 10,
  },
});
