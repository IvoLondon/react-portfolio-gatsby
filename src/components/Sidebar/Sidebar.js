import React from 'react'
import { Link } from 'gatsby'
import classes from './Sidebar.module.scss'
import Logo from './../../assets/svg/Logo.svg'
import Filter from './UI/Filter/Filter'

const Sidebar = ({ siteTitle }) => {
    const isActive = ({isCurrent}) => {
        console.log(isCurrent);
          return isCurrent ? { className: classes.active } : null
    }
    return (
        <div className={classes.Sidebar}>
            <Filter />
            <img className={classes.Logo} src={Logo} alt="Portfolio Logo" />
            <h2>Hi! I am Ivo, <span>a front-end developer and this is a prototype of my portfolio.
            If you'd like to see more, please visit <a target="_blank" href="http://ivelin.me">my website</a> or my <a target="_blank" href="https://github.com/Iwi4a">Github</a></span></h2>
            <ul className={classes.Navigation}>
                <li>
                    <Link to="/" getProps={isActive}>Home</Link>   
                </li>
                <li>
                    <Link to="/projects" getProps={isActive}>Projects</Link>   
                </li>
                 <li>
                    <Link to="/blog" getProps={isActive}>Blog</Link>   
                </li>
                <li>
                    <Link to="/contact" getProps={isActive}>Contact</Link>   
                </li>
            </ul>

            <ul className={classes.Social}>
                <li>
                    <a className={[classes.social_link, classes.website].join(' ')} target="_blank" href="http://ivelin.me">
                        <i></i>
                    </a>
                </li>
                <li>
                    <a className={[classes.social_link, classes.github].join(' ')} target="_blank" href="https://github.com/Iwi4a">
                        <i></i>
                    </a>
                </li>
                <li>
                    <a className={[classes.social_link, classes.email].join(' ')} target="_blank" href="mailto:ivelin.iliev@hotmail.com">
                        <i></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
