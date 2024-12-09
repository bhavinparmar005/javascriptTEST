async function getData() {

    try{


        let response = await fetch('hello.json');

        let finalData = await response.json();

        // console.log(finalData);

        finalData.forEach(val => {
            // console.log(`
            //     img :-${val.img}
            //    name :-${val.brand}
            //    size :-${val.size}
            //   color :-${val.color}
            //     `);

            let container = document.querySelector('.container');

            let div = document.createElement('div');
            div.innerHTML = `
             <div class="card">
            <div class="img">
                <img src="${val.img}" alt="">
            </div>

            <div class="brand_name">Brand :- ${val.brand}</div>
            <div class="size">SIZE :- ${val.size}</div>
            <div class="color">COLOR :- ${val.color}</div>

        </div>
            
            `

            container.appendChild(div);
            
        });






    }catch(error){
        console.log(error);
        
    }
    
}

getData();