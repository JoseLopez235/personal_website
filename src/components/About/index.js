import React, {useState} from 'react';
import { Grid, Header, Image, List, Container } from 'semantic-ui-react'
import portrait from '../../images/portrait.png';


const About = () => {
  const [skills] = useState([
    "Ruby on Rails",
    "PostgreSql",
    "Git Workflow",
    "Object Oriented Programming(OOP)",
    "Test Driving Development(TDD)",
    "Python",
    "RSpec",
    "Active Record",
    "Restful API's",
    "HTML",
    "CSS",
    "Travis CI",
    "Javascript",
    "React"
  ])

  const [half] = useState(Math.ceil(skills.length / 2))
  const [firstHalf] = useState(skills.splice(0,half)) 
  const [secondHalf] = useState(skills.splice(-half)) 

  return(
    <Container>
    <Grid column='three' centered style={{paddingTop: '6%'}}>
      <Grid.Column width={11} verticalAlign='middle'>
        <Header as='h1' dividing>Bio:</Header>
        <p> 
          Welcome, My name is Jose Lopez and I am currently located in Miami, FL. Ever since I was young, my dream was to create a video game of my own. I knew to create games you had to learn to code, I always thought that only geniuses learn to code, so I immediately threw out that idea. I decided to just go where ever life took me and after a few years, I hit a wall. 
        </p>
        <p> 
          I was stuck in a dead-end job and had to drop out of college because I was not able to afford it anymore. Thankfully I had a cousin who saw me at my worst and gave me an offer. The offer was that we would teach me the basics of coding and after introduce me to a school that would launch me into the world of programming. I accepted his offer and for about 8 months, I was learning how to program in the Ruby language. It was hard at the beginning but I soon started to grasp the concepts I began to have fun, and in the process, I fell in love with programming because it reinvigorated my old dream of creating a game. 
        </p>
        <p>
          I soon enrolled in the school of Turing School of Software & Design, it was a rigorous journey but in March of 2021, I graduated and was extremely overjoyed. But now this chapter has finished and a new one has begun, which is very daunting but very exciting. In search of my job, I am hoping to meet a lot of great people that hopefully I can call my friends and work together in an amazing environment. I am a quick learner and as well as an excellent team player. My only regret is that I wished I found this path I walk on sooner.
        </p>

        <Header as='h1' dividing>Skills:</Header>
        <Grid centered>
          <Grid.Column width={7}>
            <List>
            {
              firstHalf.map((skill) => {
                return (
                  <List.Item>
                    <List.Icon name="triangle right" />
                    <List.Content>{skill}</List.Content>
                  </List.Item>
                )
              })
            }
            </List>
          </Grid.Column>

          <Grid.Column width={3}>
            <List>
              {
                secondHalf.map((skill) => {
                  return (
                    <List.Item>
                     <List.Icon name="triangle right" />
                     <List.Content>{skill}</List.Content>
                    </List.Item>
                  )
                })
              }
            </List>
          </Grid.Column>
        </Grid>
      </Grid.Column>

      <Grid.Column width="5">
        <Image src={portrait} fluid verticalAlign="bottom" style={{paddingTop: "12%"}}/>
      </Grid.Column>
    </Grid>
    </Container>
  )
}

export default About

