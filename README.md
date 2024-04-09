# Dynamic ASCII Art Generator

This project creates a dynamic ASCII art generator using p5.js, transforming noise into a beautiful display of ASCII characters. It's designed to run in the browser and showcases the versatility of using noise functions and custom contrast adjustments to create visually compelling patterns.

## Features

- Dynamic ASCII art generation based on Perlin noise.
- Custom contrast adjustment for more visually striking patterns.
- Configurable text size, spacing, and character set for varied artistic outputs.

## Setup

To run this project, you will need to have a local server environment or use an online IDE that supports p5.js sketches.


### Using VS Code Live Server

1. Clone this repository to your local machine.
2. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in Visual Studio Code.
3. Open the project in VS Code and click on the "Go Live" button at the bottom right corner of the window.

### Using a Local Server

1. Clone this repository to your local machine.
2. Ensure you have [Node.js](https://nodejs.org/) installed.
3. Navigate to the project directory and start a local server. If you have Python installed, you can quickly start a server by running one of these commands in your terminal:

    - For Python 3.x:
    ```bash
    python -m http.server
    ```
    - For Python 2.x:
    ```bash
    python -m SimpleHTTPServer
    ```

4. Open your web browser and go to `http://localhost:8000` (or whatever port your server is running on).

### Using an Online IDE

- You can also run this project using an online editor like [p5.js Web Editor](https://editor.p5js.org/). Simply copy the code into a new sketch in the editor.

## Usage

Once the project is running, you will see the dynamic ASCII art being generated in real-time. The project uses Perlin noise to create a base pattern, which is then converted into ASCII art by mapping the noise values to a set of characters.

## Customization

You can customize the appearance of the ASCII art by modifying the following variables:

- `fontSize`: Adjusts the size of the ASCII characters.
- `vSpacing` and `hSpacing`: Controls the vertical and horizontal spacing between characters.
- `chars`: A string containing the characters used to generate the ASCII art. Changing this string will alter the visual style of the output.

## Contributing

Contributions are welcome! If you have ideas for improvements or bug fixes, please feel free to fork this repository, make changes, and submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

