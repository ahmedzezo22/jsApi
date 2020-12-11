
   
   fetch('https://jsonplaceholder.typicode.com/photos').then(
    res=>{
        if(res.status==200){
            return res.json()
        }
        else throw new Error('error')
    }
).then(data=>{
   x=data
    data.forEach(element => {
    console.log(element.id)
    div=document.querySelector('.row')
   img= getelements('img',element.url)
   col=document.createElement('div')
   col.classList.add('col-md-3')
  
div.appendChild(col).appendChild(img)
    });
})
.catch(e=>console.log(e))
let  getelements=function(name,url) {
    x=document.createElement(name)
    x.setAttribute('src',url)
    return x
} 
    

