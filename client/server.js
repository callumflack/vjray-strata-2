const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();


async function start() {
  await nextApp.prepare();
  const app = express();

  app.use(express.static('static'));

  app.get('/blog/:slug', (req, res) => {
    return nextApp.render(req, res, '/blog', req.params)
  })

  app.get('*', (req, res) => {
    return handle(req, res)
  })

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Ready on http://localhost:${port}`)
}


start();
