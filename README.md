# Playwright Automation Framework

This project is a UI and API automation framework built with [Playwright](https://playwright.dev/) for end-to-end testing of web applications.

## Features
- Page Object Model structure for maintainable tests
- Custom Playwright fixtures for reusable page objects
- Data-driven tests using external user data
- UI and API test separation
- Docker support for consistent test environments
- Automatic test reports and video/screenshots on failure

## Project Structure
```
playwright-automation-framework/
├── data/                # Test data files
├── pages/               # Page Object classes
├── tests/               # Test suites (UI and API)
├── utils/               # Custom fixtures and utilities
├── playwright.config.js # Playwright configuration
├── Dockerfile           # Docker setup
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Project dependencies and scripts
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm
- Docker (optional, for containerized runs)

### Install Dependencies
```sh
npm install
```

### Run UI Tests
```sh
npx playwright test tests/UI
```

### Run All Tests
```sh
npx playwright test
```

### View Test Report
After running tests, open the HTML report:
```sh
npx playwright show-report
```

### Run in Docker
Build and run tests in a container:
```sh
docker-compose up --build
```

## Custom Fixtures
Custom fixtures are defined in `utils/fixtures.js` to provide page objects to your tests:
```js
import { test } from '../utils/fixtures';

test('example', async ({ homePage }) => {
  await homePage.navigateTo();
});
```

## Adding New Page Objects
1. Create a new class in `pages/` (e.g., `MyPage.js`).
2. Add a fixture in `utils/fixtures.js`:
   ```js
   myPage: async ({ page }, use) => {
     const myPage = new MyPage(page);
     await use(myPage);
   }
   ```
3. Use in your tests.

## Test Data
User data is stored in `data/users.js` and imported in tests for data-driven scenarios.

## Contributing
Pull requests and issues are welcome!

## License
MIT
