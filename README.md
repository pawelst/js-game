# Super Simple Real-Time Strategy Game

## Description

This project is a simple real-time strategy (RTS) game built using JavaScript, HTML5 Canvas, and CSS. The player can collect resources, buy workers and upgrade worker capacity.

The game runs in the browser and uses webpack for bundling the JavaScript files.

## Installation

To install this game locally on your computer, please follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/pawelst/js-game.git
```

2. Navigate to the project folder:

```bash
cd repository
```

3. Install the dependencies:

```bash
npm install
```

## Usage

To start the game locally, please follow these steps:

1. Compile and bundle the JavaScript files:

```bash
npx webpack
```

2. Open the `index.html` file in your browser:

```bash
open index.html
```

## Game Instructions

The game starts with 10 resource deposits scattered randomly on the screen. You begin with 10 credits and a storage unit. Once created, workers will automatically move to the nearest resource, pick it up, and take it to the storage unit.

Once the storage unit has enough resources, you can use them to buy more workers or upgrade worker capacity.

The game ends when all resources have been collected.

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
