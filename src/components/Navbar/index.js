import React from 'react';
import { Menu, Dropdown, Grid } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return(
    <Grid>
      <Grid.Column floated='left' width={5}>

      </Grid.Column>
      <Grid.Column width={5}>
        <Menu floated='right' secondary borderless>
          <Menu.Item
            name= 'About' 
            as= {Link}
            to= '/'
          />

          <Menu.Item 
            name= 'Projects'
            as= {Link}
            to= '/projects'
          />

          <Menu.Item 
            name= 'Experience'
            as= {Link}
            to= '/experience'
          />

          <Menu.Item 
            name= 'Resume'
            as= {Link}
            to= '/resume'
          />

          <Dropdown text= 'Contacts' item basic>
            <Dropdown.Menu>
              <Dropdown.Item
                text= 'Github' 
                target= '_blank'
                href= 'https://github.com/JoseLopez235'
              />

              <Dropdown.Item
                text= 'Linkdin' 
                target= '_blank'
                href= 'https://www.linkedin.com/in/jose-lopez-0551a01a1/'
              />

              <Dropdown.Item
                text= 'Gmail' 
                target= '_blank'
                href= 'mailto:joselopez11394@gmail.com'
              />
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </Grid.Column>
    </Grid>
  )
} 

export default NavBar