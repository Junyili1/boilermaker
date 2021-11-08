const express = reqiure("express");

const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [{}];
});

const port = "5000";

app.listen(port, () => console.log(`Server started on port ${port}`));
