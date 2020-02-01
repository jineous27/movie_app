import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'; //리엑트네이트에 컴포넌트 TouchableOpacity 추가해줘야 밑에서 사용가능//

export default ({ navigation }) => (
    <>
      <Text>Movies</Text>
      <TouchableOpacity onPress={()=> navigation.navigate("Detail")}>
        <Text>Go to detail</Text>
      </TouchableOpacity>
    </>
)
