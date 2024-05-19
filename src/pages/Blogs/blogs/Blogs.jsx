import { Paper, makeStyles } from "@material-ui/core";
import { blogPostData } from "../../../data";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    padding: '30px 10px',
    "& .blogs-container": {
      display: "flex",
      gap: '10px',
      flexWrap: 'wrap',
      alignItem: 'center',
      "& .blog": {
        padding: 10,
        cursor: "pointer",
        width: 400,
        height:620,
        transition: "all 0.3s",
        "&:hover": {
          transform: 'scale(0.990)'
        },
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          height:"100%"
        },
        "& .blog-img": {
          width: "100%",
          height: 460,
          [theme.breakpoints.down("sm")]: {
            height: "100%",
          },
          "& img": {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          },
        },

        "& .b-title": {
          margin: '10px 0',
          "& p": {
            fontSize: "22px",
            textTransform: "capitalize",
          }
        },

      }

    }
  },

}));

const Blogs = ({id}) => {
  const classes = useStyles();

  if (!id) {
    id = 0;
  }

  const data = blogPostData.find((item) => item.id === id);
  return (
    <div className={classes.root} >
      <div className="blogs-container">
        {
          data?.blogs.map((e, i) => (
            <div key={i}>
                  <Link to={"/blog/:369"} state={e} >
                    <Paper>
                      <div className="blog">
                        <div className="blog-img">
                          <img src={e.img} alt="" />
                        </div>
                        <div className="b-title">
                          <p>{e.title}</p>
                        </div>
                      </div>
                    </Paper>
                  </Link>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Blogs;

// 
