//to create a database table

// CREATE TABLE user_form (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(100),
//   age INT,
//   email VARCHAR(100),
//   mobile VARCHAR(15)
// );


//to INSERT data into the table
// try {
//     const query = `
//       INSERT INTO input_output (name, age, email, mobile)
//       VALUES ($1, $2, $3, $4)
//     `;
//     await pool.query(query, [name, age, email, mobile]);
//     res.send('User added successfully!');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Database error');
//   }
// });

// Search route
// app.post('/search', async (req, res) => {
//     const { name } = req.body;

//     try {
//         const result = await db.query(
//             "SELECT * FROM user_form WHERE name ILIKE $1",
//             [`%${name}%`]
//         );

//         if (result.rows.length > 0) {
//             res.render('searchResult', { users: result.rows });
//         } else {
//             res.send("No user found with that name");
//         }
//     } catch (err) {
//         console.error("Error searching user", err.stack);
//         res.status(500).send("Error retrieving data");
//     }
// });