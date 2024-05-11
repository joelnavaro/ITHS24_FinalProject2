
import React from 'react'
import { ColorShade } from '@/components/ColorShade'
import { theme } from '@/theme'
import { Container, ScreenBase } from '@/components/ScreenBase'

export default function Home() {
  const { color } = theme
  const colorsArray = Object.entries(color)

  return (
    <ScreenBase>
      <Container direction wrap>
        {/* <ColorShade color={color.primary} />
        <ColorShade color={color.secondary} />
        <ColorShade color={color.darkSlateGray} />
        <ColorShade color={color.hookersGreen} />
        <ColorShade color={color.success} />
        <ColorShade color={color.error} />
        <ColorShade color={color.warning} />
        <ColorShade color={color.white} />
        <ColorShade color={color.black} /> */}
        {colorsArray.map((color, index) => (
          <ColorShade key={index} name={color[0]} color={color[1]}/>
        ))}
      </Container>
      {/* {colorsArray.map((color, index) => (
        <Container key={index} direction>
          <ColorShade color={color[1]} />
          <BodyText>{color[1]}</BodyText>
          <BodyText>{color[0]}</BodyText>
        </Container>
      ))} */}
    </ScreenBase>
  )
}

// import { StyleSheet } from 'react-native'

// import EditScreenInfo from '@/src/components/EditScreenInfo'
// import { Text, View } from '@/src/components/Themed'

// export default function TabOneScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Tab One</Text>
//       {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// })
