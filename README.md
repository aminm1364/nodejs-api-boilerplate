
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

2. Modify other configurations as needed in the `config` directory.

### Initiation of the Application
Inside the project's root folder, run
```bash
npm run init
```

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

