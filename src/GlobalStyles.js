import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap');,
*, 
*::after, 
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: inherit;
  }

body {
    box-sizing: border-box;
    background-color: hsl(216, 12%, 8%);
    height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;
    padding: 0 1rem;
    font-family: 'Overpass', sans-serif;
    font-weight: 400;
}

`