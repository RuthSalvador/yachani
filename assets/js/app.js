var contenedor = document.getElementById('galeria');
var docFragment=document.createDocumentFragment();

var url = "assets/img/fabula-0.jpg";
var portada =[{src:"assets/img/fabula-1.jpg"}]
var images=[{src :url},{src :url},{src :url},{src :url},{src :url},{src :url},{src :url},{src :url},{src :url},{src :url},{src :url},
            {src :url},{src :url},{src :url},{src :url},{src :url}];
// var preguntas=[{question:"pregunta1?",type:"literal",alternatives:["Donde ","en la escuela",""]},{question:"pregunta2?",type:"literal",alternatives:["Donde ","en la escuela",""]},
//                {question:"pregunta3?",type:"literal",alternatives:["Donde ","en la escuela",""]},{question:"pregunta4?",type:"literal",alternatives:["Donde ","en la escuela",""]},
//                {question:"pregunta5?",type:"literal",alternatives:["Donde ","en la escuela",""]},{question:"pregunta6?",type:"literal",alternatives:["Donde ","en la escuela",""]},
//                {question:"pregunta7?",type:"literal",alternatives:["Donde ","en la escuela",""]}
//                ];

var preguntas=[{question:"¿Que podía curar al rey?",type:"factual",alternatives:["Nada podía curarlo.","El agua.","El agua de la vida."]},
              {question:"¿Por qué crees que el duendecillo no se molestó por su indeferencia, ya que el príncipe se disculpó?",type:"factual",alternatives:["El duendecillo tenía una maldición que no podía molestarse si escuchaba la palabra disculpa.","La disculpa es símbolo de respeto y buenos modales.","No puedes molestarte con nadie si te pide disculpas."]},
              {question:"¿Que debió haber hecho el príncipe?",type:"factual",alternatives:["Llevar ayuda.","Preguntar ¿qué hay en el castillo?","Ambas."]},
              {question:"En el texto la palabra “garganta”, ¿qué significado tiene?",type:"léxica",alternatives:["Parte frontal del cuello.","Paso estrecho entre montañas.","Joya típica de la orfebrería precolombina."]},
              {question:"¿De qué manera el príncipe insultó al duende?",type:"inferencial",alternatives:["Molesto","Enano","Tonto"]},
              {question:"¿Cómo llegó el principe al castillo?",type:"factual",alternatives:["Con un hechizo del duende.","A pie.","Cabalgando."]},
              {question:"¿Qué hubiera pasado si el príncipe no hubiera salido antes de las 12 del castillo?",type:"inferencial",alternatives:["Hubiera llegado tarde a ver a su padre","Se quedaría una semana más en el castillo","Se quedaría por siempre en el castillo"]}
              ];

var decision =[{decision:"Qué haces ante la pregunta del pequeño duendecillo?",alternatives:["Te disculpas por no poder escucharlo, le dices que estás apurado por una urgencia familiar.","Le  dices que no te importa, que estás apurado.","Le explicas lo que ha pasado , tu misión y pides su ayuda."]}];

docFragment.appendChild(crearImgs(portada[0],"p1"));
for (var i = 0; i < 2; i++) {
    docFragment.appendChild(crearImgs(images[i],i));
}
docFragment.appendChild(crearPregunta(preguntas[0].question));
for (var i = 0; i < 3; i++) {
  docFragment.appendChild(crearAlternativas(preguntas[0].alternatives[i],"d1"));
}
for (var i = 2; i < 4; i++) {
    crearImgs(images[i],i);
    docFragment.appendChild(crearImgs(images[i],i));
}
docFragment.appendChild(crearPregunta(decision[0].decision));
for (var i = 0; i < 3; i++) {
  var buton = document.createElement('button');
    buton.appendChild(document.createTextNode(decision[0].alternatives[i]));
    buton.setAttribute('id','d'+i);
    buton.addEventListener('click',function(e){
      e.preventDefault();
      if(this.id == "d0"){
        for (var i = 4; i < 6; i++) {
            docFragment.appendChild(crearImgs(images[i],i));
            console.log(crearImgs(images[i],i));
            // contenedor.appendChild(docFragment);
        }
        docFragment.appendChild(crearPregunta(preguntas[1].question));
        for (var i = 0; i < 3; i++) {
          docFragment.appendChild(crearAlternativas(preguntas[1].alternatives[i],"p1"));
        }
        for (var i = 6; i < 8; i++) {
            docFragment.appendChild(crearImgs(images[i],i));
        }
        docFragment.appendChild(crearPregunta(preguntas[2].question));
        for (var i = 0; i < 3; i++) {
          docFragment.appendChild(crearAlternativas(preguntas[2].alternatives[i],"p1"));
        }
        alert("camino1"+this.id);
        contenedor.appendChild(docFragment);

      }
      ///END Camino 0
      if(this.id == "d1"){
        alert("camino2"+this.id);

        docFragment.appendChild(crearImgs(images[8],8));
        docFragment.appendChild(crearPregunta(preguntas[3].question));
        for (var i = 0; i < 3; i++) {
          docFragment.appendChild(crearAlternativas(preguntas[3].alternatives[i],"p1"));
        }
        docFragment.appendChild(crearImgs(images[9],9));

        docFragment.appendChild(crearPregunta(preguntas[4].question));
        for (var i = 0; i < 3; i++) {
          docFragment.appendChild(crearAlternativas(preguntas[4].alternatives[i],"p1"));
        }
        docFragment.appendChild(crearImgs(images[10],10));
        contenedor.appendChild(docFragment);

      }
      //endn Camino 1
      if(this.id == "d2"){
        alert("camino3"+this.id);

        for (var i = 11; i < 14; i++) {
            docFragment.appendChild(crearImgs(images[i],i));
        }
        docFragment.appendChild(crearPregunta(preguntas[5].question));
        for (var i = 0; i < 3; i++) {
          docFragment.appendChild(crearAlternativas(preguntas[5].alternatives[i],"p1"));
        }
        for (var i = 14; i < 16; i++) {
            docFragment.appendChild(crearImgs(images[i],i));
        }
        docFragment.appendChild(crearPregunta(preguntas[6].question));
        for (var i = 0; i < 3; i++) {
          docFragment.appendChild(crearAlternativas(preguntas[6].alternatives[i],"p1"));
        }
        docFragment.appendChild(crearImgs(images[16],16));
      }
      contenedor.appendChild(docFragment);

    });
    docFragment.appendChild(buton);
  }
contenedor.appendChild(docFragment);

  function crearImgs(e,id){
    var figure=document.createElement('figure');
    var image=document.createElement('img');
    var spanPrevious=document.createElement('span');
    var spanNext=document.createElement('span');

    figure.classList.add("class","js-figure");
    image.setAttribute("alt","lecturas");
    image.src=e.src;//+id+".jpg";
    spanPrevious.setAttribute("class",'icon-before left');
    spanNext.setAttribute("class",'icon-next right');

    figure.appendChild(image);
    figure.appendChild(spanPrevious);
    figure.appendChild(spanNext);
    return figure;
}
function crearPregunta(parrafo){
  var pregunta = document.createElement('h2');
  pregunta.innerHTML = parrafo;
  return pregunta;
}
function crearAlternativas(alternativa,id){
  var div = document.createElement('div');
  var input = document.createElement('input');
  input.setAttribute('type','radio');
  input.setAttribute('name','p'+id);
  div.appendChild(input);
  div.appendChild(document.createTextNode(alternativa));
  return div;
}
