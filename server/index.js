const express = require("express");
const cors = require("cors");
const app = express();
const { SQL } = require("./dbconfig");
let PORT = 1000;

app.use(express.json());
app.use(cors());

// ---show all tasks
app.get("/", async (req, res) => {
  try {
    const tasks = await SQL(`
    SELECT tasks.* , customers.name as customer
    FROM tasks
    INNER JOIN customers
    ON tasks.customer_id = customers.id
    ORDER BY tasks.complited ASC, tasks.date DESC;
        `);
    res.send(tasks);
  } catch (error) {
    res.send({ err: error.sqlMessage, error });
  }
});
// ---add new task
app.post("/", async (req, res) => {
  const { task, customer } = req.body;
  if (!task | !customer) {
    return res.send({ err: "missing info" });
  }
  try {
    await SQL(`
    INSERT INTO tasks
    (task, customer_id)
    VALUES
    ("${task}", ${customer})
        `);
    res.send({ msg: "added" });
  } catch (error) {
    res.send({ err: error.sqlMessage, error });
  }
});
// --- delete task
app.delete("/:id", async (req, res) => {
  try {
    const tasks = await SQL(`
            DELETE FROM  tasks 
            WHERE id=${req.params.id}
            `);
    res.send({ msg: "deleted" });
  } catch (error) {
    res.send({ err: error.sqlMessage, error });
  }
});
// --- update task
app.put("/complit", async (req, res) => {
  try {
    const tasks = await SQL(`
            UPDATE tasks 
            SET complited= ${req.body.complited}
            WHERE id=${req.body.id}
            `);
    res.send({ msg: "update" });
  } catch (error) {
    res.send({ err: error.sqlMessage, error });
  }
});

app.use("/customers", require("./routes/customers"));

app.listen(PORT, () => console.log(`rocking ${PORT} `));
