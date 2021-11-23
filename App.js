import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Button from './assets/components/Button';
import LinkButton from './assets/components/LinkButton';


const VerticalSpace = () => {
  return (
    <View style={styles.verticalSpace} />
  )
}

const App = () => {

  /*   const onPress = () => {
      alert('clicked')
    } */

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={styles.logo}
        source={require('./assets/images/01-pink-02.png')}
      />
      <Text style={[styles.text, styles.title]}>Remake Yourself</Text>
      <Text style={styles.text}>Record the learnings of your therapy sessions so you can apply them daily and thus actively work on your cognitive reconfiguration.</Text>
      <VerticalSpace></VerticalSpace>
      <Button
        text='Create Account'
      />
      <LinkButton
        text='Login' />
      <Text style={[styles.text, styles.infoText]}>By creating account or login, you are agreeing to our <a href="#">Terms of Use</a>. Read our <a href="#">Privacy Policy</a> to know how we deal and process our personal informations</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginVertical: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    height: '100%',
    backgroundColor: '#f9f9f9',
  },
  text: {
    fontFamily: 'Roboto',
    marginBottom: 30,
    marginHorizontal: 50,
    textAlign: 'center'
  },
  title: {
    color: '#0cbf9f',
    marginBottom: 10,
    fontSize: 26,
    fontWeight: '500',
  },
  infoText: {
    fontSize: 12,
    color: '#777777',
  },
  verticalSpace: {
    marginVertical: 20,
  },



});


/* const App = () => (
  <SafeAreaView style={styles.container}>
    
    <View style={styles.container}>
      <Image
        style={styles.cat}
        source={require('./src/images/01-02.png')}
      />
      <Button>

      </Button>
    </View>
    <View>
      <a style={{ 
        color: '#ccc', 
        textAlign: 'center', 
        marginBottom: 10 
        }}
        href="https://www.freepik.com/vectors/background">Background vector created by rawpixel.com - www.freepik.com</a>
    </View>
  </SafeAreaView>
);



const styles = StyleSheet.create({
  cat: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginVertical: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    height: '100%',
    backgroundColor: '#f4f4f4',
  },


});
 */


export default App;