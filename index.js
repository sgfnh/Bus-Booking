function handle(event){
    event.preventDefault()
    const user={
        "nam":event.target.nam.value,
        "email":event.target.mail.value,
        "pho":event.target.pho.value,
        "car":event.target.car.value
    }
    axios.post("https://crudcrud.com/api/0ce967584a5944a7a9988cab29669d53/busd",user)
    .then((res)=>{
        showScr(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
    showScr(user)
}
window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/0ce967584a5944a7a9988cab29669d53/busd")
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
    const ui=document.createElement('li')
    ui.textContent=user.nam+user.email+user.pho+user.car
    lo.appendChild(ui)
    const dbtn=document.createElement('button')
    dbtn.textContent="Delete"
    ui.appendChild(dbtn)
    dbtn.addEventListener("click",()=>{
        localStorage.removeItem(user.nam)
        lo.removeChild(ui)
    })
    const ebtn=document.createElement('button')
    ebtn.textContent="Edit"
    ui.appendChild(ebtn)
    ebtn.addEventListener("click",()=>{
        lo.removeChild(ui)
        document.getElementById('nam').value=user.nam
        document.getElementById('mail').value=user.email
        document.getElementById('pho').value=user.pho
        document.getElementById('car').value=user.car
    })
}
