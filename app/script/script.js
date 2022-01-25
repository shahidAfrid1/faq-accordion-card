const qustion = document.querySelectorAll(".question");

qustion.forEach(qustion =>{
    qustion.addEventListener("click", ()=>{
        qustion.classList.toggle("active");
    })
})