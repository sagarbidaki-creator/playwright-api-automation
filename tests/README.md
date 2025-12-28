---

## 🔹 Notes on UI Execution

I initially tried to run the UI automation across all three Playwright browsers
(Chromium, Firefox, and WebKit).

However, since DemoQA is a public demo website, the pages were quite unstable and
the login screen did not load consistently across all browsers. Because of this,
the UI tests were not reliable in every run.

To keep the automation meaningful and avoid false failures, I focused on validating
the complete UI flow mainly in **Chromium**, which is commonly used in real projects
when dealing with unstable test environments.

---

## 🔹 Learning Journey

I am new to Playwright and currently in the learning phase of UI and API automation.
I practice automation regularly, write test scripts, and try to understand best
practices through hands-on coding.

I also use documentation, tutorials, and AI-based tools as learning aids to improve
my problem-solving skills and automation approach. This repository reflects my
current learning progress and my efforts to continuously improve as an automation
tester.

/**
 * NOTE:
 * DemoQA login page is flaky and may not render input fields consistently
 * due to third-party scripts, ads, or network issues.
 * 
 * The test implements the complete intended UI automation flow:
 * - Login
 * - Validation
 * - Book search
 * - Data extraction
 * - File writing
 * - Logout
 * 
 * Execution may fail depending on site availability.
 */

