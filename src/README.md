# LanguageExplorer - Sanskrit & Telugu Alphabet Demo

This is a small static demo that displays Sanskrit and Telugu characters with example words.

## Quick start (recommended)

1. Use a simple static server. From the `src/` folder run one of the following commands.

   Python 3:

   ```bash
   python3 -m http.server 8000
   ```

   Node (http-server) - install once:

   ```bash
   npm install -g http-server
   http-server -p 8000
   ```

2. Open the demo in your browser: [http://localhost:8000/sanskrit_telugu_explorer.html](http://localhost:8000/sanskrit_telugu_explorer.html)

## Notes

- The JavaScript is now an ES module (type="module"). Use a web server to avoid CORS/module loading issues from the `file://` protocol.
- Speech synthesis uses the browser's voices. If no voice is available for a language, speech will be skipped.
- To edit styles, see `css/sanskrit_telugu_explorer.css`.
