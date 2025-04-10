# 🎬📚 Movie and Book Finder

A sleek, dark-themed web application to search for your favorite **movies** and **books** using the OMDb and Google Books APIs. Built with **Node.js**, **Express**, and styled using **responsive, animated CSS** featuring **glassmorphism** and **dark mode**.

## 🌟 Features

- 🔍 Search for movies and books in one place
- 🎥 View movie details like rating, release year, plot, and poster
- 📖 Get book info like author, description, and thumbnail
- 🌑 Dark mode with glassmorphism UI
- 📱 Fully responsive design
- 💨 Smooth animations and modals
- 📂 MVC structure (Models, Views, Controllers, Routes)

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS (Dark Mode + Glassmorphism), Vanilla JS
- **Backend**: Node.js, Express.js
- **APIs**:
  - [OMDb API](http://www.omdbapi.com/)
  - [Google Books API](https://developers.google.com/books)

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/swappy2122/movie-book-finder.git
cd movie-book-finder
```
### 2. Install dependencies
```bash
npm install
```
### 3. Create a .env file
```bash
OMDB_API_KEY=your_omdb_api_key
GOOGLE_BOOKS_API_KEY=your_google_books_api_key
```
### 4. Start the server
```bash
npm start
```
### 📁 Project Structure
```bash
Movie and Book Finder/
├── public/               # Static assets (CSS, JS, images)
├── views/                # EJS templates (or HTML if used)
├── routes/               # Express routes
├── controllers/          # Logic for handling API requests
├── models/               # API handler or schemas (if used)
├── .env                  # API keys
├── server.js             # Main entry point
└── README.md             # Project info
```
### 🧪 API Usage

OMDb: http://www.omdbapi.com/?t=Inception&apikey=yourkey

Google Books: https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=yourkey

