import classes from './MenuBar.module.css'

function MenuBar () {
   return (
    <>
      <header className={classes.header}>
    <div className={classes.web}>
      SonifiQ
    </div>
  </header>
    <div className={classes.option4}>Sign in</div>
   
      
        <button className={classes.overlap5}>
          <div className={classes.option5}>Register</div>
        </button>
  

    </>
   )

}

export default MenuBar;