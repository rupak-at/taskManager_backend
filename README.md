### 🚀 Getting Started

#### 🛠️ Prerequisites
- Node.js v14+
- MongoDB URI (local or cloud)

#### 📦 Installation

```bash
git clone https://github.com/rupak-at/taskManager_backend.git
cd server
npm install
```

#### ⚙️ Environment Variables

Create a `.env` file:

```
PORT=4000
MONGO_URI=your_mongo_connection_string
There is .env.example file as well for reference
```

---

### ▶️ Start the Server

```bash
npm run dev
```

---

### 🧠 API Endpoints

Base URL: `http://localhost:4000/api`

---

### ✅ Create Task

`POST /task`

#### Body:
```json
{
  "title": "Finish README",
  "description": "Write a detailed API usage guide",
  "status": "in-progress"
}
```

---

### 📅 Get All Tasks

`GET /task`

#### Query Params:
- `status` (optional): `pending` | `completed` | `in-progress`
- `sort` (optional): `createdAt` or `-createdAt`
- `limit` (optional): Number of tasks per page (default: 3)
- `page` (optional): Page number (default: 1)

#### Example:
```
GET /task?status=pending&page=2&sort=-createdAt&limit=2
```

---

### 🔍 Get Task By ID

`GET /task/:id`

---

### ✏️ Update Task (title, description, or status)

`PUT /task/:id`

#### Body:
```json
{
  "title": "Updated Task",
  "description": "Updated Description",
  "status": "completed"
}
```

---

### 🛠 Update Task Status Only

`PATCH /task/:id/status`

#### Body:
```json
{
  "status": "in-progress"
}
```

---

### ❌ Delete Task

`DELETE /task/:id`

---

### 📊 Pagination & Filtering

Supports:
- Status filtering: `status=pending`
- Sorting by creation date: `sort=createdAt` or `-createdAt`
- Pagination: `limit` and `page` query params

---

### 🧺 Example Response (GET /task)

```json
{
  "msg": "All Tasks",
  "tasks": [
    {
      "_id": "64fe6a9232d8f2e9a4a9c12d",
      "title": "Complete UI",
      "description": "Design landing page",
      "status": "pending",
      "createdAt": "2024-04-10T12:00:00Z"
    }
  ],
  "pagination": {
    "totalTasks": 12,
    "totalPages": 4,
    "currentPage": 2,
    "perPage": 3
  }
}
```

---

### 📁 Folder Structure
```
📆 project-root
🗂️ controller/
│   └── taskController.js
🗂️ middleware/
│   └── dataValidation.js
🗂️ model/
│   └── taskModel.js
🗂️ router/
│   └── taskRoute.js
🗂️ db/
│   └── connection.js
└── index.js
```



