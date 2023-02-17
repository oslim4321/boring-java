/* let inpu1=document.getElementById('inpu1')
let inpu2=document.getElementById('inpu2')
let inpu3=document.getElementById('inpu3')
let show=document.getElementById('show')


function ans(param){
    if (inpu2.value=='+'){
        show.innerHTML=parseInt(inpu1.value)+parseInt(inpu3.value)
    }

    else if(inpu2.value=='-'){
        show.innerHTML=parseInt(inpu1.value)-parseInt(inpu3.value)
    }
    else if(inpu2.value=='/'){
        show.innerHTML=parseInt(inpu1.value)/parseInt(inpu3.value)
    }
    else if(inpu2.value=='*'){
        show.innerHTML=parseInt(inpu1.value)*parseInt(inpu3.value)
    }
}    */  
let typ =document.getElementById('typ')
let soo=document.getElementById('soo')

/* function hell(num2,num1){
    let c=num2+num1
    soo.innerHTML=typ.value
} */

function hell(){
    soo.innerHTML=typ.value
}



 let txt=document.getElementById('demo').innerHTML;

function func(params){
    document.getElementById('demo').innerHTML=
    txt.replace(/Selim/g,"Samad");
}



/*   let str = 'selim'
let dem=str.replace('s','t')
console.log(dem)  */


/*   let str = 'selimsooto'
let dem=str.slice(2,8)
console.log(dem) */ 

/*  let str = 'selim'
let dem=str.slice(2,4)
console.log(dem) */


/*  let str = 'selim'
let dem=str.substr(2,1)
console.log(dem)  */ 


/* let str = 'selim'
let dem=str.indexOf('m')
console.log(dem) */


/*  let str = 'selim'
let dem=str.lastIndexOf('e')
console.log(dem)
 */

/*  let str = 'selim is a programmer'
let dem=str.search('mmer')
console.log(dem) */
 

/*  let str = 'selim'
let dem=str.includes('s')
console.log(dem)  */





 let gen=document.getElementById('gender').value;


function input(){
  let gen= document.getElementById('gender').value;
     document.getElementById('gender')
     .value=gen.replace("sex","gender");
} 
function clear(){
    gen.value=''
}

/* function input(){
    let zz=document.getElementById('gender').value
    document.getElementById('gender')
    .value=zz.replace('sex','shut the fuck up')
} */


/* function func(){
    let d=document.getElementById('demo').innerHTML;
    document.getElementById('demo').innerHTML=
    d.replace('Hello','hi')
    d.toUpperCase('Hello')
} */
















