# 📝 Notes API

A simple RESTful API for managing notes built using Node.js, Express, and MongoDB.

---

## 🚀 Features

* Create a new note
* Get all notes
* Get single note
* Update note
* Delete note

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## ⚙️ Installation

1. Clone the repository:

```
git clone https://github.com/your-username/Note-Api.git
```

2. Navigate to project folder:

```
cd Note-Api
```

3. Install dependencies:

```
npm install
```

4. Create a `.env` file and add:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

5. Start the server:

```
npm start
```

---

## 📌 API Endpoints

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/notes     | Get all notes   |
| GET    | /api/notes/:id | Get single note |
| POST   | /api/notes     | Create note     |
| PUT    | /api/notes/:id | Update note     |
| DELETE | /api/notes/:id | Delete note     |

---

## 👨‍💻 Author

* Sandeep Verma

---

## ⭐ Show your support

Give a ⭐ if you like this project!
