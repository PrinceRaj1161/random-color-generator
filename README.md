# Link 
https://princeraj1161.github.io/random-color-generator/


# Background Color Changer

This is a simple web-based project that allows you to change the background color of the page at regular intervals using the "Start" and "Stop" buttons.

## Features

- Click the **Start** button to begin changing the background color every second.
- Click the **Stop** button to stop the color-changing process.
- The background color is randomly generated using hexadecimal color codes.

## How It Works

- The `setInterval` function is used to repeatedly call the `chooseColor` function every 1000 milliseconds (1 second).
- The `chooseColor` function generates a random hexadecimal color code and applies it to the background of the page.
- The `clearInterval` function stops the color-changing process when the **Stop** button is clicked.

## Code Structure

- **HTML**: Contains the "Start" and "Stop" buttons.
- **JavaScript**: Handles the logic for starting and stopping the color-changing process.


## Setup

1. **Clone the repository** (if applicable):
   ```bash
   git clone https://github.com/princeraj1161/random-color-generator.git
   cd random-color-generator 
   ```

2. **Open the project**:
   - Open the `index.html` file in your browser.

3. **Use the buttons**:
   - Click the **Start** button to begin changing the background color.
   - Click the **Stop** button to stop the color-changing process.

