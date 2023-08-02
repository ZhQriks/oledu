import { BlurView } from 'expo-blur';
import { Tabs, usePathname } from 'expo-router';
import { Educare, Home, Profile } from 'iconsax-react-native';

import { NavigationBar } from '@/components/tab-bar';

export default function TabsLayout() {
  const path = usePathname();
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          shadowOpacity: 0,
          elevation: 0,
        },
      }}
      // @ts-ignore
      tabBar={(props: any): any => {
        if (
          !path.includes('chats/') &&
          !path.includes('home/') &&
          !path.includes('create-post')
        ) {
          return (
            <BlurView
              style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
              className="flex justify-center"
              intensity={40}
            >
              <NavigationBar {...props} />
            </BlurView>
          );
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          href: '/home',
          tabBarLabel: 'Main',
          tabBarIcon: ({ focused, size }) => (
            <Home
              size={size}
              color="#f4f4f5"
              {...(focused && { variant: 'Bold' })}
              className="ml-10"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="education"
        options={{
          href: '/education',
          tabBarLabel: 'Education',
          tabBarIcon: ({ focused, size }) => (
            <Educare
              size={size}
              color="#f4f4f5"
              {...(focused && { variant: 'Bold' })}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          href: '/profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, size }) => (
            <Profile
              size={size}
              color="#f4f4f5"
              {...(focused && { variant: 'Bold' })}
            />
          ),
        }}
      />
    </Tabs>
  );
}
