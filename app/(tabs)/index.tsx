import { useTheme } from "@emotion/react";
import { SafeAreaView, Text } from "react-native";

const HomePage = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <SafeAreaView>
      <Text
        style={{
          color: theme.colors.secondary,
        }}
      >
        Test
      </Text>
    </SafeAreaView>
  );
};
export default HomePage;
