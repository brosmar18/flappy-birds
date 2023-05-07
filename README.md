# Flappy Bird Clone
This is a simple Flappy Bird clone built with React Native. Tap the screen to make the bird jump and avoid the obstacles to score points. The game ends when the bird collides with an obstacle or falls out of the screen.

## Features
- Bird character that jumps with a tap
- Two sets of obstacles that move from right to left
- Score counter that increments for each successfully passed obstacle
- Game Over screen when the bird collides with an obstacle or falls out of the screen
- Simple and intuitive user interface

## Installation
1. Make sure you have Node.js installed.

2. Install the Expo CLI:
`npm install -g expo-cli`

3. Clone this repository:

`git clone https://github.com/yourusername/flappy-bird-clone.git`

4. Change into the project directory:

`cd flappy-bird-clone`

5. Install the dependencies:

`npm install`

6. Start the development server:

`expo start`

7. Follow the instructions in the terminal to open the app on your device or emulator.

## Usage
After starting the app, tap the screen to make the bird jump. The bird will fall under the effect of gravity, so keep tapping to keep it in the air. Navigate through the gaps between the obstacles and try to achieve the highest score possible.

## Components
- App: The main component that orchestrates the game's logic and renders the game elements.
- Bird: Represents the bird character and renders its position based on the current state.
- Obstacles: Represents the moving obstacles and renders their positions based on the current state.
## Styles
The game uses the StyleSheet object from React Native to style the components:

- container: The main container for the game, with a black background and centered content.
- gameOverContainer: Positioned absolutely to show the Game Over screen in the center of the screen.
- gameOverText: Styles the "Game Over" message text.
- scoreText: Styles the text displaying the current score.

## Acknowledgements
This project was inspired by the popular mobile game Flappy Bird. The game's mechanics and visuals are a simplified version of the original game.
