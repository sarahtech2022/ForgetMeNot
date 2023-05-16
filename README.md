# Forget Me Not

<img src="https://i.ibb.co/9WHPN29/LOGO.jpg" width="500" height="300" alt="logoimage" />

Forget Me Not is the ultimate app for never forgetting important details about your loved ones. You can easily access and update information about family and friends, ensuring that no important details slip your mind. It's perfect for busy individuals who want to stay organized and thoughtful, and for anyone who values their relationships and wants to deepen their connections with loved ones. Use Forget Me Not today and start cherishing every moment with those who matter most.

[![GitHub Pull Request](https://img.shields.io/github/issues-pr-closed/sarahtech2022/ForgetMeNot)](https://github.com/sarahtech2022/ForgetMeNot/pulls)
[![GitHub repo size](https://img.shields.io/github/repo-size/sarahtech2022/ForgetMeNot)](https://github.com/sarahtech2022/ForgetMeNot/)
[![GitHub contributors](https://img.shields.io/github/contributors/sarahtech2022/ForgetMeNot)](https://github.com/sarahtech2022/ForgetMeNot/)

## Contents

- [About](#about-ForgetMeNot)
- [Tech Stack](#tech-stack)
- [API Reference](#api-reference)
- [Installation](#installation)

## About Forget Me Not

[Back to Contents](#contents)

**_Forget Me Not_** is an app for storing important details about loved ones in one convenient place. You can easily access and update information about family and friends, ensuring that no important details slip your mind.

## Tech Stack

[Back to Contents](#contents)

---

<table align="center">
  <tr>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168923681-ece848fc-5700-430b-957f-e8de784e9847.png" width="48" height="48" alt="html" />
      <br>html
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168924521-589f95da-069a-496a-bcc1-ee6dd132ff12.png" width="48" height="48" alt="CSS" />
      <br>CSS
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168977094-6a5073a2-2f48-4f5a-ae0e-ed1421a678c6.png" width="48" height="48" alt="JavaScript" />
      <br>JavaScript
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168976819-15a1f4e0-29cf-4ac0-94a7-1f15eee374a1.png" width="48" height="48" alt="postgreSQL" />
      <br>postgreSQL
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168978951-5ac2af5e-c911-4e59-b493-683071cf1860.png" width="48" height="48" alt="Express" />
      <br>Express
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979311-4a486cad-32c8-46f4-a5da-912fdc51b2d6.png" width="48" height="48" alt="React" />
      <br>React
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979848-733f7090-0f78-401a-9ceb-4267231abef7.png" width="48" height="48" alt="Node" />
      <br>Node
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168980647-1690f9de-bf0e-4318-93cb-1b2ba3701ded.png" width="48" height="48" alt="Bootstrap" />
      <br>Bootstrap
    </td>
    
  </tr>
</table>

## API Reference

[Back to Contents](#contents)

<table align="center">
  <tr>
     <td align="center" width="96">
        <img src="https://i.ibb.co/WtVxGRZ/DiceBear.png" width="70" height="70" alt="DiceBear" />
        <br>Dice Bear
     </td>
  </tr>
</table>

## Installation

[Back to Contents](#contents)

**This project uses Auth0. Please go to [Auth0](https://auth0.com/) and make an account and retrieve a domain and clientid. See .env.example for set up!**

Step 1: Clone my project & switch into the project directory.

```bash
  git clone https://github.com/sarahtech2022/ForgetMeNot
  cd ForgetMeNot
```

Step 2: Install all packages.

```bash
  cd client && npm install && cd ../server && npm install
```

Step 3: Setup Environment Variables

- Copy the instructions from both .env.example files in the client and server.

Step 4: Connect the database and the data.

```bash
  cd server
  psql postgres -f db.sql
```

Step 5: Start the program!

Method 1: Have two servers running at the same time.

```bash
  cd client && npm start
  // open a new terminal
  cd server && npm start
```

Method 2: Have just one server running.

```bash
  cd client && npm run build
  cd server && npm run start
```

**Note:
Client server will be running on [http://localhost:5173](http://localhost:5173) and server will be running on [http://localhost:8080](http://localhost:8080).**
