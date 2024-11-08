# 💰 Budget Calculator

## Project Overview
This is a client-side web application built as a Budget Calculator. It is a single-page application (SPA) that allows users to input their income and expenses, view a summary, and visualize the budget distribution using a pie chart. The app also provides a toggle feature for light and dark modes, enhancing the overall user experience.

## 🌟 Key Features
- **Client-side Processing**: All calculations and data handling are done entirely in the browser with JavaScript, HTML, and CSS.
- **Interactive User Interface**: Users can input income and expenses, and the app displays a dynamic summary. Alerts notify users if the input is invalid or successfully saved.
- **Single-page Navigation**: No page reloads; sections are dynamically displayed based on user interaction.
- **Chart.js Integration**: A pie chart is used to visually represent the distribution of expenses, offering an intuitive way to track finances.
- **Theme Toggle**: Users can toggle between light and dark themes to personalize their experience.
- **Local State Management**: User data (income and expenses) is stored in global JavaScript variables, making the app responsive to inputs until the page is refreshed.

## 💻 Technologies Used
The following technologies were used in the development of this application:
- **HTML5**: Used for the basic structure and layout of the application.
- **CSS3**: Styled the page, managed responsive design, and implemented the light/dark mode themes.
- **JavaScript**: Used for the app’s logic, including handling user input, managing the state, and dynamically updating the UI without page reloads.
- **Chart.js**: A JavaScript library used to render the pie chart for visualizing the budget distribution.
- **Font Awesome**: A library used to provide icons, including the theme toggle button.

## 🔍 Features and How They Work

### 1. 💵 Income and Expenses Input
Users can input their total income and various expense categories, including:
- Housing 🏠
- Utilities ⚡
- Transportation 🚗
- Food 🍲
- Entertainment 🎉
- Other ✏️

### 2. 📊 Budget Summary
Once the user inputs both income and expenses, the application calculates the total expenses, the remaining budget (income minus expenses), and provides a color-coded summary. The color-coding indicates:
- **Green**: A surplus (positive remaining budget).
- **Orange**: A balanced budget (remaining budget equals zero).
- **Red**: Exceeded budget (negative remaining budget).

### 3. 🥧 Pie Chart
The app uses Chart.js to display the distribution of expenses in a pie chart. Each category is represented by a section, and the chart updates as users input new data.

### 4. 🌗 Light and Dark Mode
The app supports light mode and dark mode to cater to user preferences. Users can toggle between themes at any time using the moon icon (🌙) in the header.

### 5. 🔔 Alerts
The app provides feedback to users:
- **Invalid Input**: Alerts if the user tries to enter non-numeric or negative values for income and expenses.
- **Successful Data Saving**: Confirmation alerts when income or expenses are successfully saved.

### 6. ⚙️ Local State Management
The app stores user data temporarily using JavaScript variables. While this data is retained within the session, it is cleared when the page is refreshed.

## 🚀 Installation
To run the Budget Calculator locally:

1. Clone this repository:

    ```bash
    git clone https://github.com/FranklynPedro/BudgetCalculatorSPA.git
    ```

2. Navigate to the project folder:

    ```bash
    cd BudgetCalculatorSPA
    ```

3. Open the `index.html` file in your browser to start using the application.

No server setup is required, as this is a client-side application.

## 📐 Usage

### Inputting Data
1. Enter your total income in the "Enter Income" section.
2. Fill in the expense categories in the "Enter Expenses" section.
3. Once both income and expenses are entered, the Budget Summary will be shown, including the pie chart.

### Switching Themes
Use the moon icon (🌙) in the header to toggle between light mode and dark mode.

### Viewing the Chart
The pie chart will display your expenses as a visual representation of how your budget is allocated.

## 🌐 Live Demo
Try the Budget Calculator online! You can view the [live demo here](https://franklynpedro.github.io/BudgetCalculatorSPA/).

## 🤝 Contributing
If you'd like to contribute to this project, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:
    ```bash
    git checkout -b feature-branch
    ```
3. **Commit your changes**:
    ```bash
    git commit -m 'Add new feature'
    ```
4. **Push to your branch**:
    ```bash
    git push origin feature-branch
    ```
5. **Open a pull request**.

## 📜 License
This project is open source and available under the MIT License.

## 🙏 Acknowledgements
- **[Chart.js](https://www.chartjs.org/)** for providing the pie chart visualization.
- **[W3Schools](https://www.w3schools.com/)** and **[GeeksforGeeks](https://www.geeksforgeeks.org/)** for resources on JavaScript and CSS concepts used in the project.
- **[Font Awesome](https://fontawesome.com/)** for icons used in the theme toggle button.

## 🌱 Future Improvements
While this app is functional as a personal finance tool, several improvements could be made for scaling and persistence:

- **Backend Integration**: Implement a backend server (using Node.js, Python, etc.) to store income and expense data persistently.
- **User Authentication**: Add user accounts and authentication for saving data across multiple sessions or devices.
- **Expense Categories Customization**: Allow users to add custom categories for their expenses.
- **Mobile App**: Create a mobile version of the app for iOS and Android users.
