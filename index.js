const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const path = require('path');

//middleware
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    //serve static content (our build folder) //__dirname == current directory location (root folder)
    app.use(express.static(path.join(__dirname, "client/build")))
}

//ROUTES//

//user post as a subscriber
app.post("/subscriptions", async (req, res) => {
    try {
        const { first_name, surname, birthdate, email, } = req.body;
        const newSubscriber = await pool.query(
            "INSERT INTO subscriptions (first_name, surname, birthdate, email) VALUES ($1, $2, $3, $4) RETURNING *",
            [first_name, surname, birthdate, email]
        );

        res.json(newSubscriber.rows[0]);
    } catch (e) {
        console.log(e);
    }
});

//get all subscribers
app.get('/subscriptions', async (req, res) => {
    try {
        const allSubscribers = await pool.query("SELECT * FROM subscriptions");

        res.json(allSubscribers.rows);
    } catch (e) {
        console.log(e.message);
    }
});

// get an subscriber
//get a todo

app.get("/subscriptions/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const subscriber = await pool.query("SELECT * FROM subscriptions WHERE subscriber_id = $1", [
            id,
        ]);
        res.json(subscriber.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//delete a subscriber
app.delete("/subscriptions/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteSubscriber = await pool.query("DELETE FROM subscriptions WHERE subcriber_id = $1", [
            id,
        ]);
        res.json("subscriber was deleted");
    } catch (err) {
        console.error(err.message);
    }
});


// user submits employment application
app.post("/applicants", async (req, res) => {
    try {
        const { first_name, surname, birthdate, email, contact_number,
            live_in_major_city, city, subdivision, country } = req.body;
        const newApplicant = await pool.query(
            "INSERT INTO applicants (first_name, surname, birthdate, email, contact_number, live_in_major_city, city, subdivision, country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
            [first_name, surname, birthdate, email, contact_number, live_in_major_city, city, subdivision, country]
        );

        res.json(newApplicant.rows[0]);
    } catch (e) {
        console.log(e);
    }
});

//get all applicants
app.get('/applicants', async (req, res) => {
    try {
        const allApps = await pool.query("SELECT * FROM applicants");

        res.json(allApps.rows);
    } catch (e) {
        console.log(e.message);
    }
});

// get an applicant
app.get("/applicants/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const applicant = await pool.query("SELECT * FROM applicants WHERE applicant_id = $1", [
            id,
        ]);
        res.json(applicant.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//delete an applicant

app.delete("/applicants/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteApplicant = await pool.query("DELETE FROM applicants WHERE applicant_id = $1", [
            id,
        ]);
        res.json("Applicant was deleted");
    } catch (err) {
        console.error(err.message);
    }
});


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});
