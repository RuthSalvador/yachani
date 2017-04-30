var textos = [{title:"El Principito",portada:"",
              content:[{id:1,image:"assets/img/principito",parrafo:"Tobías y José María siempre fueron amigos, desde que se conocieron en el colegio no dejaron de verse o hablarse.",quiz:{question:"Donde estás1?",type:"literal",alternatives:["Donde ","en la escuela"]}},
                       {id:4,image:"assets/img/principito",parrafo:"Una noche José María se despertó sobresaltado, saltó de su cama y corrió a casa de Tobías que vivía muy cerca. Al llegar hizo un gran ruido y despertó a todos.",quiz:{question:"Donde estás1?",type:"literal",alternatives:["Donde ","en la escuela"]}},
                       {id:6,image:"assets/img/principito",parrafo:"-¿Qué pasó? ¿Te persiguen? ¿Tienes problemas? ¡Dime que me enfrento a quién sea! – le dijo decidido, pero con evidente angustia."},
                       {id:8,image:"assets/img/principito",parrafo:"-¡Claro que estoy bien! ¿No ves? – le dijo Tobías alterado y nervioso."},
                       {id:2,image:"assets/img/principito",parrafo:"Aunque jugaran en equipos de fútbol diferentes o estuvieran en salones diferentes. Y aunque no tuvieran los mismos gustos, en lugar de molestarse por eso lo volvían motivo de diversión.",quiz:{question:"Donde estás1?",type:"literal",alternatives:["Donde ","en la escuela"]}},
                       {id:9,image:"assets/img/principito",parrafo:"-La verdad es que te ves gracioso con ese palo y tu alcancía. Pareces loco."},
                       {id:10,image:"assets/img/principito",parrafo:"En cuanto se recuperaron del susto, los dos amigos se pusieron a reír y se dieron un gran abrazo."}]
              }];

  function cargarPortada(texto){
    var div = document.createElement('div');
    var imagen = document.createElement('img');
    imagen.setAttribute('src',texto.portada);
    div.appendChild(imagen);
    return div;
  }
  function cargarImg(content){
    var div = document.createElement('div');
    var imagen = document.createElement('img');
    imagen.setAttribute('src',content.image);
    div.appendChild(imagen);
    return div;
  }

  function agregarParrafo(texto){
    var div = document.createElement('div');
    var p = document.createElement('p');
    var spanBefore = document.createElement('span');
    var spanNext = document.createElement('span');

    p.innerHTML = texto.parrafo;
    spanBefore.setAttribute('class','icon-before');
    spanNext.setAttribute('class','icon-next');
    div.appendChild(spanBefore);
    div.appendChild(p);
    div.appendChild(spanNext);

    return div;
  }
  function crearPregunta(parrafo){
    var pregunta = document.createElement('h2');
    pregunta.innerHTML = parrafo.question;
    return pregunta;
  }
  function crearAlternativas(alternativa,id,i){
    var div = document.createElement('div');
    var input = document.createElement('input');
    input.setAttribute('type','radio');
    input.setAttribute('name','p'+id);
    div.appendChild(input);
    div.appendChild(document.createTextNode(alternativa.alternatives[i]));
    return div;
  }
  // alert();
  function cargar(){
    // document.getElementById('page4').appendChild(cargarPortada(textos[0]));
    //
    // document.getElementById('page5').appendChild(agregarParrafo(textos[0].content[0]));
    // document.getElementById('page6').appendChild(crearPregunta(textos[0].content[0].quiz));
    // document.getElementById('page6').appendChild(crearAlternativas(textos[0].content[0].quiz,0,0));



        document.getElementById('page4').appendChild(cargarPortada(textos[0]));
        var spanBefore = document.createElement('span');
        var spanNext = document.createElement('span');
        spanBefore.setAttribute('class','icon-before');
        spanNext.setAttribute('class','icon-next');
        spanBefore.innerHTML = "atras";
        spanNext.innerHTML = "adenlante";

        spanBefore.addEventListener('click',function(){
          document.getElementsByClassName('lecturas')[0].style.display="block";
        });

        spanNext.addEventListener('click',function(e){
          // e.preventDefau
          for (var j = 0; j < textos[0].content.length; j++) {
            document.getElementById('page5').appendChild(cargarImg(textos[0].content[j]));
            document.getElementById('page5').appendChild(agregarParrafo(textos[0].content[j]));
              // var Next = document.createElement('span');
              // Next.setAttribute('class','icon-next');
              // Next.innerHTML = "next";
              // Next.addEventListener('click',function(){
              //   alert('segundo parrafo');
              //   cargar();
              // });

              document.getElementById('page6').appendChild(crearPregunta(textos[0].content[0].quiz));
            for (var k = 0; k < textos[0].content[0].quiz.alternatives.length; k++) {

              // document.getElementById('page6').appendChild(crearAlternativas(textos[0].content[0].quiz,0,0));

              document.getElementById('page6').appendChild(crearAlternativas(textos[0].content[0].quiz,j,k));
            }
            continue;
          }

        });
        document.getElementById('page4').appendChild(spanBefore);
        document.getElementById('page4').appendChild(spanNext);



  }

  window.addEventListener('load',cargar);
