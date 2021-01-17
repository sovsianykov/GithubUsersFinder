
document.getElementById('button3').addEventListener('click', getExternal);



async  function getExternal() {
  let card = document.createElement('div')
  const output = document.querySelector('#output')
  card.classList.add('card')


      let outp = ''
await  fetch(  'https://api.github.com/users?page=2&per_page=200')
      .then( data => data.json())
      .then(data => data.forEach(mem =>

          {
            console.log(mem)



            let crtd = document.createElement('div')
            let imgholder = document.createElement('div')
            crtd.classList.add('item')
            imgholder.classList.add('imageholder')


          crtd.innerHTML =  ` <span>${mem.login}</span><br>
            <div class = "imageholder"> <img src=${mem.avatar_url}/></div>
              <a href="${mem.html_url}" >show more</a>`


            output.appendChild(crtd);


          }
      ) );
}



