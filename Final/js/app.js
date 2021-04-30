    
//function that stores the quotes and author
(function() {
    const quotes = [
        {
            quote:
               "Spiderman into the Spiderverse grossed about $375.5 million in 2018",
            author: " - Sony Pictures Entertainment"
        },
        {
            quote:
               "The Truman Show made $264,118,201 in 1998 worldwide Box Offices",
            author: " - Peter Weir Movie"
        },
        {
            quote:
               "Sword of the Stranger made $258,490 worldwide in 2007",
            author: " - Masahiro Andô Movie"
        },
        {
            quote:
               "The Producers in 1967 made $375,524 worldwide",
            author: "- Mel Brooks Movie"
        },
        {
            quote:
               "Brother Bear made $250,397,798 worldwide in 2003",
            author: "- Aaron Blaise & Robert Walker Movie"
        },
        {
            quote:
               "Kung Fu Panda made $631,746,197 worldwide in 2008",
            author: "- DreamWorks film"
        }
    ];

    const btn = document.getElementById("generate-btn");

    //Event for the button
    btn.addEventListener("click", function() {
        let random = Math.floor(Math.random() * quotes.length);
        console.log(random);

        document.getElementById("quote").textContent = quotes[random].quote;
        document.querySelector(".author").textContent = quotes[random].author;
    });
})();
