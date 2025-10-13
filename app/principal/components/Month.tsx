
import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';

type props = PressableProps & {
    name: string;
    isSelected?: boolean;
}

export function Month({name, isSelected, ...rest}: props){
    const color = isSelected ? 'black' : '#686968a2';
    const size = isSelected ? 18 : 14;
    return (
        <Pressable style={styles.container} {...rest}> 
            <Text style={[styles.name, {color}, {fontSize: size},]} >{name}</Text>
            {isSelected && <View style={styles.line} />}
        </Pressable>
    )
}


export const styles = StyleSheet.create({
    container: {
    alignItems: 'center',
    paddingHorizontal: 10
    },
    name: {
    fontSize: 16,
    fontWeight: '600',
    },
    line: {
    marginTop: 4,
    height: 2,
    width: '80%',
    backgroundColor: "#DA4BDD",
    borderRadius: 2,
  },
});

export default styles;