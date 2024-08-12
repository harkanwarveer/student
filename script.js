// Bird data
const birds = {
    swan: {
      img: 'https://climateadaptationexplorer.org/static/e557c1bf5c86a0bb83ee2ac959bd9956/6d13b/226.jpg',
      description: 'The Purple Swamphen is known for its beautiful and vibrant plumage. '
    },
    stilt: {
      img:'https://upload.wikimedia.org/wikipedia/commons/4/43/White-headed_Stilt.jpg',
      description: 'The pied stilt (Himantopus leucocephalus), also known as the white-headed stilt, is a shorebird in the family Recurvirostridae. '
    },
    thornbill: {
      img: 'https://i.guim.co.uk/img/media/e94081f2567d1022336bdb96551f72aeed9cb3a4/473_280_2513_1508/master/2513.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=6c55ea16432db54521869a8507bc858f',
      description: 'The King Island Brown Thornbill builds a domed nest consisting of shredded bark, grass and moss, usually near the ground.'
    },
    sparrow: {
      img: 'https://www.shutterstock.com/image-photo/side-view-small-brown-sparrow-600nw-2258702937.jpg',
      description: 'The Brown Sparrow is a small bird known for its adaptability and cheerful chirping.'
    },
    robin: {
      img: 'https://th.bing.com/th/id/R.378f1517168f640703cc7ba09860a219?rik=I5R141jxJiQqjA&riu=http%3a%2f%2fbushpea.com%2fbd%2fph%2fvik%2fim%2frose+robin+10.jpg&ehk=4moyvYdV5xTkgBgxJ0SgPKeLEqBRhe8iXq8qUyqbjTY%3d&risl=&pid=ImgRaw&r=0',
      description: 'The rose robin (Petroica rosea) is a small passerine bird native to Australia.'
    }
  };
  
  // Function to display bird info
  function displayBird(birdName) {
    const bird = birds[birdName];
    if (bird) {
      document.getElementById('bird-img').src = bird.img;
      document.getElementById('bird-description').textContent = bird.description;
      document.getElementById('bird-display').style.display = 'block';
    }
  }
  
  // Event listeners for bird buttons
  document.querySelectorAll('.bird-button').forEach(button => {
    button.addEventListener('click', function() {
      displayBird(this.dataset.bird);
    });
  });
  
  // Function to toggle theme
  document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.querySelectorAll('.bird-button').forEach(button => {
      button.classList.toggle('dark-theme');
    });
    document.getElementById('bird-img').classList.toggle('dark-theme');
  });
  
// Function to handle search form submission
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const query = document.getElementById('search-input').value;
    alert('Search for: ' + query);
});
  
// Function to log messages when a link is clicked
document.querySelectorAll('.nav-link, .aside-link').forEach(link => {
    link.addEventListener('click', function(event) {
        console.log('Link clicked: ' + this.textContent);
    });
});

// Function to handle link clicks in the aside section with an alert
document.querySelectorAll('.aside-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        alert('You clicked on: ' + this.textContent);
    });
});



// Function to change the background color of an element
function changeBackgroundColor(selector, color) {
    document.querySelector(selector).style.backgroundColor = color;
}

// Function to display the current date in a specific element
function displayCurrentDate(selector) {
    const dateElement = document.querySelector(selector);
    if (dateElement) {
        const now = new Date();
        dateElement.textContent = `Today's date is: ${now.toDateString()}`;
    }
}

// Initialize the functions
toggleClassOnClick('.toggle-class', 'active');
changeBackgroundColor('header', '#f0f0f0'); // Change header background color
displayCurrentDate('#current-date'); // Display the current date in an element with id "current-date"
