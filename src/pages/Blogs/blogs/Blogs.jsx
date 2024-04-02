import { Paper, makeStyles } from "@material-ui/core";
import { blogPostData } from "../../../data";
import React from "react";
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
        transition: "all 0.3s",
        "&:hover": {
          transform: 'scale(0.990)'
        },
        width: 400,
        "& .blog-img": {
          width: "100%",
          height: 460,
          "& img": {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          },
        },

        "& .b-title": {
          margin: '10px 0',
          "& p": {
            fontSize: "22px"
          }
        },

      }

    }
  },

}));

const Blogs = () => {
  const classes = useStyles()

  return (
    <div className={classes.root} >
      <div className="blogs-container">
        {
          blogPostData.map((e, i) => (
            <React.Fragment key={i}>
              {
                e.blogs.map((e, i) => (
                  <Link to={"/blog/:369"} state={e} key={i}>
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
                ))
              }
            </React.Fragment>
          ))
        }

      </div>
    </div>
  )
}

export default Blogs;

// 
