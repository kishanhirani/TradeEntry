import { View, Text, StyleSheet, Modal } from 'react-native'
import React from 'react'

export default function BottomSheet(props:any) {
  return (
    <View >
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.visible}
          onRequestClose={() => {
            
          }}><>
            <View style={{flex:1, backgroundColor:"rgba(0,0,0,0.4)"}}></View>
            <View style={styles.container}>
                {props.children}
            </View>
            </>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff'
    }
})

