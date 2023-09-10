import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import ReactNativeModal from "react-native-modal";
import { useEffect, useState } from "react";

function Account() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  function accountDetailsHandler() {
    navigation.navigate("login");
    toggleModal();
  }

  function toggleModal() {
    setModalVisible(!isModalVisible);
  }
  useEffect(() => {
    if (isModalVisible) {
      // Set a timer to close the modal after 5 seconds
      const timer = setTimeout(() => {
        accountDetailsHandler();
      }, 3000);

      // Clear the timer when the modal is unmounted or closed manually
      return () => clearTimeout(timer);
    }
  }, [isModalVisible]);

  return (
    <View style={styles.container}>
      <View style={styles.accountInfoContainer}>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={require("../../assets/images/2x2.jpeg")}
          />
        </View>
        <Text style={styles.labelHeader}>Account Information</Text>
        <Text style={styles.label}>Email: antonraphaelcaballes@gmail.com</Text>
        <Text style={styles.label}>Account Number: 123123213</Text>
        <View
          style={{
            padding: 10,
            backgroundColor: "#00AE29",
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            Identification: Verified
          </Text>
        </View>
      </View>
      <Pressable style={styles.signOutButton} onPress={toggleModal}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </Pressable>
      <ReactNativeModal
        isVisible={isModalVisible}
        onBackButtonPress={toggleModal}
        backdropColor="#00000080"
        backdropOpacity={0.8}
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Logging out...</Text>
        </View>
      </ReactNativeModal>
    </View>
  );
}

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#0054A5",
  },
  accountInfoContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    width: "100%",
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    marginBottom: 10,
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  labelHeader: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  signOutButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  signOutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  // modal
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#e74c3c",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
