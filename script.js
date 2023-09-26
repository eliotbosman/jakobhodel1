       // Array of background colors
       const backgroundColors = ['greenyellow', 'blue', 'orangered'];
        
       // Get all marquee elements
       const marquees = document.querySelectorAll('marquee');
       
       // Assign random background color to each marquee
       marquees.forEach((marquee) => {
           const randomIndex = Math.floor(Math.random() * backgroundColors.length);
           const randomColor = backgroundColors[randomIndex];
           marquee.style.background = randomColor;
       });