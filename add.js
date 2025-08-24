import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import path from "path";
import { fileURLToPath } from "url"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port = 3000;

//PostgreSQL configuration
const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'world',
    password: 'Rohan@25',
    port: 5432
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

db.connect();

// Routes
app.get('/', (req, res) => {
    //res.render('index');
    res.render("index", { title: "User Registration" });
});

app.post('/submit', async (req, res) => {
    const { username, age, email, mobile } = req.body;
    console.log(username);
    console.log(age);
    console.log(email);
    console.log(mobile);

     try {
        await db.query(
            "INSERT INTO user_form (name, age, email, mobile) VALUES ($1, $2, $3, $4)",
            [username, age, email, mobile]
        );
        console.log("User inserted successfully ✅");
        res.send("Form submitted successfully!");
    } catch (err) {
        console.error("Error executing insert ❌", err.stack);
        res.status(500).send("Error saving data");
    }

});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});