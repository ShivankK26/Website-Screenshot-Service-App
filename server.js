const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
const path = require('path');


const app = express();


app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index');
});


app.get('/screenshot', async (req, res) => {
  const url = req.query.url;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1280,
    height: 720
  });
  await page.goto(url);
  await page.waitForTimeout(1500);
  const buffer = await page.screenshot();
  res.header('Content-Type', 'image/png');
  res.header('Content-Disposition', 'inline; filename=screenshot.png');
  return res.send(buffer);
});


app.get('/styles.css', (req, res) => {
  res.type('text/css');
  res.sendFile(path.join(__dirname, '/public/css/styles.css'));
});


const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Server has started at ${port}`);
});