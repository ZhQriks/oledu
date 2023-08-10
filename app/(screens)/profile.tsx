import { useAuth, useUser } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from '../(auth)/login';

const Profile = () => {
  const { user } = useUser();
  const { signOut } = useAuth();
  const router = useRouter();

  const fullName =
    user?.firstName || user?.lastName
      ? (user?.firstName || '') + (user?.lastName || '')
      : user?.emailAddresses[0]?.emailAddress || '';

  const email =
    user?.firstName || user?.lastName
      ? user?.emailAddresses[0]?.emailAddress || 'sungat@gmail.com'
      : '';
  return (
    <SafeAreaView style={styles.containerBlack}>
      <View className="h-20 flex-row justify-between border-b border-neutral-800 px-5 py-6">
        <Text className="mt-1 text-4xl text-white">Profile</Text>
        <TouchableOpacity
          onPress={() => signOut()}
          className="h-10 flex-row items-center justify-center rounded-full border border-neutral-800 px-4 py-2"
        >
          <Text className="text-white">Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row border-b border-neutral-800 px-5 py-6">
        <Image
          source={{ uri: user?.imageUrl || 'https://i.imgur.com/tjx4f7e.png' }}
          className="h-20 w-20 rounded-xl"
        />
        <View className="px-4 py-2">
          <Text className="text-xl font-semibold text-white">{fullName}</Text>
          <Text className="mt-1 font-light text-white">{email}</Text>
        </View>
      </View>
      <View className="border-b border-neutral-800 p-4">
        <Text className="mb-2 text-3xl font-medium text-white">
          Last course
        </Text>
        <TouchableOpacity
          className="mr-4 rounded-xl py-2"
          onPress={() => router.replace('/course')}
        >
          <Image
            source={{ uri: 'https://i.imgur.com/pxihyMT.png' }}
            className="h-36 w-full rounded-lg"
          />
          <Text className="mt-4 text-xl font-medium text-white">
            Advanced Algorithm Techniques
          </Text>
          <Text className="mt-1 text-xs font-light text-white">
            Master advanced algorithm techniques including graph theory
          </Text>
        </TouchableOpacity>
      </View>
      <View className="p-4">
        <Text className="mb-2 text-3xl font-medium text-white">Progress</Text>
        <TouchableOpacity className="mr-4 rounded-xl py-2">
          <Image
            source={{ uri: 'https://i.imgur.com/Ws9LofB.png' }}
            className="h-36 w-full"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
