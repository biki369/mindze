import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
      height: "100%",
      padding:'30px'
  },

}));

const Blogs = () => {
  const classes = useStyles()
  return (
    <div className={classes.root} >
      
    </div>
  )
}

export default Blogs;

// 
