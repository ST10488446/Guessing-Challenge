import React, { useState,useEffect } from 'react';
import { StyleSheet,View, Text, TextInput,Button, Alert,Keyboard,Platform } from 'react-native';

export default function App() {
  const [targetNumber, setTargetNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [gameOver,setGameOver]=useState(false);

  useEffect(() => {
    generateNewNumber();
  }, []);

  const generateNewNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setTargetNumber(randomNumber);
    setFeedback('');
    setGuess('');
    setGameOver(false);
  };


const handleGuess = () => {
  const guessNumber = parseInt(guess);

  if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
    Alert.alert('Invalid Guess', 'Please enter a number between 1 and 100.');
    return;
  }

  if (guessNumber < targetNumber) {
    setFeedback('📉 Too low!');
  } else if (guessNumber > targetNumber) {
    setFeedback('📈 Too high!');
  } else {
    setFeedback('🎉 Correct! You guessed it!');
  }
  Keyboard.dismiss();


};


return (
  <View style ={styles.container}>
    <Text style={styles.title}>🎯 Number Guessing Game</Text>
    <Text style={styles.subtitle}>Guess a number between 1 and 100</Text>

    <TextInput
      style={styles.input}
      placeholder="Enter your guess"
      keyboardType="numeric"
      value={guess}
      onChangeText={setGuess}
      editable={!gameOver}
    />

    <Button
      title="Submit Guess" 
      onPress={handleGuess}
      disabled={gameOver}
       />

    {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}

      <View style={styles.restartContainer}>
        <Button
         title="Reset Game"
          onPress={generateNewNumber} 
          />
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
    color: '#555',
  },
  input: {
    width: '60%',
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    textAlign: 'center',
  },
  feedback: {
    fontSize: 18,
    marginVertical: 12,
    marginTop: 20,
    fontWeight: '600',
    color: '#444'
  },
  restartContainer: {
    marginTop: 30,
    width: '60%'
  }
});
