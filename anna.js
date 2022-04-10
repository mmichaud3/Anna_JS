
let color = '';

const anna = {
    favoriteColor: 'Purple',
    car: 'Jaguar',
    employer: 'Microsoft'
}

const mike = {
    favoriteColor: 'Green',
    car: 'Subaru',
    employer: 'Leadership Connect'
}

let quotes = ["But the people highest up got the lowest self-esteem. The prettiest people do the ugliest things.",
  "I refuse to accept other people’s ideas of happiness for me. As if there’s a ‘one size fits all’ standard for happiness.", "I refuse to follow the rules where society tries to control people with low self-esteem.", "Criticism can bother you, but you should be more bothered if there’s no criticism. That means you’re too safe.", "I'll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying.", "I would say my determination is way higher than my smartness.",
  "Ain't nobody watchin' I feel it's fadin'",  "We all self-conscious. I’m just the first to admit it.",
   "Shoot for the stars, so if you fall you land on a cloud.", "I don’t think there’s a living celebrity with more weapons formed against him, but I don’t think there’s one more prosperous."]
const handleClick = () => {
    const name = document.getElementById("nameField").value;
    document.getElementById("name").innerHTML = `Hello ${name}!`;
    if(name.toLowerCase() === 'anna' ){
        document.getElementById("color").innerHTML = anna.favoriteColor;
        document.getElementById("color").style.color = anna.favoriteColor;

        document.getElementById("car").innerHTML = anna.car;
        document.getElementById("employer").innerHTML = anna.employer;
    } else if (name.toLowerCase() === 'mike'){
        document.getElementById("color").innerHTML = mike.favoriteColor;
        document.getElementById("color").style.color = mike.favoriteColor;

        document.getElementById("car").innerHTML = mike.car;
        document.getElementById("employer").innerHTML = mike.employer;
    }

}

const handleKeyDown = (e) => {
    if (e.keyCode === 38)
 {
     getRandomColor();
     
}

}

// helper function
const getRandomColor = () => {
    
     color = `rgb(${Math.floor(Math.random() * (255 - 1) + 1)}, ${Math.floor(Math.random() * (255 - 1) + 1)}, ${Math.floor(Math.random() * (255 - 1) + 1)})`;
     console.log(color);
     document.body.style.backgroundColor = color; 
    
}

const handleDate = () => {
    document.getElementById('date').innerHTML=Date()
}

const handleAlert = () => {
    alert(`${quotes[Math.floor(Math.random() * quotes.length)]} -Kanye West`);
}

const imageChange = () => {
    const currentImage = document.getElementById("image").src;
    console.log(currentImage);

    if(currentImage === 'file:///C:/Users/mmich/OneDrive/Desktop/Anna_JS/images/coop-and-sally.jpg') {
    document.getElementById("image").src="images/dogs.jpg";
    } else {
        document.getElementById("image").src="images/coop-and-sally.jpg";
    }
}

setInterval(imageChange, 5000);

document.addEventListener('keydown', handleKeyDown);
