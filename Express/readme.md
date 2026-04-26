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





****Port** aur **Route** dono backend/server me use hote hain, but kaam alag hai.

## 1. Port kya hota hai?

**Port = Gate number / Entry point of server**

Server machine pe bahut services chal sakti hain. Har service ko ek number diya jata hai jise **port** bolte hain.

Example:

* `3000` → Node.js app
* `5000` → Python Flask app
* `80` → HTTP default
* `443` → HTTPS default

Jab browser request bhejta hai:

```txt
http://localhost:3000
```

Yaha:

* `localhost` = machine
* `3000` = port

Matlab request machine ke **port 3000** pe ja rahi hai.

---

## 2. Route kya hota hai?

**Route = Server ke andar path / URL mapping**

Port ke through server tak pahuchne ke baad, route decide karta hai **kis endpoint pe jaana hai**.

Example:

```txt
http://localhost:3000/users
http://localhost:3000/products
http://localhost:3000/login
```

Yaha sab port same `3000` hai, but routes alag:

* `/users`
* `/products`
* `/login`

---

## Real Life Example

Socho ek hospital hai:

* **Port** = Hospital ka main gate number
* **Route** = Andar ka department path

```txt
Gate 3000 → Cardiology (/heart)
Gate 3000 → OPD (/opd)
Gate 3000 → Emergency (/emergency)
```

---

## Express Example

```js
const express = require("express");
const app = express();

// Routes
app.get("/", (req,res)=>{
   res.send("Home");
});

app.get("/about", (req,res)=>{
   res.send("About");
});

// Port
app.listen(3000, ()=>{
   console.log("Server running on port 3000");
});
```

Yaha:

* `3000` = Port
* `/` and `/about` = Routes

---

## Short Difference

| Port                      | Route                           |
| ------------------------- | ------------------------------- |
| Server ka number          | URL ka path                     |
| Server identify karta hai | Feature/page identify karta hai |
| Example: 3000             | Example: /login                 |

---

## Full URL Breakdown

```txt
http://localhost:3000/login
```

* `http` = protocol
* `localhost` = host
* `3000` = port
* `/login` = route

---

## Ek line me:

**Port batata hai request kis server service pe jayegi, Route batata hai server ke andar kis functionality pe jayegi.**
**



Interview me simple aur professional tareeke se bolo:

**Port aur Route ka difference:**

> Port ek numerical communication endpoint hota hai jiske through client server se connect karta hai.
> Jaise `localhost:3000` me `3000` port hai.
>
> Route server ke andar specific URL path hota hai jo batata hai request kis resource ya functionality ke liye hai.
> Jaise `/login`, `/users`, `/products`.
>
> Example: `http://localhost:3000/login` me `3000` port hai aur `/login` route hai.

## Short Version (30 sec answer)

> Port decides kis service/server process ko request milegi, aur route decides us service ke andar kaunsa handler request process karega.

## Agar interviewer aur puche:

**Q: Kya ek port pe multiple routes ho sakte hain?**

> Haan, ek hi server ek port pe run karke multiple routes handle kar sakta hai.

**Q: Kya ek machine pe multiple ports ho sakte hain?**

> Haan, alag alag applications different ports pe run kar sakti hain.

## Pro Tip

Confident tone me bolo, example do, bas ratta mat maro. Interviewer ko clarity chahiye.


Interview me aise bolo:

> **Host** us machine ya system ka address hota hai jahan server run ho raha hai.
> Ye domain name, IP address, ya local machine name ho sakta hai.

### Example:

```txt id="0n3h5k"
http://localhost:3000/login
```

Yaha:

* `localhost` = host
* `3000` = port
* `/login` = route

### Host ke Types:

1. **localhost**
   Apna khud ka computer

2. **IP Address**

```txt id="p26qgo"
http://192.168.1.10:3000
```

3. **Domain Name**

```txt id="5gmv7w"
https://google.com
```

---

## Short Interview Answer:

> Host batata hai request kis machine/server ko bhejni hai.

## Full URL Breakdown:

```txt id="4sv1f5"
https://api.example.com:5000/users
```

* `https` = protocol
* `api.example.com` = host
* `5000` = port
* `/users` = route

## Ek line me yaad rakho:

> **Host = Kaunsa computer**
> **Port = Us computer ka kaunsa gate**
> **Route = Andar kaunsa room/service**

Yahi bol diya to interviewer khush.



To create an **HTTP server from scratch**, interview me ya practical me usually matlab hota hai **without Express**, directly Node.js built-in `http` module use karke.

## Basic HTTP Server from Scratch (Node.js)

```js
const http = require("http");

const server = http.createServer((req, res) => {
    
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home Page");
    }

    else if (req.url === "/about" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About Page");
    }

    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

---

# Kaise kaam karta hai

## 1. `http.createServer()`

Ye server object banata hai.

```js
http.createServer((req,res)=>{})
```

Har request pe callback chalega.

---

## 2. `req`

Incoming request data:

```js
req.url      // route
req.method   // GET POST PUT DELETE
req.headers
```

---

## 3. `res`

Response bhejne ke liye:

```js
res.writeHead(statusCode, headers)
res.end(data)
```

---

# Browser me test

```txt
http://localhost:3000/
http://localhost:3000/about
```

---

# Agar JSON API banana ho

```js
if(req.url === "/user"){
   res.writeHead(200, {"Content-Type":"application/json"});
   res.end(JSON.stringify({
      name:"Anurag",
      age:22
   }));
}
```

---

# Interview Answer

> I can create an HTTP server from scratch using Node.js built-in `http` module.
> `createServer()` handles incoming requests, I inspect `req.url` and `req.method`, then send response using `res.writeHead()` and `res.end()`.

---

# Agar truly scratch (TCP level) puchhe

Phir matlab raw sockets using `net` module — manually HTTP parse karna. Rare but advanced.

---

# Real Industry

* Small apps → `http`
* Normal backend → Express / Fastify / NestJS
* High perf → Go / Rust / Java etc.

---

# Ek line me:

> HTTP server from scratch = request lo, route check karo, response bhejo.

Agar chaho mai **Express jaisa mini framework scratch se kaise banta hai Node.js me** bhi dikha sakta hoon.
