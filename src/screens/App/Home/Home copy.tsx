// import React from 'react';
// import { Linking, StyleSheet, Text, View } from 'react-native';
// import { createStyles } from './style';
// import { useTheme } from '@react-navigation/native';
// import { useCameraPermission, Camera, useCameraDevice, useCodeScanner } from 'react-native-vision-camera'

// const Home = () => {
//     //hooks
//     const { colors } = useTheme()
//     const styles = createStyles(colors)
//     const { hasPermission, requestPermission } = useCameraPermission()

//     const device = useCameraDevice('back', {
//         physicalDevices: [
//             'ultra-wide-angle-camera',
//             'wide-angle-camera',
//             'telephoto-camera'
//         ]
//     })
//     const codeScanner = useCodeScanner({
//         codeTypes: ['qr', 'ean-13'],
//         onCodeScanned: (codes) => {
//             console.log('codes', codes)
//             console.log('codes', codes[0].value)
//             console.log(`Scanned ${codes} codes!`)
//         }
//     })
//     return device && (
//         <View style={styles.container}>
//             <Camera
//                 style={StyleSheet.absoluteFill}
//                 device={device}
//                 isActive={true}
//                 codeScanner={codeScanner}
//             />
//         </View>
//     );
// };



// export default Home;
