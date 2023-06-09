# Memory Game ![language](https://img.shields.io/github/languages/top/nronzel/Memory-Game) ![vite](https://img.shields.io/badge/Build-Vite-ffc51d) ![chakra](https://img.shields.io/badge/UI-Chakra%20UI-3cc7bd) ![react](https://img.shields.io/badge/Framework-React-149eca)

[View The Site!](https://spongemem.netlify.app/)

## Description

This project was created for The Odin Project's Memory Card project in the React cirriculum. This project was created using React, Vite, and styled with Chakra UI, and deployed through Netlify. It also contains light/dark mode.

I was able to learn the benefits of setting up a deployment with CI/CD and the benefits to the developers workflow. It is much easier to just push changes to a branch and have the site rebuild itself and not have to do it myself.

## Installation

Clone this repository to a local directory of your choice

```bash
git clone https://github.com/nronzel/Memory-Game.git
```

cd into the project directory

```bash
cd Memory-Game
```

install the dependencies

```bash
npm install
```

To run the developer server and preview the app:

```bash
npm run dev

# open http://localhost:5173 in your browser
```

To build the production version and preview, run:

```bash
npm run build
npm run preview
# open http://localhost:4173 in your browser
```

## Usage

Click an image and the images will scramble. Remember which images you already clicked and click the ones you haven't yet.

The game will progress through 3 rounds with each round containing more images. If you complete the 3rd round the game will go into "newgame+" and restart from round one while maintaining your score, allowing you to set a really high score!

![screenshot](./public/screenshot.png)

## Credits

Images are from the Spongebob Wiki:
https://nickelodeon.fandom.com/wiki/List_of_SpongeBob_SquarePants_characters

## License

GPL-3.0
