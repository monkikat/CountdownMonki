# An Event Countdown Page ⏳

Welcome to CountdownMonki, an event countdown web page built with **React**, **TypeScript**, and **Tailwind CSS** for a responsive and clean user interface, and **Express** with **Nodemailer** for email registration notifications. CountdownMonki currently displays a timer for the [React Summit 2024](https://spacemonki.netlify.app/) event.

![client/src/assets/landingPageScreenshot.png](https://github.com/monkikat/CountdownMonki/blob/main/client/src/assets/landingPageScreenshot.png)

![client/src/assets/demo.gif](https://github.com/monkikat/CountdownMonki/blob/main/client/src/assets/demo.gif)

## Features

- **Dynamic Countdown**: Displays days, hours, minutes, and seconds left until an event
- **Event Registration**: Users can sign up with their email to be notified when the countdown reaches zero
- **Demo Mode**: Allows users to fast forward the timer and preview a demo event launch 
- **Custom Animations**: Smooth hover and event launch animations created using Tailwind CSS
- **Contact Me**: A contact form for users to ask questions / request services

## Tech Stack
- **Frontend:** React.js, Tailwind CSS, TypeScript
- **Backend:** Node.js, Express.js, Nodemailer, EmailJS

## To run the project locally
1. Clone the repository: <br>
```
git clone https://github.com/monkikat/CountdownMonki.git
```

2. Install dependencies: <br>
```
cd server
npm install 
npm install -D nodemon
```

```
cd client
npm install vite
```

3. Start the development server for backend using nodemon: 
```
npm run dev
```

4. Start the development server for client-side using Vite: 
```
npm run dev
```
