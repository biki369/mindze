import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        padding: '30px 10px',
        "& .blog-container": {
            position: 'relative',
            padding:'3rem 10px',
            "& .blog-title": {
                fontSize: "24px",
                textAlign: "center",
                marginTop: 24,
                marginBottom:30,
                paddingBottom:20,
                color: "#333",
                fontWeight:500,
            },
            "& .blog-content": {
                // padding: " 1rem 0",
                // fontSize: " 3.5rem",
                margin:'20px 10px',
                padding:'10px 3.5rem',
                "& .b-sub-title":{
                    fontSize:20,
                    color:"#555",
                    lineHeight:1.6,
                },
                "& p":{
                    margin:"1.6rem 0",
                    fontSize:16,
                    color:"#555",
                    lineHeight:1.6,

                }
            },
        },
    }

    }));

const BlogDetails = () => {

    const classes = useStyles()



    return (
        <div className={classes.root}>
            <div className="blog-container">
                <h1 className="blog-title">Supporting Your Child's Mental Health</h1>

                <div className="blog-content">
                    <h2 className="b-sub-title">Open Communication:</h2>
                    <p className="desc">Encourage open and honest communication to create a safe space for the child to express their thoughts and feelings. Regularly check in with your child about their day, and actively listen without judgment to any concerns they may have.</p>
                </div>
                <div className="blog-content">
                    <h2 className="b-sub-title">Open Communication:</h2>
                    <p className="desc">Encourage open and honest communication to create a safe space for the child to express their thoughts and feelings. Regularly check in with your child about their day, and actively listen without judgment to any concerns they may have.</p>
                </div>
                <div className="blog-content">
                    <h2 className="b-sub-title">Open Communication:</h2>
                    <p className="desc">Encourage open and honest communication to create a safe space for the child to express their thoughts and feelings. Regularly check in with your child about their day, and actively listen without judgment to any concerns they may have.</p>
                </div>
                <div className="blog-content">
                    <h2 className="b-sub-title">Open Communication:</h2>
                    <p className="desc">Encourage open and honest communication to create a safe space for the child to express their thoughts and feelings. Regularly check in with your child about their day, and actively listen without judgment to any concerns they may have.</p>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
