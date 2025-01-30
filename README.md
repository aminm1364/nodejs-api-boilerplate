# 🚀 Node.js API Boilerplate

A **robust and flexible template** designed as a starting point for building modern **Node.js applications**. This boilerplate follows best practices for security, scalability, and maintainability, ensuring a streamlined development process.

&#x20; &#x20;

---

## 📌 Features

✅ **Express.js Framework** - Lightweight and efficient web framework for Node.js.\
✅ **MongoDB Integration** - Seamless support for MongoDB to handle data storage.\
✅ **Validation** - Input validation to ensure reliability and data integrity.\
✅ **Authentication & Authorization** - Secure JWT-based authentication and role-based access control.\
✅ **Logging** - Structured logging to effectively debug and monitor application behavior.\
✅ **Configuration Management** - Organized environment-specific settings.\
✅ **Pug Templating Engine** - Render dynamic views efficiently with Pug.\
✅ **Scalable Folder Structure** - Well-organized codebase for maintainability.

---

## 🚀 Getting Started

### **Prerequisites**

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local or hosted)
- [Nodemon](https://www.npmjs.com/package/nodemon) (optional but recommended)

### **Installation**

1. Clone the repository:
   ```sh
   git clone https://github.com/aminm1364/nodejs-api-boilerplate.git
   ```
2. Navigate to the project directory:
   ```sh
   cd nodejs-api-boilerplate
   ```
3. Install dependencies:
   ```sh
   npm run init
   ```

   For Mac and Linux users you may need to give permissions to init the project:
   ```sh
   sudo npm run init
   ```

### **Configuration**

1. Update your environment settings in the `config` directory (`default.json` and `custom-environment-variables.json`). Example:
   ```json
   {
     "jwtPrivateKey": "THIS_IS_ONLY_A_TEMPLATE_CHANGE_IT_FOR_PRODUCTION",
     "app_port": "1364",
     "db_name": "myapp_db",
     "debug-server": "127.0.0.1",
     "debug-server-port": "27017",
     "logging-server": "127.0.0.1",
     "logging-server-port": "27017"
   }
   ```
2. Set **environment variables** for items in `custom-environment-variables.json` (optional).
3. Modify other configurations as needed in the `config` directory.
4. Make sure you have ```MongoDB``` installed and available and that the connection is correctly set.
   For Mac and Linux users, you may need to start the ```MongoDB``` service explicitly. For community version for instance you may need to run:
   ```sh
   brew services start mongodb-community
   ```

### **Running the Application**

Start the development server:

```sh
npm run start
```

Access the application at `http://localhost:1364` (default port: `1364`).

---

## 📁 Folder Structure

```plaintext
nodejs-api-boilerplate/
├── config/                  # Application configurations
├── logs/                    # Log files
├── middleware/              # Custom Express middleware
├── models/                  # Database models
├── routes/                  # API route handlers
├── startup/                 # Initialization scripts and integrations
├── tests/                   # Test suite
  ├── integration/           # Integration tests
  ├── unit/                  # Unit tests
├── views/                   # Pug templates for rendering UI
├── index.js                 # Application entry point
├── package.json             # Project metadata and dependencies
```

---

## 👥 Contribution

Contributions are welcome! 🎉 If you have suggestions or improvements:

1. **Fork the repository**
2. **Create a new feature branch**: `git checkout -b feature-new`
3. **Commit your changes**: `git commit -m "Added new feature"`
4. **Push the branch**: `git push origin feature-new`
5. **Open a Pull Request** 🎯

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

**Happy coding!** 🚀 *AminM*
