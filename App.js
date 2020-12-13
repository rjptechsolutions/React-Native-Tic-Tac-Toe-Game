
import React, {useState} from 'react';
import {
  StyleSheet,  
  View,
  TouchableOpacity
} from 'react-native';

import {
  Text,
  Container,
  Content,
  Header,
  Body,
  Card,
  H1,H3,
  Button,
  Title
} from 'native-base';

import Icons from './components/Icons'

 
const itemArray = new Array(9).fill('empty')
 

const App = () => {

  const [isCross, setIsCross] = useState(false)
  const [winMessage,setWinMessage] = useState('')   
  const [toast,setToast] = useState('Go Go Go...')   
  

  const changeItem = (itemNumber) => {
    if(winMessage){
      return(
        setToast("You are Won !!!!")
      ) 
    }
    if(itemArray[itemNumber]==='empty'){
      itemArray[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross)
    }else{
      return(        
      setToast("All Position Filled!!!")
      )
    }
    checkIsWinner();
  }
  
  const reloadGame = () => {
    setIsCross(false)
    setWinMessage('')
    setToast('Go Go Go....')
    itemArray.fill('empty',0,9)  
  }
  
  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} Won`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== 'empty'
    ) {
      setWinMessage(`${itemArray[3]} Won`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== 'empty'
    ) {
      setWinMessage(`${itemArray[6]} Won`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} Won`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== 'empty'
    ) {
      setWinMessage(`${itemArray[1]} Won`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== 'empty'
    ) {
      setWinMessage(`${itemArray[2]} Won`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} Won`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== 'empty'
    ) {
      setWinMessage(`${itemArray[2]} Won`);
    }
  };

  

  return (
    <>
    <Container style={{backgroundColor:"#ffff"}}>
      <Header>
        <Body>
          <Title>Ron Tic Tac Toe</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.grid}>
        {itemArray.map((item,index) => (
          <TouchableOpacity
          style={styles.box}
          key={index}
          onPress={() => changeItem(index)}
          >
            <Card
            style={styles.card}
            >
              {console.log(item)}
              <Icons name={item} />
            </Card>
          </TouchableOpacity>
        ))}         
        </View>
        {winMessage ? (
          <View>
            <H1 style={styles.msg}>{winMessage}</H1>
            <Button 
            onPress={reloadGame}
            primary
            block
            rounded
            >
              <Text>Reload Game</Text>
            </Button>         
          </View>        
        ) : (
          <H3 style={styles.msg}>
            {isCross ? 'cross' : 'circle'} turns
          </H3>
        )}
       
      </Content>
      <View style={{backgroundColor:"#ee2424"}}>
        <Text style={styles.myToast}>{toast}</Text>
      </View>
    </Container>    
    </>
  );
};

const styles = StyleSheet.create({
  grid:{
    flex:1,
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:20,
  },
  box:{
    width:'33%',
    marginBottom:6,
  },
  card:{
    height:120,
    justifyContent:'center',
    alignItems:'center'
  },
  msg:{
    textAlign:'center',
    textTransform:'uppercase',
    color:'#ffff',
    marginTop:20,
    backgroundColor:"#4652B3",
    paddingVertical:20,
    marginVertical:10
  },
  myToast:{
    marginTop:15,    
    alignItems:'flex-end',
    justifyContent:'center',
    color:"#ffff",    
    fontSize:20
  }
});

export default App;
