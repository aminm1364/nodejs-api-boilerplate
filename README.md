# Node.js Template

A robust and flexible template project to serve as a starting point for your Node.js applications. This template is designed to streamline development and follows best practices for modern web applications.

## Features

- **Express.js Framework**: Lightweight and fast web application framework.
- **MongoDB Integration**: Built-in support for MongoDB to handle data storage and retrieval.
- **Validation**: Data validation to ensure robustness and reliability.
- **Authentication & Authorization**: Secure user authentication and role-based access control.
- **Logging**: Comprehensive logging to monitor and debug your application effectively.
- **Configurations**: Easy management of environment-specific settings.
- **Pug Templating Engine**: Render dynamic views efficiently with Pug.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local or hosted)
- [Nodemon](https://www.npmjs.com/package/nodemon) (Install it globally to your system path)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aminm1364/nodejs_template.git
   ```
2. Navigate to the project directory:
   ```bash
   cd nodejs_template
   ```
3. Install dependencies:
   ```bash
   npm run init
   ```

### Configuration

1. Set your environment configuration on ```default.json``` and ```custom-environment-variables.json``` files in the ```config``` directory and set the necessary environment variables. Example:
   ```env
   "jwtPrivateKey": "THIS_IS_ONLY_A_TEMPLATE_DO_NOT_USE_FOR_PRODUCTION",
   "app_port": "1364",
   "db_name": "myapp_db",
   "debug-server": "127.0.0.1",
   "debug-server-port": "27017",
   "logging-server": "127.0.0.1",
   "logging-server-port": "27017"
   ```
2. Create ```Environment variables``` for each item of the ```custom-environment-variables.json``` file. (optional)

3. Modify other configurations as needed in the `config` directory.

### Running the Application

Start the development server:
```bash
npm run start
```

Access the application at `http://localhost:1364` if the default port is still ```1364```.

## Folder Structure

```plaintext
nodejs_template/
├── config/                  # Application configurations
├── logs/                    # log files folder
├── middleware/              # Custom middleware
├── models/                  # Database models
├── routes/                  # API routes
├── startup/                 # Startup configurations and integrations
├── tests/                   # test files root folder
  ├── integration/           # Placement for integration test files
  ├── unit/                  # Placement for Unit test files
├── views/                   # Pug templates
├── index.js                 # Application entry point
├── package.json             # Project metadata and dependencies
```

## Contribution

Contributions are welcome! If you have ideas or improvements, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Happy coding!**
_AminM_

