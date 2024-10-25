# Forum Wbrothers

- Frontend: 
https://wbrothers-forum-angular.netlify.app/ 

- Backend
https://github.com/wbrothersCuba/wbrothers-forum-angular
  

This forum is a **responsive frontend SPA** build with **Angular** and **Bootstrap**. Registration is required to access all features. Each user can edit and delete only their post.

  

*Sections:*

-Sign Up: to register on the forum.

-Sign In: for login previous registration.

-Topics: Display a paginated list of all topics and the possibility of posting a comment.

-Add topics: a new topic specifying the title, content or question, code, and programming language.

-Members: shows all the users of the forum and its comments.

-Search: search for the word in the topics.

-My topics: displays the logged-in user's topic entries and the options to edit and delete each one.

-My profile: displays the topic entries of the logged-in user and gives the possibility of posting a comment.

-Settings: the sing user can edit their data: name, last name, email, and user avatar.

-Edit: change any topic data of the login user.

-Delete: remove one topic of the login user.

  

The file *global.ts* inside the path: `..\src\Services\global.ts` contains the URL for the backend API.

  

export var global = {

URL: 'http://localhost/api-rest-laravel/public/api/',

....

## TO DO
- Update to Angular version to 18.
- Update Bootstrap to version 5.
- Update Highlight.js 
