# Book Search Engine

## Description

This app enables readers to search for new books and keep a list for future purchases. 

---

## App functionality

GIVEN a book search engine

WHEN users load the search engine

THEN they are presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button

WHEN they click on the Search for Books menu option

THEN they are presented with an input field to search for books and a submit button

WHEN they are not logged in and enter a search term in the input field and click the submit button
THEN they are presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN they click on the Login/Signup menu option

THEN a modal appears on the screen with a toggle between the option to log in or sign up

WHEN the toggle is set to Signup

THEN they are presented with three inputs for a username, an email address, and a password, and a signup button

WHEN the toggle is set to Login

THEN they are presented with two inputs for an email address and a password and login button

WHEN they enter a valid email address and create a password and click on the signup button

THEN a user account is created and they are logged in to the site

WHEN they enter my account’s email address and password and click on the login button
THEN the modal closes and they are logged in to the site

WHEN they are logged in to the site
THEN the menu options change to Search for Books, an option to see saved books, and Logout

WHEN they are logged in and enter a search term in the input field and click the submit button

THEN they are presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to the account

WHEN they click on the Save button on a book

THEN that book’s information is saved to my account

WHEN they click on the option to see saved books

THEN they are presented with all of the books they have saved to account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from account

WHEN they click on the Remove button on a book

THEN that book is deleted from the saved books list

WHEN they click on the Logout button

THEN they are logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  

---

## Table of Contents

  <ul>
    <li>
      <a href="#description">Description</a>
    </li>
    <li>
      <a href="#app-functionality">App functionality</a>
    </li>
    <li>
      <a href="#demo">Demo</a>
    </li>
    <li>
        <a href="#questions">Questions</a>
    </li>
    <li>
        <a href="#acknowledgments">Acknowledgements</a>
    </li>
  </ul>

---

## Demo

You can check out the app following [this link.]()

This video demonstrates app functionality when a user signs up.

https://user-images.githubusercontent.com/111567114/235399815-2c097ac5-1446-4fa8-aae1-63593a058ce9.mov

---

## Questions

If you have any questions regarding this project, please don't hesitate to contact me using my email address: pomyateevav@gmail.com. You can find my project repositories here: [veronika-pomy](https://github.com/veronika-pomy?tab=repositories).

---

## Acknowledgments

This list includes resources used for the project.

- [Apollo GraphQL](https://www.apollographql.com/docs/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [Best README Template](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)
- [concurrently](https://www.npmjs.com/package/concurrently)
- [Express](https://expressjs.com/)
- [Heroku](https://devcenter.heroku.com/)
- [JWT](https://jwt.io/)
- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/en/)
- [React](https://react.dev/)

<p align="right">(<a href="#book-search-engine">back to top</a>)</p>
