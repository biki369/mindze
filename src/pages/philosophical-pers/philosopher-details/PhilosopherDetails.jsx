import { Container, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        "& .title": {
            textAlign: 'center',
            fontSize: '2.5em',
            marginTop:20,
            marginBottom:40,
            color: theme.palette.primary.main
        },
        "& .sub-title": {
            textAlign: 'center',
            fontSize: '1.2em',
            color:"#454748",
            fontWeight:700,
            margin:"30px 0"

            // color: theme.palette.primary.main
        },
        "& .philosophers-content":{
            padding: '30px',
            marginTop:23,
          
            "& .desc-section": {
                padding: '20px 0',
                "& .into-red":{
                    color:"#900",
                    marginBottom:10
                },
                "& p":{
                    marginBottom:20,
                    fontFamily:'Arial, sans-serif',
                    color:"#333",
                    lineHeight:1.6,
                }
        },

    }
}
      
}));



const PhilosopherDetails = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container>
                 <h1 className="title">JIDDU KRISHNAMURTI</h1>
                  <h2 className="sub-title">Jiddu Krishnamurti on Mental Health: An Exploration of Inner Freedom</h2>
            <div className='philosophers-content'>

                  <div className="desc-section">
                     <p className="into-red">Introduction: Krishnamurti's Revolutionary Perspective on the Mind</p>
                      <p className="desc">Jiddu Krishnamurti, an influential philosopher and speaker, offered a radical approach to understanding the human mind and its impact on well-being. His teachings, free from traditional dogmas, focus on the importance of personal inquiry and self-awareness for mental health. Krishnamurti's insights delve into the nature of thought, emotion, and the structures that govern our psychological experiences, providing a unique lens to view and address mental health issues.</p>    
                  </div>

                  <div className="desc-section">
                     <p className="into">The Mirror of Relationship: Understanding the Self</p>
                      <p className="desc">Krishnamurti emphasized the role of relationships in understanding the self. He believed that interactions with others act as a mirror, reflecting aspects of our inner world. “The understanding of oneself is the beginning of wisdom,” he stated. This perspective encourages deep introspection in the context of relationships, allowing individuals to recognize and work through personal fears, desires, and conflicts. For instance, conflicts in relationships can reveal underlying insecurities or conditioned responses, offering opportunities for self-discovery and growth. By understanding and resolving these inner conflicts, one can achieve greater mental clarity and emotional stability.</p>    
                  </div>
                  <div className="desc-section">
                     <p className="into">Freedom from the Known: Breaking Psychological Boundaries</p>
                      <p className="desc">Krishnamurti emphasized the role of relationships in understanding the self. He believed that interactions with others act as a mirror, reflecting aspects of our inner world. “The understanding of oneself is the beginning of wisdom,” he stated. This perspective encourages deep introspection in the context of relationships, allowing individuals to recognize and work through personal fears, desires, and conflicts. For instance, conflicts in relationships can reveal underlying insecurities or conditioned responses, offering opportunities for self-discovery and growth. By understanding and resolving these inner conflicts, one can achieve greater mental clarity and emotional stability.</p>    
                  </div>
                  <div className="desc-section">
                     <p className="into-red">Conclusion: Embracing Krishnamurti’s Vision for Mental Wellness</p>
                      <p className="desc">Jiddu Krishnamurti’s approach to mental health, characterized by deep introspection and a quest for inner freedom, offers a profound way to understand and navigate the complexities of the human psyche. His teachings encourage a journey towards self-awareness and mental liberation, fostering a state of mental well-being that transcends conventional approaches.</p>
                      <p>Exploring Krishnamurti’s teachings reveals a path to mental wellness that is both introspective and liberating. His emphasis on understanding the self, observing the mind, and embracing total awareness provides a comprehensive approach to achieving mental and emotional harmony in our contemporary world.</p>    
                  </div>


            </div>
        </Container>
    </div>
  )
}

export default PhilosopherDetails
