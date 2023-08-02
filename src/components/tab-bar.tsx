import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Text, TouchableOpacity, View } from 'react-native';

export function NavigationBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View
      className="flex h-20 flex-row items-center border-t border-neutral-800 bg-neutral-950
   px-4"
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]!;

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const icon = options.tabBarIcon;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className={`mx-auto rounded-xl text-neutral-700 duration-300 ${
              isFocused ? 'text-neutral-800' : ''
            }`}
          >
            {icon?.call(icon, {
              focused: isFocused,
              color: '#10b981',
              size: 32,
            })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
