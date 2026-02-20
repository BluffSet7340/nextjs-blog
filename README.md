## Daily Journal

Learning how the Pages router works in next.js

### 13th February 2026 - 

index.js in the page folder is the same as the base url + the "/", so the first page that you come across when you first enter a webpage. Then created a new folder so you append the /posts/first-post to access the post.We are using functional components so gotta do the classic export default function.

Just by using the pages directory you create different pages that correspond to the url that you set as the folder name, seems easy to use. 

We use the Link component in Next.js to navigate to other pages via a click. Can accept props too.

The Link component does not do a full refresh like the a tag. I think Link component is sort of like using react router where you can navigate without refreshing the whole page, making it faster for the browser to load the content. Link does the so called client side navigation, using JS to handle navigation. 

So next.js does code splitting, only loading stuff that is needed to present to the user, prefetching means that if there is a page presented to the user that has a link component, then next.js prefetches that code in the background so that you can access it quickly, only in production. 

CSS modules allow you to import CSS files in a React component.

To use CSS modules, ends the filename with module.css

Wow CSS modules removes the possibility of class name collisions since unique generation of class names are handled for you. Support code splitting.

New thing that I learnt even though the max width is set to be 36rem, that is content width not the final width. The width in the console is content width + padding. Not margin xDD. 

The Image component handles stuff for you xD. Better than the usual img tag.

Lazy loading, things are loaded as they enter the viewport. 

### 15th February 2026 -

Head is the next.js component. 

Next.js has its own Script component to deal with the limitations of your average script tag.

Cool it also supports sass

The global css file imports only into the _app.js file

### 19th February 2026 -

Okay I changed the color of the link in the global.css file and it only changes the color of the Link component in the first-post.js file except for the homepage (index.js). I believe this is due to the Home.module.css file that takes priority over the global.css file 

### 20th February 2026 - 

GetStaticProps is a data fetching method in next.js. The page is loaded by the browser and the JS code runs to make it fully interactive. This process is called hydration.

Initial load only the html is pre-rendered and displayed. Once that is done, then the JS loads and the app becomes interactive (hydrated).