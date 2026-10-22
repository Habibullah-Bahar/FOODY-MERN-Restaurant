import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(`Server is running On PORT ${process.env.PORT}`);
});
