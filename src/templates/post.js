import React, { useRef, useEffect } from "react"
import NavBar from "../components/Navbar"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Grid, Paper, Divider } from "@material-ui/core"
import BlockContent from "@sanity/block-content-to-react"
import SEO from "../components/seo"
import serializers from "../components/common/serializers"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",

    marginTop: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(8),
      padding: theme.spacing(1),
    },
    //backgroundColor: theme.palette.common.white,
    //backgroundColor: theme.palette.grey[200], //"#fafafa",
    //backgroundImage: "url('/static/images/interlaced.png')",
    minHeight: "calc(100vh - 168px)",
    //color: theme.palette.common.black,
  },

  postsGridContainer: {},

  postGridItem: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),

    width: "700px",
    maxWidth: "100%",
  },

  postPaper: {
    padding: theme.spacing(2),

    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(4),
      padding: theme.spacing(3),
    },
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginBottom: theme.spacing(4),
    borderLeft: "1px solid transparent",

    //"#fafafa",
    //color: theme.palette.common.black,
  },

  titleFont: {
    fontWeight: 100,
  },

  previewImageAvatar: {
    //margin: 10,
    width: 100,
    height: 100,
    float: "left",
    marginRight: theme.spacing(2),
  },

  readMoreButton: {
    //bottom: 0,
    margin: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(1),
    //backgroundColor: "rgba(0, 0, 0, 0.12)",
  },

  textSecondary: {
    //color: "rgba(0, 0, 0, 0.54)",
  },
}))

export const query = graphql`
  query PostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      _rawBody
      title
      description
      previewImage
      publishedAt
    }
  }
`

const Post = props => {
  const classes = useStyles()

  const { data, errors } = props
  const post = data && data.post

  //corrupt data fix
  if (post) {
    return (
      <>
        <SEO title={post.title} description={post.description} />
        <NavBar />
        <div className={classes.root}>
          <Grid
            container
            justify="center"
            className={classes.postsGridContainer}
            direction="column"
            alignItems="center"
          >
            <Grid item className={classes.postGridItem}>
              <Paper elevation={4} className={classes.postPaper}>
                <Grid container justify="space-between">
                  <Typography
                    variant="h3"
                    className={classes.titleFont}
                    gutterBottom
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.textSecondary}
                    color="textSecondary"
                  >
                    {new Date(post._createdAt).toDateString()}
                  </Typography>
                </Grid>
                <Typography
                  className={classes.textSecondary}
                  variant="subtitle1"
                  color="textSecondary"
                >
                  {post.description}
                </Typography>
                <Divider className={classes.divider} />

                <div className={classes.body}>
                  <BlockContent
                    blocks={post._rawBody}
                    serializers={serializers}
                  />
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </>
    )
  }
  return null
}

export default Post
