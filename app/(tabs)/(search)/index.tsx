import { BaseCard } from '@/components/BaseCard'
import { ScreenBase } from '@/components/ScreenBase'
import { color } from '@/theme/color'
import { router } from 'expo-router'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Search() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: require('../../../assets/images/react-logo.png'), // Or you can fetch the image URL from a server
    // Other user details...
  }

  const handleEditProfile = () => {
    // Navigation to edit profile screen
    // Add your navigation logic here
  }

  const handleLogout = () => {
    // Logout logic
  }

  const handleSettings = () => {
    // Navigate to settings screen
    // Add your navigation logic here
  }
  return (
    // <ScreenBase backgroundColor={color.darkGray5}>
    //   <BaseCard></BaseCard>
    // </ScreenBase>
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={user.avatar} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity
          onPress={handleEditProfile}
          style={styles.optionButton}
        >
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSettings} style={styles.optionButton}>
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={styles.optionButton}>
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 18,
    marginTop: 5,
  },
  options: {
    alignItems: 'center',
  },
  optionButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  optionText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
})

// frst example

// const user = {
//   name: 'John Doe',
//   email: 'john.doe@example.com',
//   avatar: require('../../../assets/images/react-logo.png'), // Or you can fetch the image URL from a server
//   // Other user details...
// }
// const handleEditProfile = () => {
//   // Navigation to edit profile screen
//   router.push('EditProfile')
// }

// <View style={styles.container}>
// <Image source={user.avatar} style={styles.avatar} />
// <Text style={styles.name}>{user.name}</Text>
// <Text style={styles.email}>{user.email}</Text>

// {/* Add more user details like bio, location, etc. */}

// <TouchableOpacity onPress={handleEditProfile} style={styles.editButton}>
//   <Text style={styles.editButtonText}>Edit Profile</Text>
// </TouchableOpacity>
// </View>

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 20,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   email: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
//   editButton: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   editButtonText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// })
