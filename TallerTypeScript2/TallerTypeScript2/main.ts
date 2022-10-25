import {series} from "./data.js"
import {Serie} from "./Serie.js"

const seriesTBody: HTMLElement = document.getElementById('series')!;
const seasonsDiv: HTMLElement = document.getElementById('seasonsavg')!;
const serieImage: HTMLElement = document.getElementById('serieImage')!;
const serieTitle: HTMLElement = document.getElementById('serieTitle')!;
const serieDescription: HTMLElement = document.getElementById('serieDescription')!;
const serieUrl: HTMLElement = document.getElementById('serieUrl')!;
const serieDefault: Serie = series[0];

let seriesTabla: HTMLElement = document.getElementById("series")!;

infoSeries(series);
promedioTemporadas(series);


function infoSeries(listaSeries : Serie[])
{
    let tBodyElement: HTMLElement = document.createElement("tBody");

    for(let actual of listaSeries)
    {
        let trElement: HTMLElement = document.createElement("tr");

        trElement.setAttribute("id", actual.top.toString());
        trElement.onclick = (event) => 
        {
            let serieId = (event as MouseEvent & {path: {id: string}[]}).path[1].id
            let serieAct: Serie = listaSeries[Number(serieId)-1]
            let cardSerie: HTMLElement = document.getElementById("cardSerie")!;

            let imagen: HTMLElement = document.getElementById("imgSerie")!;
            let image=document.createElement("img");
            image.alt= listaSeries[Number(serieId)-1].nombreSerie;
            image.width=350;
            image.height=250;

            image.setAttribute("src", serieAct.imagen)
            let nombre: HTMLElement = document.getElementById("nombreSerie")!;
            nombre.innerHTML= `${actual.nombreSerie}`
            nombre: color: '#0355EF';
            let descripcion: HTMLElement = document.getElementById("descripcionSerie")!;
            descripcion.innerHTML= `${actual.descripcion}`
            let link: HTMLElement = document.getElementById("linkSerie")!;
            imagen.setAttribute("href", serieAct.links)

            cardSerie.style["display"] = "unset";
            

        }




        trElement.innerHTML =
        `<td>${actual.top}</td>
        <td class = "nombre">${actual.nombreSerie} </td>
        <td>${actual.canal}</td>  
        <td>${actual.temporadas}</td>`;
        tBodyElement.appendChild(trElement);      
    }
    seriesTabla.appendChild(tBodyElement);
}

function clearCard():void{
    if (serieImage.lastChild != null){
      serieImage.removeChild(serieImage.lastChild);
    }
  
    if (serieTitle.lastChild != null){
      serieTitle.removeChild(serieTitle.lastChild);
    }
  
    if (serieDescription.lastChild != null){
      serieDescription.removeChild(serieDescription.lastChild);
    }
  
    if (serieUrl.lastChild != null){
      serieUrl.removeChild(serieUrl.lastChild);
    }
}

function promedioTemporadas(listaSeries: Serie[])
{
    let tBodyElement: HTMLElement = document.createElement("tBody");

    let totalTemporadas: number = 0;
    let tamanio: number = 0;

    for(let actual of listaSeries)
    {
        let numTemporadas: number = actual.temporadas;
        totalTemporadas = totalTemporadas + numTemporadas;
        tamanio = tamanio + 1;        
    }

    let promedioTemporadas: number = totalTemporadas/tamanio;
    let textoProm: string = "Seasons avarage: " + promedioTemporadas;

    let trElement: HTMLElement = document.createElement("tr");
    trElement.innerHTML =
    `<td>${textoProm}</td>`;
    tBodyElement.appendChild(trElement);  
    seriesTabla.appendChild(tBodyElement);
} 


