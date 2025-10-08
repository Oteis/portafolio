import express from "express";

const app = express();

// servir archivos estáticos (tu frontend)
app.use(express.static("public"));

// ruta principal
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
