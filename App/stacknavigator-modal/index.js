import { Button, SafeAreaView, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Go to Modal"
        onPress={() => navigation.navigate("Modal")}
      />
    </SafeAreaView>
  );
};

const Details = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Details</Text>
      <Button
        title="Go to Modal"
        onPress={() => navigation.navigate("Modal")}
      />
    </SafeAreaView>
  );
};

const ModalScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Modal</Text>
      <Button title="Close Modal" onPress={() => navigation.goBack(null)} />
    </SafeAreaView>
  );
};

const MainAppStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home",
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      title: "Details",
    },
  },
});

const RootNavigator = StackNavigator(
  {
    MainApp: {
      screen: MainAppStack,
    },
    Modal: {
      screen: ModalScreen,
    },
  },
  {
    headerMode: "none",
    mode: "modal",
  }
);

export default RootNavigator;
