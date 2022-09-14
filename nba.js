 const array=[
     {
         image_description:{
             header: "75: Stories James Harden",
             paragraph: "A two way lethal force on the court, James Harden has earned a pair of NBA championships and Finals MVPS in his career"
         },
         image: "images/harden1.jpg"
     },
     {
         image_description: {
             header:"75: Stories James Harden",
             paragraph: "A two way lethal force on the court, James Harden has earned a pair of NBA championships and Finals MVPS in his career"
         },
         image:"images/slide2.jpg"
     },
     {
         image_description:{
             header: "75: Stories James Harden",
             paragraph: "A two way lethal force on the court, James Harden has earned a pair of NBA championships and Finals MVPS in his career"
         },
         image: "images/103191.jpg"
     },
     {
         image_description:{
             header: "75: Stories James Harden",
             paragraph: "A two way lethal force on the court, James Harden has earned a pair of NBA championships and Finals MVPS in his career"
         },
         image: "images/1651697.png"
     },
     {
         image_description:{
             header: "75: Stories James Harden",
             paragraph: "A two way lethal force on the court, James Harden has earned a pair of NBA championships and Finals MVPS in his career"
         },
         image: "images/1651779.jpg"
     },


 ];


function imagesAnimation(array){
    let index=0;

    setInterval(()=>{
        if(index <= 5){
            const image=document.querySelector(".sliding-img");
            const h4=document.querySelector(".title");
            const p=document.querySelector(".paragraph");
            h4.innerText = array[index].image_description.header;
            p.innerText = array[index].image_description.paragraph
            image.src = array[index].image
            image.style.animation = "film 6s ease-in-out"
            index++;
        }else{
            imagesAnimation(array);
        }
    }, 6000)
}

imagesAnimation(array);




