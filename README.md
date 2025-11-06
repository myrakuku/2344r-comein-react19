## Google Tag Manager
    - Added GTM not AW 
    - Track Whatsapp button (not yet)


## React install

"react": "^19.1.0",
"react-dom": "^19.1.0",
"react-router-dom": "^6.30.1",

    npm install react@19.1 react-dom@19.1
    npm install react-router-dom


## Tailwind CSS

"tailwindcss": "^3.4.18"

    npm install -D tailwindcss@3
    npx tailwindcss init

## React icons

    npm install react-icons


## Create Sitemap & robots

    your-react-project/
    ├── public/
    ├── src/
    ├── scripts/
    │   ├── sitemap-generator.js  # ✅ 
    │   └── build-sitemap.js      # ✅ 
    ├── package.json

    "scripts": {
    "start": "react-scripts start",
    "build": "npm run build:sitemap && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:sitemap": "node scripts/build-sitemap.js",
    "sitemap": "node scripts/build-sitemap.js"
    },

    // run when all done
    npm run sitemap
