import React from 'react'
import  Icon  from 'react-native-vector-icons/Ionicons'

interface Props{
  name:string,
  size?:number,
  color?:string
}
export const CustomIconsIo = ({name,size,color}:Props) => {
  return (
    <Icon style={{fontSize:size,color:color}} name={name}></Icon>
  )
}
