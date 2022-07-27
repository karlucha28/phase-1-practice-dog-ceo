//CHallenge 1
function renderOnePhoto(dog) {
    let card = document.createElement('li')
    card.innerHTML = `
<img src='${dog}'/>
`
document.querySelector('#dog-image-container').appendChild(card)

}

function addAllPhotos(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    .then(data =>  {data.message.forEach(dog => renderOnePhoto(dog))
})
}
addAllPhotos()




//Challenge 2
function renderAllDogBreeds(breed) {

    let dogBreed = document.createElement('li');
    dogBreed.innerText = `${breed}`;
    dogBreed.setAttribute("id", `${breed}`);
//Challenge 3
    dogBreed.addEventListener('click', changeColorFunction)

    function changeColorFunction() {
        
        dogBreed.style.color = 'red'

    }
//Challenge 3//

    document.querySelector('#dog-breeds').appendChild(dogBreed)


}
let keysOfDogs =[];

function addAllDogBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(ress => ress.json())
    .then(dogBreeds =>  {keysOfDogs = Object.keys(dogBreeds.message);
        keysOfDogs.forEach(breed => renderAllDogBreeds(breed))
    })
}


addAllDogBreeds()

//Challenge 4
let ourLetter = document.querySelector('#breed-dropdown')
ourLetter.addEventListener('change', getLetterDogs)

function  getLetterDogs() {
    
for( let i=0; i < keysOfDogs.length; i++) {
    if (keysOfDogs[i].charAt(0) == ourLetter.value) {
        document.querySelector(`#${keysOfDogs[i]}`).style.display = 'block';
        console.log(keysOfDogs[i]) 
    } else {
        document.querySelector(`#${keysOfDogs[i]}`).style.display = 'none'
    }
}
}
//console.log(dogBreeds)
