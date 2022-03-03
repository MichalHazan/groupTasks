const router = require('express').Router()
const { SQL } = require("../dbconfig");

// ---show all customers
router.get("/", async (req, res) => {
    try {
      const customers = await SQL(`
      SELECT *
      FROM customers
          `);
      res.send(customers);
    } catch (error) {
      res.send({ err: error.sqlMessage, error });
    }
  });
// ---Add customer
router.post("/", async (req, res) => {
  const {name, job, phone, mail} = req.body
  if (!name | !job | !phone | !mail) {
   return res.send({err: "missing info"})
  }
    try {
       await SQL(`
      INSERT INTO customers
      (name, job, phone, mail)
      VALUES
       ("${name}", "${job}", "${phone}", "${mail}")
          `);
      res.send({msg: "added"});
    } catch (error) {
      res.send({ err: error.sqlMessage, error });
    }
  });

module.exports = router