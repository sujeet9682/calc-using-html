
function cal() {
    let opr1 = document.getElementById('firstbox').value;
    let opr2 = document.getElementById('secondbox').value;
    let opr = document.getElementById('opr').value;

    if(opr == '+'){
            var res = parseInt(opr1) + parseInt(opr2);
    }
    if (opr == '-') {
     var res = parseInt(opr1) - parseInt(opr2);
    }
    if( opr == '*') {
     var res = parseInt(opr1) * parseInt(opr2);
    }
    if ( opr == '/') {
     var res = parseInt(opr1) / parseInt(opr2);
    }
     
document.getElementById('res').value = res;
}