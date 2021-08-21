import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30,
      marginLeft: 30,
    },
  
    check: {
      marginTop: -25,
      marginRight:10
    },
    contorno: {
      width: "90%",
      height: 45,
      borderTopColor: "#C0C0C0",
      borderBottomColor: "#C0C0C0",
      borderWidth: 3,
      borderRadius: 25,
      marginTop: 4,
      paddingLeft: 15,
      paddingTop: 5,
    },
  
    barraSuperior: {
      width: "90%",
      height: 55,
      borderTopColor: "#C0C0C0",
      borderBottomColor: "#C0C0C0",
      borderWidth: 7,
      borderRadius: 25,
      marginBottom: 10,
    },
  
    input: {
      width: "100%",
      borderColor: "#777",
      borderWidth: 1,
      borderRadius: 15,
      marginBottom: 5,
      textAlign: "center",
    },
    touch: {
      flex:1,
      display:"flex",
      width: "30%",
      height: 50,
      justifyContent: "center",
      backgroundColor: "#777",
      borderRadius: 50,
      textAlign: "center",
      marginTop: 15,
    },
    texto: {
      marginLeft: 15,
      paddingTop: 4,
      fontSize: 15,
    },
  
    text: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      color: "#FFF",
    },
    titulo: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      color: "#000",
    },
    saved: {
      width: "90%",
      height: 50,
      justifyContent: "flex-end",
      alignItems: "baseline",
      backgroundColor: "#DDD",
      marginTop: 10,
    },
    font: {
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
      color: "#555",
    },
    title: {
      textAlign: "center",
      fontSize: 40,
      fontWeight: "bold",
      backgroundColor: "#111",
      color: "white",
    },
    item: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#111",
    },
    info: {
      textAlign: "center",
      fontSize: 21,
      fontWeight: "bold",
      backgroundColor: "#BBF",
      color: "#111",
      marginTop: 15,
    },
    botao:{
      flex:1,
      alignItems:"flex-end",
      marginTop:10,
      marginRight:40
    }
  });

  export default styles