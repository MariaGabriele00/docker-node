const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Estudando Docker</title>
            <style>
                body {
                    background-color: #f0f8ff;
                    color: #333;
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    height: 100vh;
                    margin: 0;
                }
                h1 {
                    font-size: 2.5em;
                    text-align: center;
                    animation: colorChange 3s infinite alternate;
                    background-image: linear-gradient(45deg, #ff4500, #ffa07a, #ff6347, #ff1493, #ff69b4);
                    -webkit-background-clip: text;
                    color: transparent;
                    margin-bottom: 20px;
                }
                a {
                    color: #ff4500;
                    font-size: 1.2em;
                    text-decoration: none;
                    border: 2px solid #ff4500;
                    padding: 10px 20px;
                    border-radius: 5px;
                    transition: background-color 0.3s, color 0.3s;
                }
                a:hover {
                    background-color: #ff4500;
                    color: white;
                }

                @keyframes colorChange {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            </style>
        </head>
        <body>
            <h1>Oi, me chamo Gabi e estou estudando Docker</h1>
            <a href="https://github.com/MariaGabriele00" target="_blank">Para saber mais, clique aqui</a>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
});
