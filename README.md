# 🌦️ Weather App
A Single Page Application providing real-time weather updates using OpenWeather API.

## 🚀 Installation
Follow these steps to install and run the Weather App on your local machine.

### **1. Clone the Repository**
```bash
git clone https://github.com/Bhabin-Chudal/Weather_API.git
cd weather-app
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Set Up Environment Variables**
Create a `.env` file in the root directory and add your OpenWeather API key:
```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

### **4. Start the Development Server**
```bash
npm run dev
```
The application will run on `http://localhost:5173/`.

---

## ⚙️ Features
- 🌍 **Real-Time Weather Data** – Fetches live weather updates from OpenWeather API.
- 🔍 **Search Functionality** – Users can search for weather conditions in any city.
- 🎨 **Interactive UI** – Designed with **MUI (Material-UI)** for a responsive experience.
- 🌡️ **Dynamic Weather Visualization** – Displays weather conditions based on API response.


---

## 💻 Technologies Used
### **Frontend**
- React.js
- MUI (Material-UI)

### **API & Data Handling**
- OpenWeather API
- React Hooks (`useState`)

---

---

## 📜 Notes
- You **must provide an OpenWeather API key** in the `.env` file.
- Ensure you **restart the app** after adding the API key.
- This project is **fully responsive** and works on mobile and desktop.
