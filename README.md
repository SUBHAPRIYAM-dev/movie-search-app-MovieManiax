# 🎬 **MovieManiax** - Movie & Web Series Search App

**CineQuest** is a movie and web series search application built using React. It allows users to search for movies and web series by name, view basic information like the title and poster, and get detailed information such as the director, cast, rating, and a brief description by fetching data from the OMDB API.

## 🚀 Features

- **Search Functionality**: Search for any movie or web series by name.
- **Movie Listings**: View the movie's poster and title in a responsive grid format.
- **Detailed Information**: Click on a movie to view more details such as director, cast, rating, and description.
- **Responsive Design**: The UI is designed to look good on all devices using dynamic CSS.
- **API Integration**: Uses the OMDB API to fetch real-time movie and web series data.

## 🛠️ Technologies Used

- **React**: Frontend framework for building the user interface.
- **Axios**: For making HTTP requests to the OMDB API.
- **React Router**: For navigation between pages.
- **CSS (Flexbox)**: For dynamic, responsive layouts.
- **OMDB API**: For fetching movie and web series data.

## 📦 Installation

### Prerequisites

- Node.js (v12+)
- npm or yarn

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/cinequest.git
   cd cinequest
   ```

2. **Install dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Create a `.env` file**  
   In the root of your project, create a `.env` file and add your OMDB API key:
   ```
   REACT_APP_OMDB_API_KEY=your_omdb_api_key
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```
   Or using yarn:
   ```bash
   yarn start
   ```

   The app will now run on `http://localhost:3000`.

## 🌐 Deployment

1. **Build the project for production:**
   ```bash
   npm run build
   ```

2. **Deploy the build folder to any static hosting service** (e.g., GitHub Pages, Netlify, Vercel).

## 📄 API Information

This project uses the OMDB API to fetch data for movies and web series.  
You can get your free OMDB API key [here](https://www.omdbapi.com/apikey.aspx).

To use the API in the project, the following request is made:

```bash
https://www.omdbapi.com/?s={searchQuery}&apikey={your_omdb_api_key}
```

## 👨‍💻 Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

## 👥 Author

- **Your Name** - [GitHub Profile](https://github.com/SUBHAPRIYAM-dev)
