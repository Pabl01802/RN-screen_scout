# 📱Screen Scout📱

`Screen Scout` is a mobile app that allows you to browse movies from TMDB.

This app uses TMDB API. Check out its documentation for more details:
[LINK TO TMDB API DOCUMENTATION](https://developer.themoviedb.org/reference/intro/getting-started)

## ⚡Technologies⚡

- **React Native** (for creating mobile app)
- **TypeScript** (for static typing and better code readability)
- **emotion** (styled components for convenient style managemenent)
- **Axios** (for sending requests)
- **Tanstack Query** (for handling queries)
- **Expo Router** (for routing)
- **Async Storage** (for storing data locally)
- **React Native Reanimated** (for simple animations)
- **React Native Carousel** (simple react native carousel image slider)
- **Zustand** (global state handling)
- **ESLint** (to avoid writing useless code)
- **Husky** (for pre-commit and commit-msg hooks)
- **CommitLint** (I wanted my commits to be in a Conventional Commits specification)

## 💎Features💎 

- **Browsing movies**: This app allows you to browse movies. You can choose one of four options: popular, top rated, upcoming and now playing.
- **Movie information**: Each movie has its subpage where you can find its description and information about to what categories it belongs to.
- **Saved movies list**: You can locally store movies by clicking save button. It may be a good option if you wanted to choose your favourite movies and save them to the list so that you can watch them later!

## 🔗Installation🔗

To install app locally on your PC do these steps:

1. Clone repository:
    ```bash
    git clone https://github.com/Pabl01802/RN-screen_scout.git
    ```
2. Go to project folder:
    ```bash
    cd RN-screen_scout
    ```
3. Install dependencies:
    ```bash
    yarn install
    ```
4. Launch app using expo:
    ```bash
    yarn run start
    ```

## 📄Project structure📄

- **/src**: Source directory which contains components, assets etc.
  - **/app**: main app directory
  - **/assets**: assets for this project
  - **/components**: UI components
    - **/Text**: Reusable text components
- **/hooks**: You can find there custom hooks that I created
  - **/stores**: Global state hooks are stored there
- **/theme**: Project theming
- **/utils**: There are some utils stuff like axiosClient, interfaces and custom fuctions
  - **/images**: Custom functions that allow to get images

## If you have any suggestions on what I can change, add or remove just contact me via email: kacper.pawlak25@gmail.com📧
### Thanks for reading and enjoy my app. Cheers! :)🎉 
