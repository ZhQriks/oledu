import { useRouter } from 'expo-router';
import { Play } from 'iconsax-react-native';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from '../(auth)/login';

const courses = [
  {
    title: 'Introduction to Olympiad Programming',
    description:
      'Learn the basics of competitive programming with a focus on algorithms and data structures to prepare for Olympiad competitions.',
    imageUrl: 'https://i.imgur.com/DfBWEr6.jpg',
  },
  {
    title: 'Advanced Algorithm Techniques',
    description:
      'Master advanced algorithm techniques including graph theory, dynamic programming, and number theory to excel in Olympiad programming.',
    imageUrl: 'https://i.imgur.com/pxihyMT.png',
  },
  {
    title: 'Problem Solving in Olympiad Programming',
    description:
      'Develop critical thinking and problem-solving skills through hands-on practice with Olympiad-level problems.',
    imageUrl: 'https://i.imgur.com/z0Y3mHN.png',
  },
  {
    title: 'Olympiad Mock Contest Preparation',
    description:
      'Participate in mock contests that mimic real Olympiad competitions to test your skills and prepare for success.',
    imageUrl: 'https://i.imgur.com/94jhQRQ.png',
  },
];

const themes = [
  'Dinamic Programming',
  'Graphs',
  'Binary Search',
  'Hashmaps',
  'O(n) Complexity',
];
const Pill = ({ text }: { text: any }) => (
  <TouchableOpacity className="mr-4 rounded-xl bg-green-300 px-4 py-2">
    <Text>{text}</Text>
  </TouchableOpacity>
);

const Course = ({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      className="mr-4 max-w-[46%] rounded-xl px-4 py-2"
      onPress={() => router.replace('/course')}
    >
      <Image source={{ uri: image }} className="h-24 w-full rounded-lg" />
      <Text className="text-md mt-4 font-medium text-white">{title}</Text>
      <Text className="mt-1 text-xs font-light text-white">
        {description.slice(0, 40)}
      </Text>
    </TouchableOpacity>
  );
};

const Home = () => {
  const router = useRouter();

  const podcastLink: string =
    'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9YQV84NTFrMw==';

  return (
    <SafeAreaView style={styles.containerBlack}>
      <View className="px-5 py-6">
        <Text className="text-4xl font-medium text-white">Categories</Text>
      </View>
      <View className="px-4">
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {themes.map((programmingTheme) => (
            <Pill text={programmingTheme} key={programmingTheme} />
          ))}
        </ScrollView>
      </View>
      <View className="mt-10 px-5">
        <Text className="text-4xl font-medium text-white">Popular Courses</Text>
      </View>
      <ScrollView>
        <View className="my-6 px-4">
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {courses.map((course) => (
              <Course
                image={course.imageUrl}
                description={course.description}
                title={course.title}
                key={course.title}
              />
            ))}
          </ScrollView>
        </View>
        <View className="mt-2 flex-1 px-4">
          <TouchableOpacity onPress={() => router.replace(podcastLink)}>
            <ImageBackground
              className="p-4"
              imageStyle={{ borderRadius: 10 }}
              source={{ uri: 'https://i.imgur.com/F1qOLS2.png' }}
            >
              <View className="flex flex-row items-center justify-between">
                <Text className="text-md text-light text-white">
                  Mix for you
                </Text>
                <Play size="16" color="white" />
              </View>
              <Text className="mt-12 text-2xl font-semibold text-white">
                Podcasts about coding
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View className="mt-5 px-5">
          <Text className="text-4xl font-medium text-white">Tests</Text>
        </View>
        <View className="mt-2 flex-1 flex-row justify-between px-4">
          <TouchableOpacity className="w-[45%]">
            <ImageBackground
              className="p-4"
              imageStyle={{ borderRadius: 10 }}
              source={{ uri: 'https://i.imgur.com/F1qOLS2.png' }}
            >
              <View className="flex flex-row items-center justify-between">
                <Text className="text-md text-light text-white">Test</Text>
                <Play size="16" color="white" />
              </View>
              <Text className="mt-2 text-xl font-semibold text-white">
                Dynamic Programming
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity className="w-[45%]">
            <ImageBackground
              className="p-4"
              imageStyle={{ borderRadius: 10 }}
              source={{ uri: 'https://i.imgur.com/F1qOLS2.png' }}
            >
              <View className="flex flex-row items-center justify-between">
                <Text className="text-md text-light text-white">Test</Text>
                <Play size="16" color="white" />
              </View>
              <Text className="mt-2 text-xl font-semibold text-white">
                Greedy Algorithms
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
