
📝 React To-Do Notepad App

A simple and elegant React-based To-Do Notepad built with Vite and Tailwind CSS, designed to manage tasks efficiently using core React concepts like useState, useRef, and useEffect. This project showcases practical skills in front-end development and local storage management.

🚀 Features

* Add, update, and delete tasks
* Persist data using localStorage (no data loss on refresh)
* Clean and responsive UI using Tailwind CSS
* Input trimming to avoid empty or whitespace-only tasks
* Status toggle (completed/incomplete)
* Real-time UI updates on state changes

🧠 Key React Hooks Used

useRef
Real-life analogy: Taking personal notes in class quietly without informing others.
In this app: Used to grab input values directly from the DOM when the Add button is clicked.

useState
Real-life analogy: Reading your notes aloud in class – others can see or hear them (UI update).
In this app: Manages the to-do list, so the UI updates whenever a task is added, deleted, or marked as complete/incomplete.

useEffect
Real-life analogy: Teacher quietly watching your notes, finds something wrong and calls your parents – side-effect triggered silently.
In this app: Watches the todos state and updates the localStorage whenever there's a change in the list.

📦 LocalStorage Explained

In Application → Local Storage, each task is stored as a JSON object like this:

{
"id": "unique\_id",
"task": "Do homework",
"isComplete": false
}

isComplete is a boolean flag to represent whether the task is marked as done or not. This helps in conditional rendering, like showing a strike-through for completed tasks.

⚙️ Tech Stack

React.js (with Vite)
Tailwind CSS – for utility-first styling without creating external CSS files
JavaScript – used core features like:

* map(), filter(), trim()
* destructuring, spread operator
* JSON.stringify() and JSON.parse() for localStorage
* Conditional rendering

🌐 Deployment

The project is deployed on GitHub Pages and can be accessed anytime via the live URL.

Live Demo: https://tuhin2222001.github.io/ReactProjects/
GitHub Repo: https://github.com/Tuhin2222001/ReactProjects

💡 What I Learned

This project helped me understand:

* Real-life application of React Hooks
* Efficient state and input management
* DOM access via useRef
* How to persist user data without a backend using localStorage
* Cleaner code structure and modular React components


✅ Future Improvements using the MERN Stack

* Store tasks in MongoDB instead of localStorage
* Create APIs using Node.js and Express to add, update, and delete tasks
* Set task priority and reminder time from the backend
* Schedule reminders using tools like node-cron
* Send reminders via email using Nodemailer
* Push notifications using Firebase or OneSignal
* Add user login and authentication to save user-specific data
* Sync tasks across devices using cloud storage
