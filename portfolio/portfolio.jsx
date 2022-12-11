import React from "react";
import { projects } from "./data.jsx";
import styled, { ThemeProvider } from "styled-components";
import { Github } from '../components/AllSvgs';

import { NavLink } from 'react-router-dom';

const Box =  styled.section`
background-color: ${props => props.theme.body};

`
const Footer = styled.footer`
display: flex;
justify-content: space-between;
`

const Link = styled(NavLink)`
background-color: ${props =>props.theme.body};
color: ${props =>props.theme.text};
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
font-size:calc(1em + 0.5vw);

`

const Git = styled(NavLink)`
color: inherit;
text-decoration: none;
${Box}:hover &{
    &>*{
        fill:${props =>props.theme.text};
    }
}

` 

const Main = styled.div`
margin-left: calc(2rem + 3vw);

` 

export default function Projects() {
  return (
   <ThemeProvider > 
    <Box className="text-gray-400  body-font"> 
      <Main> 
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          
          <h1 className="sm:text-4xl text-3xl font-medium title-font  text-white">
            Projects
          </h1>
          
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="mywork"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p> 
                  <Footer>
                    <Link to={{pathname: `${project.demo}`}} target="_blank">
                        Visit
                    </Link>
                    <Git to={{pathname: `${project.github}`}} target="_blank">
                        <Github width={30} height={30} />
                    </Git>
                  </Footer>
                </div>
              </div> 
            </a>
          ))}
        </div>         
      </div>
      </Main>
    </Box>
   </ThemeProvider> 
  );
}
