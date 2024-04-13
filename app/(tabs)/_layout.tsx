import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import {Dimensions, Pressable, View} from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import {useAppTheme} from "@/app/_layout";
const DimensionsWindowWidth = Dimensions.get("window").width;

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const {
        colors: { background,text,primary},
    } = useAppTheme();
  const colorScheme = useColorScheme();

  return (
    <Tabs
        // tabBar={(props) => (
        //   <View
        //       style={{
        //         flexDirection: 'row',
        //         backgroundColor: Colors[colorScheme ?? 'light'].background,
        //         borderTopColor: Colors[colorScheme ?? 'light'].tint,
        //         borderTopWidth: 1,
        //       }}>
        //     {props.
        //     </View>
        // )
        //
        // }
      screenOptions={{
        tabBarActiveTintColor: primary,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
          tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "bold",
              marginBottom: 10,
          },
          tabBarStyle: {
              height: 70,
              borderWidth: 1,
              borderRadius: 50,
              borderColor: primary,
              backgroundColor: background,
              width: "80%",
              marginRight: "auto",
              marginLeft: "auto",
              marginBottom: 40,
              position: "absolute",
              left: DimensionsWindowWidth/2-160,
              right: 0,
          },

        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
