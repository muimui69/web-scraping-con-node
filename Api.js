// forma backend = usamos require  y en funciones aumentamos al inicio "async"
// forma tradicional = usamos import

//const puppeteer = require('puppeteer');
import puppeteer from 'puppeteer';

let extractSis = [];
let extractInf = [];
let extractRed = [];

/* Acceder a carrera de ingeniera en sistemas */
async function ingenieraSistemas(){
  const browser = await puppeteer.launch( /* {headless:false} */ );
  const page = await browser.newPage();
  await page.goto('https://antigua.uagrm.edu.bo/carreras/oferta.php?codigo=187&plan=4');
  await page.click('tr#fila3 td input#cargar_lugar');
  await page.waitFor(9000);
  await page.$eval('#lugar', ele => ele.value=1);
  await page.waitFor(9000);
  await page.click('tr#fila4 td input#load');
  await page.waitFor(9000);
  let Materia = await page.$eval('#sub_content > table > tbody > tr > td > table > tbody > tr:nth-child(6) > td > table > tbody > tr > td', ele => ele.textContent);
  Materia = Materia.replace(/\t/g,'');
  extractSis = Materia.split('\n');
  await browser.close();
  
  return new Promise((resolve) =>  {
    setTimeout(() =>{
      resolve(extractSis);
    },27000);
  });

}


/* Acceder a carrera de ingeniera informatica */
async function ingenieraInformatica() {
  const browser = await puppeteer.launch(/*{headless:false}*/ );
  const page = await browser.newPage();
  await page.goto('https://antigua.uagrm.edu.bo/carreras/oferta.php?codigo=187&plan=3');
  await page.click('tr#fila3 td input#cargar_lugar');
  await page.waitFor(9000);
  await page.$eval('#lugar', ele => ele.value=1);
  await page.waitFor(9000);
  await page.click('tr#fila4 td input#load');
  await page.waitFor(9000);
  let Materia = await page.$eval('#sub_content > table > tbody > tr > td > table > tbody > tr:nth-child(6) > td > table > tbody > tr > td', ele => ele.textContent);
  Materia = Materia.replace(/\t/g,'');
  extractInf = Materia.split('\n');
  await browser.close();

  return new Promise((resolve) =>  {
    setTimeout(() =>{
      resolve(extractInf);
    },27000);
  });

}


/* Acceder a carrera de ingeniera en redes */
async function ingenieraRedes(){
  const browser = await puppeteer.launch(/*{headless:false}*/ );
  const page = await browser.newPage();
  await page.goto('https://antigua.uagrm.edu.bo/carreras/oferta.php?codigo=187&plan=5');
  await page.click('tr#fila3 td input#cargar_lugar');
  await page.waitFor(9000);
  await page.$eval('#lugar', ele => ele.value=1);
  await page.waitFor(9000);
  await page.click('tr#fila4 td input#load');
  await page.waitFor(9000);
  let Materia = await page.$eval('#sub_content > table > tbody > tr > td > table > tbody > tr:nth-child(6) > td > table > tbody > tr > td', ele => ele.textContent);
  Materia = Materia.replace(/\t/g, '');
  extractRed = Materia.split('\n');
  await browser.close();

  return new Promise((resolve) =>  {
    setTimeout(() =>{
      resolve(extractRed);
    },27000);
  });

}

export default{
  ingenieraInformatica, //187-3
  ingenieraSistemas, //187-4
  ingenieraRedes  //187 -5
}

/*module.exports = { 
  ingenieraInformatica,
  ingenieraSistemas,
  ingenieraRedes
};*/