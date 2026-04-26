Haan bhai, backend me status codes aur methods samajhna **bahut important** hai. Real API banate time yehi use hote hain. Main **Express.js examples** ke saath samjha deta hoon.

---

# HTTP Methods + Status Codes (Practical)

## 1. GET → Data lana

Use jab server se data fetch karna ho.

```js
app.get("/users", (req, res) => {
   res.status(200).json({
      success: true,
      users: ["Anurag", "Rahul"]
   });
});
```

### Response:

* **200 OK** → Data successfully mil gaya.

---

## 2. POST → Naya data create karna

Use jab database me new item add karna ho.

```js
app.post("/users", (req, res) => {
   const user = req.body;

   res.status(201).json({
      success: true,
      message: "User created",
      user
   });
});
```

### Response:

* **201 Created** → Naya resource ban gaya.

---

## 3. PUT → Full update

Purana data pura replace karna.

```js
app.put("/users/1", (req, res) => {
   res.status(200).json({
      message: "User fully updated"
   });
});
```

### Response:

* **200 OK**

---

## 4. PATCH → Partial update

Sirf ek field update karni ho.

```js
app.patch("/users/1", (req, res) => {
   res.status(200).json({
      message: "User name updated"
   });
});
```

---

## 5. DELETE → Data delete

```js
app.delete("/users/1", (req, res) => {
   res.status(200).json({
      message: "User deleted"
   });
});
```

ya

```js
res.status(204).send();
```

### Difference:

* **200** = message bhejna hai
* **204 No Content** = delete hua, kuch return nahi

---

# Important Client Errors (4xx)

---

## 400 Bad Request

Client ne galat data bheja.

```js
app.post("/register", (req, res) => {
   if (!req.body.email) {
      return res.status(400).json({
         message: "Email required"
      });
   }
});
```

---

## 401 Unauthorized

Login token nahi diya.

```js
if (!token) {
   return res.status(401).json({
      message: "Please login first"
   });
}
```

---

## 403 Forbidden

Login hai but access allowed nahi.

```js
if (user.role !== "admin") {
   return res.status(403).json({
      message: "Access denied"
   });
}
```

---

## 404 Not Found

Route ya data nahi mila.

```js
app.get("/users/:id", (req, res) => {
   const user = null;

   if (!user) {
      return res.status(404).json({
         message: "User not found"
      });
   }
});
```

---

## 409 Conflict

Duplicate data.

```js
if (emailExists) {
   return res.status(409).json({
      message: "Email already exists"
   });
}
```

---

# Server Errors (5xx)

## 500 Internal Server Error

Server side code phat gaya.

```js
try {
   let data = somethingWrong();
} catch (error) {
   res.status(500).json({
      message: "Something went wrong"
   });
}
```

---

# Full CRUD Example

```js
app.get("/products")      // fetch all
app.get("/products/:id") // fetch one
app.post("/products")    // create
app.put("/products/:id") // full update
app.patch("/products/:id") // partial update
app.delete("/products/:id") // delete
```

---

# Industry Rule

## Success:

* 200 = normal success
* 201 = created
* 204 = success but no response body

## Error:

* 400 = client galti
* 401 = auth nahi
* 403 = permission nahi
* 404 = nahi mila
* 500 = backend galti

---

# Real Login Example

```js
app.post("/login", (req, res) => {
   const { email, password } = req.body;

   if (!email || !password) {
      return res.status(400).json({
         message: "All fields required"
      });
   }

   if (email !== "admin@gmail.com") {
      return res.status(404).json({
         message: "User not found"
      });
   }

   if (password !== "1234") {
      return res.status(401).json({
         message: "Wrong password"
      });
   }

   res.status(200).json({
      message: "Login successful"
   });
});
```

---

# Interview Question

## PUT vs PATCH

* **PUT** → pura object replace
* **PATCH** → sirf changed fields update

---

# Best Practice

```js
return res.status(404).json({...})
```

Always `return` use karo warna niche ka code bhi chalega.

---

# Tu MERN backend seekh raha hai toh ye yaad rakh:

```js
GET    /users
POST   /users
GET    /users/:id
PUT    /users/:id
DELETE /users/:id
```

---



Curl Commnand 
curl -X RequestName url 
if using Linux or Git use "\" in cmd use "^"
-H "Content-Type:application/json" -H for header
-d for data in git use "{"key":"value"}"
in cmd use "{\"key\":\"value\"}"

Agar chahe toh next main tujhe **REST API ka pura roadmap + production level Express backend structure** bhi samjha sakta hoon.


# Todo API cURL Testing Notes (Express)

## Base URL

`http://localhost:3000`

---

## 1. GET Todos

```bash id="a4pn0q"
curl http://localhost:3000/get-todo
```

### Response

```json id="mpmkpw"
{
  "todo": [
    {
      "id": 1,
      "work": "Music"
    }
  ]
}
```

---

## 2. POST Add Todo

```bash id="3mn3s2"
curl -X POST http://localhost:3000/add-todo ^
-H "Content-Type: application/json" ^
-d "{\"work\":\"Gym\"}"
```

### Response

```json id="7l8l5g"
{
  "message": "Todo added",
  "todo": [
    {
      "id": 1,
      "work": "Music"
    },
    {
      "id": 2,
      "work": "Gym"
    }
  ]
}
```

---

## 3. PUT Update Todo

```bash id="2sqh3q"
curl -X PUT http://localhost:3000/update-todo/1 ^
-H "Content-Type: application/json" ^
-d "{\"work\":\"IDk\"}"
```

### Response

```json id="8m0wbm"
{
  "message": "Todo updated",
  "todo": [
    {
      "id": 1,
      "work": "IDk"
    }
  ]
}
```

---

## 4. DELETE Todo

```bash id="j76yt7"
curl -X DELETE http://localhost:3000/delete-todo/1
```

### Response

```json id="l7hzsr"
{
  "message": "Todo Deleted",
  "todo": []
}
```

---

## Routes

```js id="6dgf52"
app.get("/get-todo", getTodo);
app.post("/add-todo", addTodo);
app.put("/update-todo/:id", updateTodo);
app.delete("/delete-todo/:id", deleteTodo);
```

---

## Key Learnings

* `GET` = Fetch data
* `POST` = Add new data
* `PUT` = Update existing data
* `DELETE` = Remove data
