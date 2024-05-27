function handle(event){
    event.preventDefault()
    const user={
        "nam":event.target.nam.value,
        "email":event.target.mail.value,
        "pho":event.target.pho.value,
        "car":event.target.car.value
    }
    axios.post("https://crudcrud.com/api/e46fbc3ae36b40a780629fa9266da030/busd",user)
    .then((res)=>{
        showScr(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
   
}
window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/e46fbc3ae36b40a780629fa9266da030/busd")
    .then((res)=>{
        console.log(res)
        for(var i=0;i<res.data.length;i++){
            showScr(res.data[i])
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})
function showScr(user){
    const lo=document.getElementById('lo')
    const ui=document.createElement('p')
    ui.setAttribute("id",user.car)
    ui.textContent=user.nam+"  "+user.email+"  "+user.pho+"  "+user.car
    lo.appendChild(ui)
    const dbtn=document.createElement('button')
    dbtn.textContent="DELETE"
    ui.appendChild(dbtn)
    dbtn.addEventListener("click",()=>{
        axios.delete(`https://crudcrud.com/api/e46fbc3ae36b40a780629fa9266da030/busd/${user._id}`)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
        lo.removeChild(ui)
    })
    const ebtn=document.createElement('button')
    ebtn.textContent="EDIT"
    ui.appendChild(ebtn)
    ebtn.addEventListener("click",()=>{
        lo.removeChild(ui)
        document.getElementById('nam').value=user.nam
        document.getElementById('mail').value=user.email
        document.getElementById('pho').value=user.pho
        document.getElementById('car').value=user.car
        axios.delete(`https://crudcrud.com/api/e46fbc3ae36b40a780629fa9266da030/busd/${user._id}`)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
        lo.removeChild(ui)
        axios.post("https://crudcrud.com/api/e46fbc3ae36b40a780629fa9266da030/busd",user)
       .then((res)=>{
        console.log(res.data)
        })
       .catch((err)=>{
        console.log(err)
        })

    })
    const drop=document.getElementById('fil')
    drop.addEventListener("change",()=>{
        var sel=drop.value
        var tab=document.getElementById('lo')
        for(var i=0;i<tab.children.length;i++){
            if(sel==='All'){
               tab.children[i].style.display='';
            }else{
                if(tab.children[i].id!==sel){
                    tab.children[i].style.display='none'
                }else{
                    tab.children[i].style.display=''
                }
            }
        }

    })
}
