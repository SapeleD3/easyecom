<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">EasyEcomm</h3>

  <p align="center">
   A solution to the easyecom challenge using typescript nodejs and ejs
    <br />
    <a href="https://github.com/SapeleD3/easyecom"><strong>Explore »</strong></a>
    <br />
    <br />
    <a href="https://github.com/SapeleD3/easyecom">View Demo</a>
    ·
    <a href="https://github.com/SapeleD3/easyecom/issues">Report Bug</a>
    ·
    <a href="https://github.com/SapeleD3/easyecom/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Landing Page][landing]](https://example.com)
[![Paysheet Page][creatsheets]](https://example.com)

As a Task for the Easy Ecomm interview Challenge. utilizing the Google calender API and manipulating given paysheets file

### Built With

with Typescript Nodejs for base language using the MVC model with ejes for view for the project

- [typescript](https://www.typescriptlang.org/)
- [Nodejs](https://nodejs.org/en/)
- [xlsx](https://www.npmjs.com/package/xlsx)
- [Googleapis](https://console.developers.google.com/apis)
- [axios](https://www.npmjs.com/package/axios)
- [Google Developer Console](https://console.developers.google.com/apis)
- [bootstrap 4](https://getbootstrap.com/)
- [express](https://www.npmjs.com/package/express)
- [javascript](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [ejs/html](https://ejs.co/)
- [oauth Playground](https://developers.google.com/oauthplayground/#step1&scopes=https%3A//www.googleapis.com/auth/adwords&url=https%3A//&content_type=application/json&http_method=GET&useDefaultOauthCred=checked&oauthEndpointSelect=Google&oauthAuthEndpointValue=https%3A//accounts.google.com/o/oauth2/v2/auth&oauthTokenEndpointValue=https%3A//oauth2.googleapis.com/token&includeCredentials=unchecked&accessTokenType=bearer&autoRefreshToken=unchecked&accessType=offline&forceAprovalPrompt=checked&response_type=code)

<!-- GETTING STARTED -->

## Getting Started

Setting up this project locally

### Prerequisites

- npm

```sh
npm install npm@latest -g
```

### Installation

```sh
NOTE: Both credentials.json and the .env values a required and are not neccessarily same client_id and client_secrets
```

1. Use the step by step process to acquire a credentials.json file and store in Projects base firectory - as desktop app [Google Calenderr Api Quickstart](https://developers.google.com/calendar/quickstart/nodejs)

2. Goto google developer console and enable the google calender api create a new oauth credentials and copy the CLIENT_ID and CLIENT_SECRETS and store them in a .env file in Profject directory [Google developer console](https://console.developers.google.com/apis/)

3. Goto Oauth Playgorund and generate a REFRESH_TOKEN for environment virable [oauth Playground](https://developers.google.com/oauthplayground/#step1&scopes=https%3A//www.googleapis.com/auth/adwords&url=https%3A//&content_type=application/json&http_method=GET&useDefaultOauthCred=checked&oauthEndpointSelect=Google&oauthAuthEndpointValue=https%3A//accounts.google.com/o/oauth2/v2/auth&oauthTokenEndpointValue=https%3A//oauth2.googleapis.com/token&includeCredentials=unchecked&accessTokenType=bearer&autoRefreshToken=unchecked&accessType=offline&forceAprovalPrompt=checked&response_type=code)

   also follow this guide in generating your refresh token [learn to use Oauth playground](https://developers.google.com/google-ads/api/docs/oauth/playground)

[![Landing Page][oauth]](https://example.com)
to get a similar response to this
[![Landing Page][refresh]](https://example.com)

4. Clone the repo

```sh
git clone https://github.com/SapeleD3/easyecom.git
```

4. cd into easyecom in Bash

```sh
cd easyecom
```

5. Install NPM packages

```sh
npm install
```

6. Enter your API in `.env` file

```JS
PORT=
CLIENT_ID=
CLIENT_SECRET=
REFRESH_TOKEN=
```

<!-- USAGE EXAMPLES -->

## Usage

[![Landing Page][landing]](https://example.com)
[![verify Page][verify]](https://example.com)
[![success Page][success]](https://example.com)

```sh
ensure to have a json viewer browser extension
```

[![event Page][events]](https://example.com)
[![Paysheet Page][creatsheets]](https://example.com)
[![Paysheet][sheets]](https://example.com)

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

SapeleD3

```
> Sapele Moses
```

Project Link: [https://github.com/SapeleD3/easyecom](https://github.com/SapeleD3/easyecom)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Easy Ecom]()

[landing]: landing.png
[verify]: verify.png
[events]: events.png
[success]: success.png
[creatsheets]: createsheet.png
[sheets]: sheets.png
[oauth]: oauth.png
[refresh]: refresh.png
