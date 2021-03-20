// function add(){
//     alert('mohmaed');
// }

///////////////////////////////////////////////////////////// var add = function(){
//    var x = document.getElementById('x').value;
//    var y = document.getElementById('y').value;

//     // if(x === '' ){
//     //     document.getElementById('x').classList.add('error');
//     // }else if(y === ''){
//     //     document.getElementById('y').classList.add('error');
//     // }else{
//     //     document.getElementById('x').classList.remove('error');
//     //     document.getElementById( 'y').classList.remove('error');
//     //     document.getElementById('res').innerHTML = x*y;
//     // }


//     if(x ==''){
//         document.getElementById('x').classList.add('error');
//     }else{
//         document.getElementById('x').classList.remove('error');
//     }
    
//     if(y ==''){
//         document.getElementById('y').classList.add('error');
//     }else{
//         document.getElementById('y').classList.remove('error');
//     }

//     // if(y != '' || x != ''){
//     //     document.getElementById('res').innerHTML = x*y;
//     // }
///////////////////////////////////////////////////////////// }

// (function(){
//     alert('mustafa');
// })();



// window.onscroll = function(){
//     if(window.scrollY > 50){
        
//         document.getElementById('nav').classList.add('bgon');    
//         document.getElementById('nav').classList.remove('bg');    
//     }else{
//         document.getElementById('nav').classList.add('bg');    
//         document.getElementById('nav').classList.remove('bgon');    

//     }


//     // console.log(window.scrollY);
// }

window.onscroll = function(){
    if(window.scrollY > 50){
        document.getElementById('nav').classList.add('doub');
    }else{
        document.getElementById('nav').classList.remove('doub');
    }
}