# 🌐 WebVision.AI

**WebVision.AI** is an AI-powered platform for website analysis and optimization, leveraging **Computer Vision** and **Large Language Models (LLMs)**. It captures full-page website screenshots, segments key sections, and provides data-driven recommendations for design, text, and usability improvements.

Developed by **Team The Axios** for the **Smart Bengal Hackathon 2025**, WebVision.AI empowers businesses and developers to enhance website performance through intelligent insights.

---


## 📽️ Project Demonstration

- 📊 **[Pitch Video](https://youtu.be/SJIDJEk_YNI?si=pLcMjdCL5tSI7y80)**  

---

## 🎯 Key Purpose

**WebVision.AI** was created to support businesses and developers in **West Bengal** by offering an automated solution for website optimization. It solves the problem of poor website design, readability, and SEO in regions lacking access to advanced website analysis tools. The platform encourages enhanced digital presence and user engagement.

---

## 🛠 Tech Stack

- **Frontend**:  
  - Vite  
  - React  
  - TypeScript  
  - Tailwind CSS  
  - PostCSS  
  - ESLint  
  - Vercel  

- **Backend**:  
  - Python  
  - OpenCV, PIL, Transformers  
  - Flask  
  - Jupyter-compatible preprocessing

---

## 📂 Project Structure

### Frontend – `WebVisionAI-Frontend/`

```
WebVisionAI-Frontend/
├── public/                   # Static assets (images, favicon, etc.)
├── src/                      # React source code
│   ├── segmentation/         # Backend code & dataset (Python scripts)
│   │   ├── main.py           # Main backend file (Flask server)
│   │   └── dataset/          # Website datasets for segmentation
│   └── components.json       # Component configurations
├── .gitattributes            # Git attributes for file handling
├── .gitignore                # Git ignore rules
├── bun.lockb                 # Bun package manager lock file
├── eslint.config.js          # ESLint configuration
├── index.html                # Vite entry point HTML
├── package-lock.json         # npm dependency lock file
├── package.json              # Project metadata and dependencies
├── postcss.config.js         # PostCSS configuration for Tailwind
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.app.json         # TypeScript app configuration
├── tsconfig.json             # Base TypeScript configuration
├── tsconfig.node.json        # TypeScript Node configuration
└── vite.config.ts            # Vite configuration
```

> 🔁 **Note:** The `segmentation/` folder contains Python scripts (`main.py`) and datasets for backend analysis.

---

## 🔧 Setup Instructions

### 1. Clone the repository:

```bash
git clone https://github.com/TheAxios/WebVisionAI-Frontend
cd WebVisionAI-Frontend
```

### 2. Backend Setup (Segmentation):

Navigate to the `segmentation/` folder and run the backend server:

```bash
cd src/segmentation
python main.py
```

This runs the Flask backend responsible for analysis and screenshot processing.

### 3. Frontend Setup:

In the project root (`WebVisionAI-Frontend/`), install dependencies and start the development server:

```bash
npm install
npm start
```

### 4. Open in Browser:

```
http://localhost:5173
```

### 5. Production Build:

```bash
npm run build
```

---

## 📡 Features

- 🖼️ Full-page website screenshot capture  
- 🧩 AI-driven section segmentation  
- 📝 Text readability and SEO analysis  
- 🎨 Design improvement recommendations  
- 🖌️ Content and image optimization  
- ⚡ Fast and responsive UI  

---

## 🏆 Achievements

- ✅ Finalist at **Smart Bengal Hackathon 2025**  
- 🧠 Recognized for innovation in **AI-powered website analysis**

---

## 👨‍💻 Team Members – *Team The Axios*

| Name                         | Branch                              | Degree | Year | University                         | Role        |
|------------------------------|--------------------------------------|--------|------|-------------------------------------|-------------|
| **Srinjoy Pramanik**         | Computer Science & Engineering       | B.Tech | 3rd  | Netaji Subhash Engineering College | Team Leader |
| **Anubhav Dey**              | Computer Science & Business Systems  | B.Tech | 3rd  | Netaji Subhash Engineering College | Member      |
| **Syed Mohammed Musharraf**  | Computer Science & Business Systems  | B.Tech | 3rd  | Netaji Subhash Engineering College | Member      |
| **Ayoshi Bose**              | Artificial Intelligence & ML         | B.Tech | 2nd  | Netaji Subhash Engineering College | Member      |

---



## 📫 Contact

Feel free to reach out for any queries or collaborations!

- 📧 Email: *srinjoypramanik2004@gmail.com*

> Contributions and issue reports are welcome!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
