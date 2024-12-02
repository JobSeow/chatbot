<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Chat</h3>

  <p align="center">
    B Capital Chatbot
    <br />
    
  </p>
</div>

  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Decisions</a></li>
        <ul>
        <li><a href="#arcitecture">Architecture</a></li>
        <li><a href="#authentication">User authentication</a></li>
        <li><a href="#function">Functional requirements</a></li>
        <li><a href="#non-functional">Non-Functional requirements</a></li>
          <li><a href="#hosting">Hosting</a></li>
      </ul>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>

  </ol>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

There are many great README templates available on GitHub; however, I didn't find one that really suited my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.

Here's why:

-   Your time should be focused on creating something amazing. A project that solves a problem and helps others
-   You shouldn't be doing the same tasks over and over like creating a README from scratch
-   You should implement DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

Use the `BLANK_README.md` to get started.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

-   [![Next][Next.js]][Next-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

-   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
    ```sh
    git clone https://github.com/github_username/repo_name.git
    ```
3. Install NPM packages
    ```sh
    npm install
    ```
4. Enter your API in `config.js`
    ```js
    const API_KEY = 'ENTER YOUR API'
    ```
5. Change git remote url to avoid accidental pushes to base project
    ```sh
    git remote set-url origin github_username/repo_name
    git remote -v # confirm the changes
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

# Decisions

Using this space to show the architectural decisions made and why

## Which LLM Model to use?

| API (OpenAI GPT)                                                                                                                           | API (Antrophic Claude)                                                                                                        | API (Google Gemini)                                                                                                   | Open-Source (Meta LLaMA/Hugging Face)                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - **Strengths**: High language fluency, pre-trained knowledge, API support.<br>- **Cons**: Usage costs and limited fine-tuning options<br> | - **Strengths**: Emphasizes safe and ethical outputs, good at reasoning.<br>- **Cons**: Limited fine-tuning capabilities.<br> | - Strengths:<br>Gemini can process and generate both text and images<br>- **Cons**: Limited fine-tuning capabilities. | - **Strengths**: Community-supported, open-source, a large variety of pre-trained models.<br><br>- **Cons**: Deployment can be resource-intensive, and some models may require additional fine-tuning. |
| Good for: General purpose chatbots                                                                                                         | Good for: Applications requiring cautious responses and those focused on user safety.                                         | Good for:<br>Multi Modal situations                                                                                   | - Good for: Experimentation and custom deployments                                                                                                                                                     |

## Cost:


![screenshot](./public/cost.png)

## Decision made: Given the brief analysis above, I went ahead with ChatGPT API service. Since its suitable for general purpose chat services, priced comptitively for certain models and because of my familiarity and trust with it, as i use it on a daily basis




# Backend framework of choice


-   [ ] Frontend framewok of choice
-   [ ] DB choice

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors:

<a href="https://github.com/othneildrew/Best-README-Template/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=othneildrew/Best-README-Template" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

<p align="right">(<a href="#readme-top">back to top</a>)</p>
