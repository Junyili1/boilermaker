const express = reqiure("express");

const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [{}];

  res.json;
});

const port = "5000";

app.listen(port, () => console.log(`Server started on port ${port}`));
