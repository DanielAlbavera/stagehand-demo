# Stagehand Workshop - EPAM 2026

Welcome to the Stage Hand Workshop repository! This project is designed to help you efficiently manage language models using popular providers like OpenAI, Azure, Google, and more. Additionally, it includes the option to use local models via Ollama.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (recommended version ≥ 16) or use **nvm** to manage Node.js versions.
- You can install `nvm` by following [this link](https://github.com/nvm-sh/nvm).

Make sure your system is properly set up to run Node.js-based projects.

---

## Steps to Initialize the Project

To set up and start using this repository, follow the steps below:

### 1. Clone or Fork the Repository

If you plan to modify this repository, it is recommended to fork it first on GitHub. Then, clone your forked repository to your local machine:
```bash
git clone https://github.com/DanielAlbavera/stagehand-demo.git
cd stagehand-demo
```

### 2. Install Dependencies

1.- Navigate to the project directory if you're not already there:

```bash
cd stagehand-demo
```

2.- Install all the required dependencies by running:

```bash
npm install
```

### 3. Use an API Key from a Cloud Provider (Optional)

If you are using a provider like OpenAI, Azure, Google, or any other recognized LLM provider, you will need an API Key. Follow these steps to set it up:

1.- Create a new file in the root directory of the project called .env (you can edit the .env.example file)
2.- Add your API Key to the .env file in the following format:

```plaintext
API_KEY=your_api_key_here
```

3.- Replace your_api_key_here with the actual API Key that you receive from the LLM provider's console or dashboard.

### 4. Configure Local Models with Ollama (If No API Key is Available)

If you do not have access to an API Key, you can still use Ollama, a tool that allows you to run language models locally on your own machine. Follow these steps to set up Ollama:

Download and install Ollama from their [official website](https://ollama.com/download).
Follow the installation instructions provided on the website for your operating system.
Verify that Ollama is running on your system by executing the necessary commands or testing it with the default models.
Configure this project to interact with Ollama's local models based on the instructions provided in the Ollama documentation.

### 5. Project Structure
Here is the structure of this repository:

```plaintext
stagehand-demo/
|-- src/               # Contains the source code and core logic of the project.
|-- .env.example       # An example configuration file for environment variables.
|-- package.json       # Includes the project dependencies and available scripts.
|-- README.md          # Documentation for this repository.
```
