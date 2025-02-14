# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Film Project, Part 1

## Your Mission (If You Choose to Accept It...)

...is to build a film app that will feature a list of all of the recent popular movies. A user can scroll through the titles, click one for more details, and save it to their favorites.

Note, this is just the first phase of this project; the app won't be completed until a future lesson. For today, the plan is to identify the overall application structure, then create the individual components that support that structure. You'll pass films as props to each component and ultimately use iteration to render one component for each film. At the end of this exercise, you will have the app seen here:



![](images/film-1.png)



### Ready?

OK. Start by [forking and cloning](https://git.generalassemb.ly/true-digital-academy/rct01-homework.git) this repo. You can find all the materials you need in the `react-film` folder.

**Important**: After each step that follows, check your application to see how it looks before moving on. It's good practice to be sure your app is working correctly before adding new functionality.

Don't forget any <code>import</code> statements as you add more files.


#### Step 1: Create the Baseline Layout

First, create the layout. You'll have a `Films` column and a `Details` column.

Have the provided `App` component render the code seen here:

```html
<div className="film-library">
  <div className="film-list">
    <h1 className="section-title">FILMS</h1>
  </div>

  <div className="film-details">
    <h1 className="section-title">DETAILS</h1>
  </div>
</div>
```

#### Step 2: Create New Components: `FilmListing` and `FilmDetails`

Move `film-list` and `film-details` into their own separate components (in separate files): `FilmListing` and `FilmDetails`, respectively.

Make sure you now call these components in `App.js`. Check your app in the browser. If you've done it right, nothing will have changed, and the application will look the same.


#### Step 3: Pass Props to the New Components

Pass the films (stored in `TMDB.films`) to each of your new components as props.

If you check your file, it still shouldn't look different. We're sending the props to the components, but we are not using the props just yet.

<details>
  <summary>Hint</summary>
  For now, this step is just simply the <code>App.js</code> file to make sure it imports the film file and passes props.
</details>


#### Step 4: Render a Film

In the `FilmListing` component, render the title of just one film as an `<h1>` below the `section-title`.

Does "It" appear on the left side of your browser?


<details>
  <summary>Hint</summary>
  The <code>films</code> prop is an array, and you just want the title from the first one.
</details>


#### Step 5: Create and Render an Array of Film Title Elements

Use `.map()` inside of the `FilmListing` to iterate over the collection of films and create an element for each one. (Here is the [map documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)).

Then, render the `allFilms` variable underneath the "Films" `<h1>`.

You should see a list of all of the films appear in the left column.


<details>
  <summary>Hint: Need help on <code>.map()</code>?</summary>
  This step will look like this in your <code>render()</code> method (above the <code>return</code>):
  <code> let allFilms = this.props.films.map( (film, index) => ( your-jsx-per-film-here ))</code>
    Then, you'll just need to call <code>{allFilms}</code> in your JSX where you want the titles to appear.
</details>

#### Step 6: Move the Film Rows to Their Own Component

Create a new component for each film row named `FilmRow.js`. Have your `.map()` create an array of `FilmRow`s. Don't forget to pass the individual film prop to the component when creating them!

Once you have this working, also pass `film.id` as a `key` prop to `FilmRow`, although you won't use it yet.

#### Step 7: Flesh Out Each Film Row

Make each film row in the film list look like the main finished image using the following markup (replace `TITLE` and `YEAR` with the actual title and year of the film).

You'll have to create the `posterUrl` for each film by combining the prefix, `https://image.tmdb.org/t/p/w780/`, with each film's `poster_path` property.

You'll also have to extract the year from the `release_date` property. To do this, you'll need to figure out how to use the [`getFullYear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear) JS method.


```
<div className="film-row">
  <img src={posterUrl} alt="" />

  <div className="film-summary">
    <h1>TITLE</h1>
    <p>YEAR</p>
  </div>
</div>
```


<details>
  <summary>Hint on <code>getFullYear()</code></summary>
  <code>getFullYear()</code> will be a single line of new code, and you'll use the keywords <code>new</code> and <code>Date</code>.
</details>


#### Step 8: Move Film Posters to Their Own Component

Here's the final step for today!

Because the poster requires you to create the URL first, move those elements to their own component. This could be reusable later. **Don't forget to** pass the film as a prop to the new `FilmPoster` component.

### Ready to submit your work?

Awesome, and congratulations on the finish! Now first, make sure all your work is committed and pushed. Run the following commands in a terminal window in the project folder:

- `git add .`
- `git commit`
- `git push`

Next, go to `github.com` and make a pull request (a PR) to our original repo. How did you feel about the homework? Was it the right amount of challenge? Or was it too easy or too complicated? Let us know in the PR comments!
