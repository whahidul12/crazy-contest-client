# 🏆 Crazy Contest: Creative Contest Management Platform 🚀

![Crazy Contest](./src/assets/logo-with-white-bg.png)

**Website Name:** Crazy Contest

**Live Site URL:** [Live Site 👈](https://contest-craze-app.web.app/)

Crazy Contest is a modern, full-stack web application designed to connect creative individuals with contest organizers (Creators). It provides a seamless, secure, and intuitive platform for users to discover, participate in, and manage various creative contests (e.g., design, writing, coding).

---

### ✨ Core Features & Technical Highlights

1.  **Three-Tier Role-Based System (RBAC):** Implemented distinct, secure dashboards and access controls for **Admin**, **Contest Creator**, and **Normal User**.
2.  **Secure Authentication & Authorization (JWT):** Utilizes **Firebase Authentication** and **JSON Web Tokens (JWT)**, secured via an Axios interceptor, for API authorization on all private routes and mutations. Private routes maintain user login status after page refresh.
3.  **Stripe Payment Integration:** Integrated **Stripe Checkout** for a secure, dedicated payment flow, enabling users to pay entry fees to register for contests.
4.  **Optimized Data Fetching:** Leverages **TanStack Query** for efficient caching, synchronization, and state management across all data operations, ensuring a fast and responsive user experience.
5.  **Dynamic Leaderboard:** Features a dedicated page that dynamically ranks users based on their total number of contest wins, showcasing top talent.
6.  **Full CRUD for Contests:** Creators can **C**reate, **R**ead, **U**pdate, and **D**elete their contests (Update/Delete restricted to _Pending_ status). Admins can **C**onfirm, **R**eject, and **D**elete any contest.
7.  **Server-Side Pagination:** Implemented efficient pagination on the **All Contests Page** to optimize initial load time and handle large datasets (10 items per page).
8.  **Responsive Design & Theming:** Built with a **fully responsive UI** (Mobile, Tablet, Desktop) using **React** and **DaisyUI/Tailwind CSS**. Includes a persistent **Dark/Light Theme Toggle**.
9.  **Advanced Form Management:** Utilizes **React Hook Form** for all forms (Login, Registration, Contest Creation, Profile Update), ensuring robust validation and performance.
10. **Role-Specific Dashboards:** Custom user dashboards displaying participated contests, winning history, and a profile with a dynamic **Win Percentage** chart (Won/Participated).
11. **Extra Pages:** Includes a dedicated **Leaderboard Page** and a static **Extra Section** page, as per challenge requirements.

---

### 💻 Technology Stack (Frontend)

| Category           | Technologies                     | Description                                                                      |
| :----------------- | :------------------------------- | :------------------------------------------------------------------------------- |
| **Framework**      | **React.js**                     | The core library for building the user interface.                                |
| **Styling**        | **Tailwind CSS, DaisyUI**        | Utility-first CSS framework and component library for rapid, responsive styling. |
| **State/Data**     | **TanStack Query (React Query)** | Used for robust server state management, caching, and data synchronization.      |
| **Forms**          | **React Hook Form**              | Used for efficient and performant form validation and state management.          |
| **Authentication** | **Firebase (Client-side)**       | Handles user registration, login, and Google Sign-in.                            |
| **Deployment**     | **Firebase**                     | Hosting the client application.                                                  |
| **Animation**      | **Framer Motion**                | Used for smooth, impressive UI animations.                                       |

---

### ⚙️ Installation and Setup

To run Crazy Contest locally, follow these steps:

**Prerequisites:** Node.js (v18+), access to the backend API.

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/whahidul12/crazy-contest-client
    cd crazy-contest-client
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory and add the following:

    ```env
    # Firebase Configuration (Public Keys)
    VITE_FIREBASE_API_KEY=your_key
    VITE_FIREBASE_AUTH_DOMAIN=your_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

    # Server API Base URL
    VITE_API_URL=[Your Deployed Server URL or http://localhost:3000]
    ```

4.  **Run the application:**
    ```bash
    npm run dev
    ```
    The frontend should be available at `http://localhost:5173`.

---
