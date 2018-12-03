import React from 'react'
import { Link } from 'gatsby'
import classes from './Sidebar.module.scss'

const Sidebar = ({ siteTitle }) => (
  <div className={classes.Sidebar}>
 
     dasdasdasd
     
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>

  </div>
)

export default Sidebar;
