import { useRouter } from 'expo-router';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from '../(auth)/login';

const links = [
  {
    link: 'https://www.youtube.com/watch?v=ZA-tUyM_y7s&list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY',
    preview: 'https://i.imgur.com/RJoKdS6.png',
  },
  {
    link: 'https://www.youtube.com/watch?v=CHhwJjR0mZA&list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY&index=2',
    preview: 'https://i.imgur.com/bYSOQtZ.png',
  },

  {
    link: 'https://www.youtube.com/watch?v=oS9aPzUNG-s&list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY&index=4',
    preview: 'https://i.imgur.com/2HFVpPT.png',
  },

  {
    link: 'https://www.youtube.com/watch?v=yndgIDO0zQQ&list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY&index=7',
    preview: 'https://i.imgur.com/R8zSWYd.png',
  },

  {
    link: 'https://www.youtube.com/watch?v=76dhtgZt38A&list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY&index=9',
    preview: 'https://i.imgur.com/lJBLgEb.png',
  },
];
const Course = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.containerBlack}>
      <ScrollView>
        <View className="px-5 py-6">
          <Text className="text-4xl text-white">
            Advanced Algorithm Techniques
          </Text>
          <TouchableOpacity className="mr-4 mt-10 rounded-xl py-2">
            <Image
              source={{ uri: 'https://i.imgur.com/pxihyMT.png' }}
              className="h-52 w-full rounded-lg"
            />
            <Text className="my-4 text-2xl font-medium text-white">
              Problem Solving in Olympiad Programming
            </Text>
            <Text className="mb-1 text-2xl text-white">Description:</Text>
            <Text className="text-lg font-light text-white">
              Master advanced algorithm techniques including graph theory,
              dynamic programming, and number theory to excel in Olympiad
              programming.
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mb-3 mt-6 flex-1 px-4">
          <Text className="text-center text-3xl font-medium text-white">
            Lections
          </Text>
          <Text className="mb-4 text-center font-medium text-white">
            Click to learn
          </Text>
          <ScrollView showsHorizontalScrollIndicator={false}>
            {links.map((course, index) => (
              <TouchableOpacity className="mb-6 flex-row items-center" onPress={() => router.replace(course.link)}>
                <Text
                  className="text-5xl font-semibold text-white"
                >
                  {index + 1}
                </Text>
                <Image
                  source={{ uri: course.preview }}
                  className="ml-6 h-52 w-[85%] rounded-lg"
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Course;
