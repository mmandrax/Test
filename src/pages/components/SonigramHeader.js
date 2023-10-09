import classes from './SonigramHeader.module.css'

function SonigramHeader ({categoryName}) {
     return (
        <>
        <div className={classes.headertext}>Sounds for Mobile Apps</div>
        <div className={classes.group13}>
            <div className={classes.webapp}>{categoryName}</div>
       </div>
        </>
     )
}

export default SonigramHeader;