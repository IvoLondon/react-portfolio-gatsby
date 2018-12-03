import React from 'react'
import { Link } from 'gatsby'
import classes from './Sidebar.module.scss'

const Sidebar = ({ siteTitle }) => {
    const isPartiallyActive = ({
          isPartiallyCurrent
    }) => {
          return isPartiallyCurrent
            ? { className: "Active" }
            : null
    }
    return (
        <div className={classes.Sidebar}>
            <ul className={classes.Navigation}>
                <li>
                    <Link to="/" getProps={isPartiallyActive}>Home</Link>   
                </li>
                <li>
                    <Link to="/projects" getProps={isPartiallyActive}>Projects</Link>   
                </li>
                <li>
                    <Link to="/contact" getProps={isPartiallyActive}>Contact</Link>   
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
