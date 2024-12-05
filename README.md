This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.





# INSTALLATION STEPS FOR OLA SOUND 

Have Metro and an Emulator Setup running Android version 14.0 or later
instructions for Metro and setting up android sutdio can be found here:
- https://reactnative.dev/docs/set-up-your-environment

Use Git Clone into a new Empty folder to get the project Code. 
Open a new CP in the Folder your cloned the github code, Run the command 'npm install' to install the neccessary Node packages.

Again run a new CP window in the install folder and tpye in 'npm run' into the command line, After Metro has finished loading 
press a to open an emulator, the App should load automatically. 


# PACKAGES & LIBRARYS WE USED IN OLA SOUND
The following libraries were USED:
-React Navigation: https://reactnavigation.org/
-Bottom Tabs Navigator: https://reactnavigation.org/docs/bottom-tab-navigator/
-React Native Track Player: https://rntp.dev/


# INSTALL REACT NATIVE Navigation and Stack Navigation 
1. Run the Command: npm install @react-navigation/native
2. Run the Command: npm install react-native-screens react-native-safe-area-context
3. react-native-screens package requires one additional configuration step to properly work on Android devices. 
Edit MainActivity.kt or MainActivity.java file which is located under android/app/src/main/java/<your package name>/.
Add the code to the body of MainActivity class:

class MainActivity: ReactActivity() {
  // ...
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }
  // ...
}

and make sure to add the following import statement at the top of this file below your package statement:

import android.os.Bundle;


4. Install React Nativ Stack Navigator, Run the command: npm install @react-navigation/native-stack
5. Run the command:  npm install @react-navigation/elements

# INSTALL REACT NATIVE Bottom Tabs Navigator

1. Run the command: npm install @react-navigation/bottom-tabs

# INSTALL REACT NATIVE Track Player
1. Run the command: npm install --save react-native-track-player

# DEEZER API 
-https://developers.deezer.com/api





