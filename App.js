import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Bird from './components/Bird';
import Obstacles from './components/Obstacles';

export default function App() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const birdLeft = screenWidth / 2;
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth);
  const obstacleWidth = 60;
  const obstacleHeight = 300;
  const gap = 50;
  const gravity = 3;
  let gameTimerId;
  let obstaclesLeftTimerID;

  //start bird falling
  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - gravity);
      }, 30);

      return () => {
        clearInterval(gameTimerId);
      }
    }
  }, [birdBottom]);
  console.log(birdBottom);


  // start first obstacles
  useEffect(() => {
    if (obstaclesLeft > 0) {
      obstaclesLeftTimerID = setInterval(() => {
        setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5);
      }, 30)
    }

    return () => {
      clearInterval(obstaclesLeftTimerID)
    }
  }, [obstaclesLeft])

  return (
    <>

      <View style={styles.container}>
        <Bird
          birdBottom={birdBottom}
          birdLeft={birdLeft} />
        <Obstacles
          obstacleWidth={obstacleWidth}
          obstacleHeight={obstacleHeight}
          gap={gap}
          obstaclesLeft={obstaclesLeft}
        />
      </View>



    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
