const express = require('express');
const app = express();

// Middleware necesario para entender los datos en formato JSON (Pregunta 8)
app.use(express.json());

// --- RUTAS GET (Pregunta 6) ---

// Ruta raíz
app.get('/', (req, res) => {
    res.send('Servidor activo');
});

// Ruta de saludo estático
app.get('/saludo', (req, res) => {
    res.send('Hola comunidad');
});

// Ruta con parámetros (dinámica)
app.get('/mensaje/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.send('Hola ' + nombre);
});

// --- RUTA POST (Pregunta 8) ---

// Ruta para recibir reportes de la comunidad
app.post('/reporte', (req, res) => {
    const mensaje = req.body.mensaje;
    res.json({
        estado: "Reporte recibido",
        mensaje: mensaje
    });
});

// Configuración del puerto de escucha (Pregunta 7)
app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});