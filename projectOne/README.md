Mile Stone One:
--------------------------------
Overall description of the project:
    I would like to make a website that uses anime.js to illustrate recipes to a user through the use of scrolly-telling. The website would aim to make simple recipes even simpler, the intended audience would be children, or people that are very new to cooking and want to experiment with super easy recipes. One inspiration that I had for this project is [Atmos](https://atmos.leeroy.ca), I really like how as you scroll the airplane flies through different facts.I thought that it was a super inventive way to format a website.

Wireframe that shows the design and flow of your site:
    my hand drawn sketches:
    ![cover page](Group-PDF-Export_page_1.jpeg) 
    ![process page](Group-PDF-Export_page_2.jpeg)
    ![finished page](Group-PDF-Export_page_3.jpeg) 

Description of how you intend to use JavaScript to significantly enhance the user experience of your website:
    Using Anime.js to make simple illustrations move as you scroll. This would require event listeners for scroll. I would also like to have a drop down to have users pick from a few different recipes.

Description of which new-to-you JavaScript library or 3rd party API you intend to you, and what you intend to use it for:
    Anime.js is the new-to-me library that I would like to use for this project and I intend on using it for animating shapes and images alongside scroll.

Any content or information sources you intend to draw upon, start thinking about them early and include them in the proposal if possible:
    Sources of information I might pull from are online recipes. I have not sorted out which recipes I am going to include yet, but I will cite any recipes that I use.

Describe or show how you intend to make the website responsive to different screen sizes and environments:
    I plan on using window.matchMedia() in the javascript, I will check if a window has been resized and if so I will resize the content. 

Your goals for the project should be split up by what you think are goals for:
    
    Prototyping/proof of concept:
        Drop down menue to select recipie as well as unanimated recipies layed out in scroll friendly format

    MVP (Minimum Viable Product):
        Three simple recepies, with abstracted illustration (2d primitive shapes)

    Stretch goals:
        Five recepies, More advanced illustrations such has custom drawings for each recipe


Mile Stone Two:
--------------------------------

Up to now I have focused my efforts on designing the layout of my website and learning the basics of Anime.js. Through learning figma I have created a "high fidelity" mock up of my webpage that resembles what I would like my page to look like.

[Mock Up](https://www.figma.com/design/3hf3KFyFOf3J5LMHdvjCjM/HF-recipease?node-id=9-356&t=OJBx5Z9oOokUOUbk-1)

I have also been learning about how to install and animate using Anime.js. For my project most of the animation will be done through scrolling. In order to accomplish this I think I am going to time amount my animations to the scroll percents of the page, as long as I am easily able to animate based on user scroll the project should ocme together nicely. Below is a link to some test code I created using Anime.js.

[Test Animations](https://github.com/WolfgangLoud/ATLS-4630-FA24/blob/b36f2f6484d9c084770dc13e1b81cc8aa6c3c6a0/projectOne/main.js)

Finally, one thing I have decided to change about my project is the scope. Instead of having my MVP be three recipes I think I will start with one and focus on rendering better animations. My stretch goal will then be three recipes that users can pick from. I decided that the most tedious part of the project is going to be all the illustraitions and limiting this should give me a lot more time to focus on whats important.


Mile Stone Three:
--------------------------------

[Project One Deployment](https://atls-4630-fa-24-5742.vercel.app/)

Mile Stone Four:
-----------------------------------------------------------
After altering my MVP reaching my goal became a lot more obtainable. I have never animated anything in JavaScript before and I found it to be a tedious process. Anime.js as a library was pretty intuitive and the documentation was very helpful, however I just found there to be a lot of repitition in terms of calling the anim function, especially upon the completion of other anime functions. 

Getting animations to trigger upon scroll was very anoying, especially when trying to calculate things from offset top using the div locations. The solution that I found was another library called waypoint. This library is Awesome! It would target the dive and use a handler based on scroll direction. If the user was scrolling downwards and it reaches the waypoint it could trigger the code inside, in this case an anime function.

The website has a few kinks that would ideally be straightend out, however due to the amount of work involved in this project I am not so sure they will be. For one the website will not work on mobile devices as there is too much reliance on absolute position and more planning from the beginning would have been necessary to implement this. Also having animations not trigger once they have been triggered once would helo with user experience of the site. Overall I'm happy with the way this site turned out and I learned alot in through the development process.





