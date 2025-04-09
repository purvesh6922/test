let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul")

btn.addEventListener("click",function(){
    let item=document.createElement("li")
    item.innerText=inp.value

    let dltbtn=document.createElement("button")
    dltbtn.innerText="delete";
    dltbtn.classList.add("delete")
    item.appendChild(dltbtn);
    ul.appendChild(item);
    inp.value="";
})

ul.addEventListener("click",function(e){
    if(e.target.tagName==="BUTTON"){
        let par=e.target.parentElement;
        console.log(par);
        par.remove();
    }
})


// //let dltbtns=document.querySelectorAll(".delete");
// //for(dltbtn of dltbtns){
//     dltbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     })

