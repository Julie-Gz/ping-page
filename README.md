# Frontend Mentor - Ping coming soon page

![Design preview for the Ping coming soon page coding challenge](./screenshot/Frontend%20Mentor%20Ping%20coming%20soon%20page-Desktop.png)

## The challenge

Your challenge is to build out this Coming Soon page and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to: 

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Links

- Solution URL: (https://www.frontendmentor.io/solutions/html-css-javascript-responsive-design-accessibility-EOEQ8AgDgi#comment-64ee65f24003acb43a25c2b3)
- Live Site URL: (https://julie-gz.github.io/ping-page/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- Ionicons (https://ionicons.com)
- Lighthouse (chrome tool)
- Form Troubleshooter (chrome extension)
- Pesticide (chrome extension)

### What I learned

- How to improve the performance of a page by recuding CLS(Cumulative Layout Shift) and LCP(Largest Content Paint):
  In most pages the largest content is an image. One of the ways to ensure the image is as performant as possible is to include a width and height in the img tag and set the max-width to 100% in css. 
  Using the fetchpriority attribute on images that are at the top of a page will give the user's a better experience? This is becuase it reduces CLS and LCP

  ```html
      <img src="images/logo.svg" alt="Ping Logo" class="logo" fetchpriority="high" height="200" width="200">
  ```

- Ensuring Keyboard navigation by adding Focus style 

  ```css
  input:focus-visible, button:focus-visible{
    border: 2px solid var(--PaleBlue);
	}

- Using the blur event to listen when a user is inputing data and using the user-invalid property for styling:
  I used to use the :invalid property to apply the styles for when the user input is invalid, however I found that using :invalid made them the default style for the input field. :user-invalid solves this issue because it only applies after the user focuses on the field and the leaves it. If the input is invalid THEN the styles apply, if not, the original style remains.

  ```css
  input:user-invalid{
      border: 1px solid var(--LightRed);
      position: relative;
  }

- I also learned that the blur event. The blur event fires when an element loses focus (Learn Forms: JavaScript)
  This ensures the error message is displayed after the user leaves the input field for better experience.	

	```js
	  userEmail.addEventListener("blur", function (e) {
    	e.preventDefault();
    	if (userEmail.validity.valid) {
    	    userEmail.style.borderColor = "var(Gray)";
    	    errorMessage.textContent = "";
    	} else {
    	    userEmail.style.borderColor = "var(--LightRed)";
    	    errorMessage.textContent = "Please provide a valid email address";
    	}
	});
	```
### Continued development
- There's still a lot I need to learn about form validation such as using the fecth API and the onsubmit event, data privacy and so on.

### Useful resources

- (https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid) - This helped with styling the input field in case of an invalid input.
- (https://web.dev/learn/forms/) - This website covers all there is to learn about forms, from styling, accessibility,form validation, and so much more. Highly recommended
- (https://dequeuniversity.com/rules/axe/4.6/role-img-alt?application=axeAPI) - Explains how to properly use elements with the role="img" to improve accessiblity.


## Acknowledgments
- A huge thank you to Atif Iqbal (@atif-dev) for giving me tips on how to improve my code.