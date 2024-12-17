# Overview notes for react-demo ===

## Typescript file extensions

<ins>.tsx</ins> -- React component (Name.tsx [Pascal Casing])

<ins>.ts</ins> -- Plain typescript file

## Library vs framework

<ins>JS Library</ins> -- Tool providing specific functionality

- React is a Library. Good at building UI. Not so much at Routing, HTTP, app state, internationalization, form validation, animation, ect.

<ins>JS Framework</ins> -- Guidelines for building an application

## Imported libraries

<ins>Bootstrap</ins> -- CSS improving library

## Tips & Tricks

<ins>Conditional Render</ins> -- Assuming items is a list with 0 elements, `{items.length == 0 && <p>No items found</p>}` renders `No items found`. true && x = x

## State vs Props

<ins>Props</ins> -- Input passed to a component. (Function args, Immutable)

<ins>State</ins> -- Data managed by a component. (Local variables, Mutable)

Both cause a re-render
