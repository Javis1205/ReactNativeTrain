import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native'

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isloading: false,
            text: ''
        }
    }
    render(){
        return (
            <View
                style={{
                    backgroundColor: '#ddd',
                    flexDirection:'row',
                    height:50,
                    width: 300,
                    marginTop:100,
                    marginLeft:50,
                    borderBottomWidth:1,
                    borderColor:'red',
                    borderRadius: 20
                }}
            >
                <View 
                    style={{
                        flex:1,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                >
                    <Text
                        style={{fontSize: 15}}
                    >
                        UserName
                    </Text>
                </View>

                <View 
                    style={{
                        flex:3,
                        backgroundColor:'red'
                    }}
                >
                    <TextInput
                        style={{
                            flex:1,
                            paddingLeft:30
                        }}
                    />
                </View>

            </View>
        )
    }
}

