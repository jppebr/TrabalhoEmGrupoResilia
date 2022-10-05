let modalQt = 0; //Resetar a variavel//

const c = (Element)=>document.querySelector(Element); //essa constante foi para fazer mais rapido o projeto cada lugar que esta um c e aonde essa constate esta sendo usada//
const cs = (Element)=>document.querySelectorAll(Element);

modelsJson.map((item, index)=>{ //Aqui foi para pega as informação no outro javascript, obrigado Canal MD Cursos//
    let modelsItem = c('.models .models-item').cloneNode(true); 
    modelsItem.setAttribute('data-key', index);
    modelsItem.querySelector('.models-item-img img').src = item.img;
    //modelsItem.querySelector('.models-item--price').innerHTML = item.price[0].toFixed(2);
    modelsItem.querySelector('.models-item--price').innerHTML = `R$ ${item.price[0].toFixed(2)}`;
    modelsItem.querySelector('.models-item--name').innerHTML = item.name;
    modelsItem.querySelector('.models-item--desc').innerHTML = item.description;

    modelsItem.querySelector('a').addEventListener('click', (e)=>{   // Aqui estou pegando as informação do outro javascipt para colocar no botão que adiciona no carrinho//
        e.preventDefault();
        let key = e.target.closest('.models-item').getAttribute('data-key');
        modalQt = 1;
        c('.modelsBig img').src = modelsJson[key].img;
        c('.modelsInfo h1').innerHTML = modelsJson[key].name;
        c('.modelsInfo--desc').innerHTML = modelsJson[key].description;
        c('.modelsInfo--actualPrice').innerHTML =  modelsJson[key].price[0].toFixed(2)
       c('.modelsInfo--size.selected').classList.remove('selected');
        cs('.modelsInfo-size').forEach((size, sizeIndex)=>{
            if(sizeIndex == 2) {
                size.classList.add('selected');
                c('.modelsInfo--actualPrice').innerHTML = `R$ ${modelsJson[key].price[sizeIndex].toFixed(2)}`;  //Para que os preço aparece na aba da loja no botao de mais//
            }
                size.innerHTML = modelsJson[key].size[sizeIndex];
        });
        c('.modelsInfo--qt').innerHTML = modalQt;
        c('.modelsWindowArea').style.opacity = '0';
        c('.modelsWindowArea').style.display = 'flex';
        setTimeout(()=>{
        c('.modelsWindowArea').style.opacity = '1';
    },  200);
    })
    c('.models-area').append(modelsItem);
});

function closeModal(){   //animação um pouco melhor no botao de voltar//
    c('.modelsWindowArea').style.opacity = 0;
    setTimeout(()=>{
        c('.modelsWindowArea').style.display = 'none';
    }, 500);
}
cs('.modelsInfo--cancelButton, .modelsInfo--cancelMobileButton').forEach((item)=>{ //Aqui e o bota de volta, no windows e mobile//
    item.addEventListener('click', closeModal);
});

c('.modelsInfo--qtmenos').addEventListener('click', ()=>{ //Diminuir um produto da loja//
    if(modalQt > 1) {
        modalQt--;
        c('.modelsInfo--qt').innerHTML = modalQt;
    }
});

c('.modelsInfo--qtmais').addEventListener('click', ()=>{   //Aumenta um produto da loja//
    modalQt++;
    c('.modelsInfo--qt').innerHTML = modalQt;
});

cs('.modelsInfo--size').forEach((size, sizeIndex)=>{
    size.addEventListener('click', (e)=> {
        c('.modelsInfo--size.selected').classList.remove('selected');
        //e.target.classList.add('selected'); //ocorre erro se clicar no <span></span>
        size.classList.add('selected');
        c('.modelsInfo--actualPrice').innerHTML = `R$ ${modelsJson[key].price[sizeIndex].toFixed(2)}`;
    });
});