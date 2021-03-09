import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'

import {useDispatch, useSelector} from 'react-redux'
import {tambahCounter, kurangCounter} from './redux/action'

const Counter = () => {
    const dispacth = useDispatch();
    const counter = useSelector(data => data.counter);
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center', flexDirection:'column', backgroundColor:'#a8a8a8',}}>
           <Text style={{marginBottom:20, fontSize:35}}>Aplikasi Counter</Text>
           
           <TouchableOpacity style={{borderRadius:10, backgroundColor:'#42f57b', paddingBottom:5, paddingTop:5, paddingLeft:20, paddingRight:20}} onPress={()=>dispacth(tambahCounter(counter))}>
                <Text style={{fontSize:30}}>+</Text>
            </TouchableOpacity>
                <Text style={{fontSize:50, marginLeft:20, marginRight:20}}>{counter}</Text>
           <TouchableOpacity style={{borderRadius:10, backgroundColor:'#42f57b', paddingBottom:5, paddingTop:5, paddingLeft:25, paddingRight:25}} onPress={()=>dispacth(kurangCounter(counter))}>
                <Text style={{fontSize:30}}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Counter