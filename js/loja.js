function openNav(){
    document.getElementById('myNav').style.width = '100%'
    var display = document.getElementById('preto').style.display;
    if(display == "block")
    document.getElementById('preto').style.display = 'none';
    else
            document.getElementById('preto').style.display = 'block';
}
   
function closeNav(){
    document.getElementById('myNav').style.width = '0'
    var display = document.getElementById('preto').style.display;
        if(display == "none")
            document.getElementById('preto').style.display = 'block';
        else
            document.getElementById('preto').style.display = 'none';
        }
