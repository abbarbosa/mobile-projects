import { StyleSheet, Text, View } from "react-native";

//componente person 
//props: name, age 

const Person = ({name, age}) => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>Nome: {name}</Text>
            <Text style = {styles.text}>Idade: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor : '#e0e0e0',
        padding : 10,
        margin: 10,
        borderRadius: 5,   
    },

    text:{
        fontSize: 20,
        color : 'purple'
    }
})

export default Person;