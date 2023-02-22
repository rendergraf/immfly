# README #

This is an immfly Frontend test, a web application must be made that consumes an API, it must show a list of items and be able to click on each one of them and show the detail on another page.

I am going to create a bundle with webpack.config.js so that it generates a 'dist' folder, there the 'png|jpg|gif|svg' assets are exported with 'url-loader' to a folder called 'assets', javascript files splitChunks and cacheGroups, as well as export the minified html and export the SASS to CSS 'style.css' compressed with 'sass-loader'.

### Api Endpoints
The api base url is https://pokeapi.co/api/v2.

**List**: /pokemon (maybe you have to add the limit parameter on the request to fetch the first generation in only one request).

**Detail**: /pokemon/:name.

For example:

**Charizard**: https://pokeapi.co/api/v2/pokemon/charizard

**Bulbasaur**: https://pokeapi.co/api/v2/pokemon/bulbasaur

## 🧐 They want to see 🧐
- React knowledge (**hooks** and last features).
- Project architecture
- Css skills
- Javascript skills
- Clean code and good practices

## ✅ I should ✅
- **NOT USE** bootstrap or other css frameworks.
- **Prevent unknown urls** while redirecting to the list page
- Avoid using 3d party packages as much as you can
- Pay attention to details
- Responsiveness (mobile/tablet/desktop)
- *The simple, the better*, avoid overengineering.

## 🌟 Bonus 🌟
- Allow to select user's favourite pokemon and see them in a new page. Feel free to design it.
- Add a filter to search pookemon by name
- Use **styled-components**
- Add **tests**
- Use a **linter**
- Custom **webpack** implementation instead of **create-react-app** or similar packages