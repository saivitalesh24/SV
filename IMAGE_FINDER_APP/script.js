let form=document.querySelector('form')
let input=document.getElementById('image')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let imageToBeSearched=input.value
    let fetchData=async ()=>{
        let data= await fetch(`https://api.unsplash.com/search/photos?page=1&query=${imageToBeSearched}&client_id=UljxNEpDDjLiI1X7a31c7wXpZ3aPQGDY_lsDD7K2HEc`)
        let TempData=await data.json()
        let FinalData=TempData.results
        let image_container=document.getElementById('image_container')
        image_container.innerHTML=``
        FinalData.forEach((ele)=>{
            let FinalImagepath=ele.urls.small
            image_container.innerHTML+=`
            <img src=${FinalImagepath} class='FinalImage'>
            `
        })

    }
    fetchData()
})

