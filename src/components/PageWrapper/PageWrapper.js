import React from 'react'
import classes from './PageWrapper.module.scss'

const PageWrapper = ({children}) => {
	return (
		<div className={classes.PageWrapper}>
	        <div className={classes.PageWrapperContainer}>
	            {children}
	        </div>
	    </div>
	)
}

export default PageWrapper;