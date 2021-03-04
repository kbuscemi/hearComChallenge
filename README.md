## Frontend Developer Challenge - Kaylee Buscemi
To access the code and view the page on localhost:3000 please follow the steps below:
- To access the git repo 'hearComChallenge' click on this url: https://github.com/kbuscemi/hearComChallenge
- Clone the repo to your local computer. You can name the folder accordingly.
- Open up VS code or another dev environment, open up terminal, and then cd into the following folder: product.frontend-coding-challenge
- Once you are in this folder run npm start. You should see the following message appear: app listening on port 3000. Once you see this     
  message you can view the web page here: http://localhost:3000/

Description of my solution
- As indicated in the instructions I used vanilla Javascript to code the functionality and design of the web page. Focusing on the functionality part, I chose to group each radio button group within its own form tag rather than group them together under one form tag so I could have more flexibility with the functionality of the next button and ease when saving the responses. When a user clicks on the next button it will save their response as well as bring them to the next slide. The next button is initally disabled and is only enabled once a response is selected. Rather then display a message indicting a response needs to be selected the button is greyed out. The web page is responsive and can be viewed on multiple devices and major browsers.

-------------------------------------------------------------------------------

## Frontend Developer Challenge

Thank you for applying to hear.com as a frontend developer. We would like to get a general idea of your expertise and give you the chance to show us your skills.

This challenge will involve converting a visual design to HTML and CSS and then adding interactivity to that design using Javascript. In order to view the design, please create a [Figma](https://www.figma.com/) account and then import the `hear-com-landing-page.fig` into the Figma editor (you can use the web or desktop version of the app).

**The challenge**

 * Please convert the Figma design to HTML and CSS.
	- Please note that there are two versions of the page: 1) mobile and 2) desktop.
 * Within the design you will find a questionnaire “carousel”.
	- The questionnaire will consist of 6 total slides.
	- The first 5 slides will contain questions which you can find in `questions.txt`
		- Assume that in the future this number is subject to change and the code should be easily adaptable.
	- The last slide will contain a simple success message and should show all the answers the user selected in an easy to read format.
		- It is up to you on how to style this and make it look nice.
	- The answers to each question will act as radio buttons and you should only be able to select one answer per question.
	- Each question will have a submit button that will allow you to go to the next question.
	- Next and previous arrows will allow you to go back and forth between questions.
	- Each question is required and you should not be able to go to the next question without having answered the current question.
		- You might want to show the user some sort of message if this happens.
	- Bonus points
		- Add the ability to skip to certain questions via the use of URL params. For example: https://localhost:3000/?skip=2 would skip you to the second question.
		- Animate the transition between steps.

**Things to focus on**

 * Scalable and maintainable CSS and JS.
 * Accessibility.
 * Semantic HTML.
 * Speed optimization.
 * Attention to design details.

**Tech Requirements**

- Please use vanilla JavaScript only. No JQuery, React, or 3rd party libraries and frameworks.
- Please use vanilla CSS or SCSS. No Bootstrap or 3rd party CSS libraries and frameworks.
- The page should be responsive and should look good on all viewports and function correctly on all major browsers including Internet Explorer 11.
- Use a bundling tool like Webpack, Gulp, Parcel etc...
- An npm build command should build the entire page to a dist folder.

**Setting**

We expect you to invest about 4-8 hours for this challenge. We prefer quality over quantity. The level of feature completeness, documentation, tests is subject to your decision making. Feel free to make any trade-offs and document your decisions. Think: product management is on vacation and not available.

**Deliverable**

Please provide us a link to a git repo with your source code and instructions on how to run the code. Make sure it works out of the box and briefly describe your solution and explicitly mention any trade-offs and simplifications. Put instructions and a description in a README file.
