import { useRouter } from 'expo-router';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from '../(auth)/login';

const Education = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.containerBlack}>
      <View className="px-5 py-6">
        <Text className="text-4xl text-white">Current courses</Text>
        <Text className="text-light mb-4 text-white">
          Courses you are currently taking
        </Text>
        <View>
          <TouchableOpacity
            className="mr-4 rounded-xl py-2"
            onPress={() => router.replace('/course')}
          >
            <Image
              source={{ uri: 'https://i.imgur.com/pxihyMT.png' }}
              className="h-36 w-full rounded-lg"
            />
            <Text className="mt-4 text-2xl font-medium text-white">
              <Text className="text-emerald-500">Progress: </Text>57%
            </Text>
            <Text className="text-md mt-1 font-medium text-white">
              Advanced Algorithm Techniques
            </Text>
            <Text className="mt-1 text-xs font-light text-white">
              Master advanced algorithm techniques including graph theory
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="mr-4 mt-10 rounded-xl py-2"
            onPress={() => router.replace('/course')}
          >
            <Image
              source={{ uri: 'https://i.imgur.com/z0Y3mHN.png' }}
              className="h-36 w-full rounded-lg"
            />
            <Text className="mt-4 text-2xl font-medium text-white">
              <Text className="text-emerald-500">Progress: </Text>0%
            </Text>
            <Text className="text-md mt-1 font-medium text-white">
              Problem Solving in Olympiad Programming
            </Text>
            <Text className="mt-1 text-xs font-light text-white">
              Develop critical thinking and problem-solving skills through
              hands-on practice
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Education;
