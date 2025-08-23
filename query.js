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