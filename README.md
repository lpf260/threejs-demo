# Three.js 3D Creeper Demo Project

This is a 3D demo project created with Three.js, showcasing a Minecraft-style Creeper model.

## Features

- 🎮 **3D Creeper Model**: Complete Creeper model built using Three.js geometries
- 🎥 **Camera Controls**: OrbitControls supporting mouse drag, zoom, and rotation
- 🔄 **Auto Rotation**: Scene automatically rotates for better viewing experience
- 📊 **Performance Monitoring**: Real-time FPS performance statistics
- 💡 **Lighting System**: Scene illuminated with spotlight
- 🎨 **Responsive Design**: Adapts to window size changes

## Project Structure

```
threejs-demo/
├── index.html          # Main HTML file
├── js/
│   ├── three.js       # Three.js library file
│   └── model.js       # Creeper model and scene logic
└── README.md          # Project documentation
```

## Quick Start

### Method 1: Direct Open

1. Clone or download this project
2. Open `index.html` using a local server (recommended: VS Code Live Server extension, or Python's `http.server`)

### Method 2: Using Local Server

```bash
# Using Python 3
python3 -m http.server 8000

# Or using Python 2
python -m SimpleHTTPServer 8000

# Or using Node.js http-server
npx http-server
```

Then visit `http://localhost:8000` in your browser

## Tech Stack

- **Three.js**: 3D graphics library
- **OrbitControls**: Camera orbit controller
- **Stats.js**: Performance monitoring tool

## Code Overview

### Creeper Model Construction

The project uses `BoxGeometry` to create each part of the Creeper:
- Head: 4x4x4 cube
- Body: 4x8x2 cube
- Arms: 5x1x1 cube (two pieces)
- Legs: 2x3x2 cube (four pieces)

All parts use `MeshPhongMaterial` with green color (0x00ff22).

### Scene Setup

- **Camera**: Perspective camera positioned at (30, 30, 30)
- **Lighting**: Spotlight located at (-10, 40, 30)
- **Floor**: 60x60 white plane
- **Axes**: 25-unit length helper axes

### Interactive Controls

- **Left Mouse Drag**: Rotate view
- **Mouse Wheel**: Zoom scene
- **Right Mouse Drag**: Pan view
- **Auto Rotation**: Scene continuously auto-rotates

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

Requires modern browsers with WebGL support.

## License

This project is for learning and demonstration purposes only.

## Author

legend

## Changelog

- Initial version: Created basic Creeper 3D model demo
