# ask-mate-oop-backend

<a id="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a full-stack web application's frontend repository written in React.js using Tailwind and DaisyUI as a styling.
delivering a dynamic question-and-answer platform's frontend pages. Designed to enable users to post and respond to questions across diverse topics.

[Backend Repository](https://github.com/CodecoolGlobal/ask-mate-oop-java-dkisb)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React.js][React.js]][React-url]
- [![Tailwind][Tailwind]][Tailwind-url]
- [![DaisyUI][DaisyUI]][DaisyUI-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- vite
  ```sh
  npm install vite@latest
  ```
- tailwind
  ```sh
  npm install tailwindcss @tailwindcss/vite
  ```
- daisyUI
  ```sh
  npm i -D daisyui@latest
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
2. Configure the proxy for your backend in vite.config.js

```js
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      secure: true,
    },
  },
},
```

3. Add tailwind as a plugin to your configuration file

```js
plugins: [react(), tailwindcss()],
```

4. Import tailwind and daisyUI to your CSS file

```css
@import 'tailwindcss';
@plugin "daisyui";
```

5. Run the application using **npm run dev**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/bencsicszoli">
  <p>Zoltán Bencsics</p>
</a>

## Contact

Döme Marcell Kisbalázs - domekisb@gmail.com

Project Link: [https://github.com/dkisb/ask-mate-frontend](https://github.com/dkisb/ask-mate-frontend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind]: https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[DaisyUI]: https://img.shields.io/badge/DaisyUI-2B98F0?style=for-the-badge&logo=daisyui&logoColor=white
[DaisyUI-url]: https://daisyui.com/
