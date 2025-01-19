import { Tabs } from "expo-router";
import React from "react";
import { TabBar } from "../../components/TabBar";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
