import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    title: {
      color: 'black',
      fontSize: 22,
      marginTop: 30,
      marginLeft: 15,
      marginBottom: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      justifyContent: 'center',
    },
    box: {
      backgroundColor: '#eeeeee',
      height: 400,
      marginLeft: 15,
      marginRight: 15,
      borderRadius: 15,
      
    },
    icon: {
      height: 100,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {  
      flexDirection: 'row',
      fontSize: 17,
      marginTop: 20,
      marginBottom: 15,
      fontWeight: '600',
      textAlign: 'center',
      
    },
    info: {
      fontSize: 15,
      marginTop: 10,
      marginLeft: 15,
      marginBottom: 30,
      textAlign: 'left',
      justifyContent: 'center',
    }
    
  });
  
  export default styles;