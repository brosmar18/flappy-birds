import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Bird from './components/Bird';
import Obstacles from './components/Obstacles';

export default function App() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const birdLeft = screenWidth / 2;
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth + screenWidth/2 + 30);
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth);
  const obstacleWidth = 60;
  const obstacleHeight = 300;
  const gap = 200;
  const gravity = 3;
  let gameTimerId;
  let obstaclesLeftTimerID;
  let obstaclesLeftTimerIDTwo;

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
    if (obstaclesLeft > -obstacleWidth) {
      obstaclesLeftTimerID = setInterval(() => {
        setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5);
      }, 30)
      return () => {
        clearInterval(obstaclesLeftTimerID)
      }
    } else {
      setObstaclesLeft(screenWidth);
    }


  }, [obstaclesLeft])


// start second set of obstacles.
  useEffect(() => {
    if (obstaclesLeftTwo > -obstacleWidth) {
      obstaclesLeftTimerIDTwo = setInterval(() => {
        setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5);
      }, 30)
      return () => {
        clearInterval(obstaclesLeftTimerIDTwo)
      }
    } else {
      setObstaclesLeftTwo(screenWidth);
    }


  }, [obstaclesLeftTwo])



  return (
    <>

      <View style={styles.container}>
        <Bird
          birdBottom={birdBottom}
          birdLeft={birdLeft} />
        <Obstacles
        color={'green'}
          obstacleWidth={obstacleWidth}
          obstacleHeight={obstacleHeight}
          gap={gap}
          obstaclesLeft={obstaclesLeft}
        />
        <Obstacles
          color={'red'}
          obstacleWidth={obstacleWidth}
          obstacleHeight={obstacleHeight}
          gap={gap}
          obstaclesLeft={obstaclesLeftTwo}
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
