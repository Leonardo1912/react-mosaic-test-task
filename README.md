# React Mosaic Test Task

Dashboard application built with **React**, **TypeScript**, **Vite**, **TailwindCSS**, **react-mosaic-component**, and **react-dnd**.

The app displays **3 Company Information widgets** that fetch and render data from a fake API (for example, from `companies-lookup.json`).  
Optionally, a ticker dropdown can be used to choose which company data is shown in each widget.

---

## 1. How to Run the App

### 1.1. Run Locally (without Docker)

#### Prerequisites

- **Node.js** (LTS recommended, e.g. 20+)
- **Yarn** installed globally

#### Steps

1. **Clone the repository**

   ```bash
   git clone <your-repo-url> react-mosaic-test-task
   cd react-mosaic-test-task
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Start the development server**

   ```bash
   yarn dev
   ```

4. **Open the app in the browser**

   By default Vite runs on:

    - <http://localhost:5173>

#### Build & Preview Production Version

1. **Build the app**

   ```bash
   yarn build
   ```

2. **Preview the production build**

   ```bash
   yarn preview
   ```

3. Open the preview URL (usually):

    - <http://localhost:4173>

---

### 1.2. Run with Docker

The project is containerized using a **multi-stage Docker build**:

- Stage 1: Build the app using Node + Yarn (Vite production build).
- Stage 2: Serve static files using Nginx.

#### Build Docker image

From the project root (where the `Dockerfile` is located):

```bash
docker build -t react-mosaic-test-task .
```

#### Run Docker container

```bash
docker run --rm -p 4173:80 react-mosaic-test-task
```

Then open in the browser:

- <http://localhost:4173>

You can change the host port (left side of `-p`). For example:

```bash
docker run --rm -p 8080:80 react-mosaic-test-task
```

Then open:

- <http://localhost:8080>

---

## 2. Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **TailwindCSS**
- **react-mosaic-component**
- **react-dnd** and **react-dnd-html5-backend**
- **Yarn**
- **Docker + Nginx** (for containerized production build)

---

## 3. Project Structure (overview)

```txt
.
├── src
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── components/...
├── public
│   └── companies-lookup.json       # fake API data
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── Dockerfile
├── nginx.conf
└── README.md
```

---

## 4. Scripts

Available Yarn scripts:

```bash
yarn dev      # start development server
yarn build    # build production bundle
yarn preview  # preview the built app locally
yarn lint     # run ESLint checks
```

---

## 5. Company Information Widgets

- **Data source**: fake API JSON file, for example `public/companies-lookup.json`.
- Each widget:
    - Fetches data for the selected company from the fake API.
    - Displays company name and additional information (e.g. ticker, description, sector, etc.).
- Optional:
    - Dropdown with **tickers** to select which company is displayed in a widget.
- Layout:
    - Widgets are arranged using **react-mosaic-component**.
    - Drag-and-drop resizing and layout management is implemented via **react-dnd**.

---

## 6. Responsive Design

- **TailwindCSS** utility classes are used to style the layout and widgets.
- The dashboard adapts to different screen sizes (desktop, tablet, mobile).

---

## 7. Notes

- No inline comments are used in the code; explanations and usage details are provided in this README.
- The Docker image builds the production bundle and serves it with Nginx, which can be used both for local testing and deployment.
