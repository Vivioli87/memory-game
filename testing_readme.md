# Mass Ctrlr - Band Website (Testing section)

[Main README.md file](https://github.com/Vivioli87/memory-game/blob/master/README.md)  

[Please view the live project here](https://vivioli87.github.io/memory-game/)

## Table of contents

1. [User Stories Testing](#user-stories-testing)
2. [Code Validation](#code-validation)
3. [Functionality Testing](#functionality-testing)
4. [Performance Testing](#performance-testing)
5. [Encountered Issues](#encountered-issues)

## User Stories Testing

### Visitor Stories

1. As a site visitor, I would like to have fun playing a simple memory game.
    - 
2. As a site visitor, I would like to have a brief overview of the rules before playing.
    - 
3. As a site visitor, I would like to be able to try a tutorial or demo before attempting a real game.
    - 
4. As a site visitor, I would like to be able to play different levels.
    - 
5. As a site visitor, I would like to be able to see how long each game took, how many moves were made and how accurate I was.
    - 
6. As a site visitor, I would like to be able to view the top scores/scorers on each level.
    - 
7. As a site visitor, I would like to log my top score with my name if I beat any 'top scores'.
    - 
8. As a site visitor, I would like an option to learn more about the subject matter of the game: Succulents.
    - 
9. As a site visitor, I would like a the game website to be easily navigable and have sleek design, that is responsive on different devices.
    - 
10. As a site visitor, I want the imagery and colors to be eye-catching that make me want to learn more about succulent plants.
    - 

### Business Stories

1. As a site owner, I have the same goals as the external users. I would like to make a game that I would enjoy playing.
    - 
2. As a site owner, I would like to make the game instructions simple to follow.
    - 
3. As a site owner, I would like to make the game logical to follow and interact with, even without reading the instructions prior.
    - 
3. As a site owner, I would like to provide a lot of interactivity within the game to provide information regarding the time taken, number of moves etc in order to produce 'top scores' and to provide a competitive element to the game.
    - 
4. As a site owner, I would like to share my passion for succulent plants as well as advice (separate to the game) on how to care for them.
    - 
5. As a site owner, I would like to provide a google map service so users can look up their local garden centre/succulent stockist.
    - 

[Back to table of contents](#table-of-contents)

## Code Validation

Every page of the project was validated by the [W3C Markup Validation Service](https://validator.w3.org/#validate_by_input) to ensure there were no syntax errors or issues.
[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input) was used to validate CSS code and [jshint.com](https://jshint.com/) was used to check JS code.

### W3C Markup Validation Service

Checked using both validate by direct input and validate by URI options.

#### Home page

No errors for home page.

![home page - validation]()


#### Game page

No errors for Game page.

![Game page - validation]()


### W3C CSS Validation Service

![CSS - validation]()

[Back to table of contents](#table-of-contents)

### jshint.com

## Functionality Testing

- Feature testing on each page in turn and for all screen sizes using the developer tools, my own personal devices and got friends/family to test also.
    - Checked that all links navigate correctly and that none are broken.
    - Checked the responsive layout worked as intented, using both chrome developer tools and my own personal devices.
    - Checked that the game play and javascript functions worked as expected. Functions such as:
        - Correct levels loaded when button clicked.
        - Flip card events.
        - Checking pairs match, including what to do if match/don't match.
        - only allowing 2 unique cards to be clicked in the one 'move'
        - what happens at the end of the game
        - game information updating or re-setting.

    - Checked that all elements that have a 'hover' attribute to them such as footer links, button on contact page respond correctly.

### Browser Testing

The website was tested on the following browser types. All browser versions were up to date.
- **Google chrome** - best performance with all cookies allowed.
- Windows Internet explorer
- Safari
- Samsung Internet
- Google chrome for Android   


The website is functioning and fully responsive on all above mentioned browsers.

### Device Testing

For all my media queries, I used the following page for help on [standard device sizes](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

The website was tested on the following devices:
- desktop computer
- Samsung Galaxy A70
- Apple iPad

The site has been tested on friend's devices also which include iphones however without overseeing the testing myself due to lockdown I have not included these in my testing document.

I have tested other devices using the chrome developer tools including:
- Moto G4
- Galaxy S5
- Pixel 2 / Pixel 2 XL
- iPhone 5 / SE / 6 / 7 / 8 (incl Plus options) / X
- iPad / iPad Pro
- Surface duo
- Laptop

The website is platform-cross compatible and has a consistant result. However as noted on the main README doc, for the best game experience (especially on hard level) larger device sizes are recommended to be able to view all cards in the game.

[Back to table of contents](#table-of-contents)

## Performance Testing

Using lighthouse on Google Chrome developer tools - reports generated 

#### Home page


#### Game page



### Issues highlighted from Lighthouse reports and fixed.

- issues with image sizes and formats in performance section.
- meta descriptions missing for pages.

[Back to table of contents](#table-of-contents)

## Encountered Issues



[Back to table of contents](#table-of-contents)
