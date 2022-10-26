### React

React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.

## Getting started

First, install Node.js. Then open your terminal and run this line to create a project:

```
npx create-react-app my-app
```

Now you can run your app with:

```
cd my-app
npm start
```

## Your editor

VS Code is one of the most popular editors in use today. It has a large marketplace of extensions and integrates well with popular services like GitHub. Most of the features listed below can be added to VS Code as extensions as well, making it highly configurable!

### Component

React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page. React component names must always start with a capital letter

### JSX

JSX is stricter than HTML.
You have to close tags like <br />.
Your component also can’t return multiple JSX tags.
You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper

```
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
```

### Conditional rendering

```
<div>
  {isLoggedIn && <AdminPanel />}
</div>
```

### Rendering lists

You will rely on JavaScript features like for loop and the array map() function to render lists of components.

For example, let’s say you have an array of products:

const products = [
{ title: 'Cabbage', id: 1 },
{ title: 'Garlic', id: 2 },
{ title: 'Apple', id: 3 },
];

Inside your component, use the map() function to transform an array of products into an array of <li> items:

```
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
```
