var canvas = new fabric.Canvas("canvass");

var altura = 400;

var largura = 200;

var personagem = "";

var cima = 0;

var esquerda = 0;

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(img){
        personagem = img;
    
        personagem.scaleToWidth(largura);
        personagem.scaleToHeight(altura);
        personagem.set({
            top:cima,
            left:esquerda
        });
        canvas.add(personagem);

        
    })
}



window.addEventListener("keydown", teclapressionada);

function teclapressionada(e){
    numero = e.keyCode;
    console.log(numero);

    if(numero == "80"){
        cima = 50;
        esquerda = 80;
        new_image('lula.png');
        console.log("sim")
    }


    if(numero == "82"){
        cima = 50;
        esquerda = 400;
        new_image('Patrick.png');
        console.log("sim")
    }

    if(numero == "77"){
        cima = 50;
        esquerda = 650;
        new_image('BobEsponja.png');
        console.log("sim")
    }
}