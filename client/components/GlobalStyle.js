import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
font-family: 'Segoe UI';
font-style: normal;
font-weight: normal;
src: local('Segoe UI Regular'), url('../static/Segoe UI.woff') format('woff');
}
 html{
  box-sizing:border-box;
  font-size:62.5%;
   @media (max-width:1200px) {
        font-size: 56.25%;
    }

    @media (max-width:900px) {
        font-size: 50%;
    }
    
   @media (min-width: 112.5em) {
        font-size: 75%;
    }
 }
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  outline: none;
}
 body{
  margin:0;
  margin:0;
  font-size:1.5rem;
  line-height:1.5;
  font-family:'Segoe UI';
  color:'#201A43';
 }
 svg{
  path{
    stroke:'#201A43'
    transition: stroke 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
  }
 }
 a{
  text-decoration:none;
 }
 
.inline-block{
  display: inline-block !important; 
}
.flex{
  display: flex !important; 
  align-items: center !important
}
//padding

.p-0{
   padding: 0 !important;
}
.px-1{
  padding-left:1rem !important;
  padding-right:1rem !important;
}
.px-2{
   padding-left:2rem !important;
   padding-right:2rem !important;
}
.py-1{
  padding-top:1rem !important;
  padding-bottom:1rem !important;
}
.py-2{
   padding-top:2rem !important;
   padding-bottom:2rem !important;
}


// margin

.m-0 {
  margin: 0 !important;
}

.mr-0{
   margin-right: 0rem !important;
}
.mr-1 {
  margin-right: 1rem !important;
}
.mr-2 {
  margin-right: 2rem !important;
}
.ml-0{
   margin-left: 0rem !important;
}
.ml-1 {
  margin-left: 1rem !important;
}
.ml-2 {
  margin-left: 2rem !important;
}

.mx-1{
  margin-left:1rem !important;
  margin-right:1rem !important;
}
.mx-2{
  margin-left:2rem !important;
  margin-right:2rem !important;
}

.mt-0{
   margin-top: 0rem !important;
}
.mb-0{
   margin-bottom: 0rem !important;
}

.mt-2 {
  margin-top: 2rem !important;
}
.mt-5 {
  margin-top: 5rem !important;
}
.mt-10 {
  margin-top: 10rem !important;
}

.mb-2 {
  margin-bottom: 2rem !important;
}
.mb-5 {
  margin-bottom: 5rem !important;
}
.mb-10 {
  margin-bottom: 10rem !important;
}
.text-center{
  text-align:center !important;
}
.flex-center{
  display:flex;
  justify-content:center;
  padding:1rem 0;
  align-items:center;
}
.flex-between{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.flex-end{
  display:flex;
  justify-content:flex-end;
  align-items:center;
}
p{
    position: relative;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.5;
}

`;
export default GlobalStyle;
