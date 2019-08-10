import React from "react"
import Link from "next/link"
import { makeStyles, fade } from "@material-ui/core/styles"
import {
  Typography,
  Grid,
  Button,
  Zoom,
  Paper,
  Avatar,
  Slide,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Divider,
} from "@material-ui/core"
import Fade from "react-reveal/Fade"
import { projects } from "../data/projects"

const useStyles = makeStyles(theme => ({
  root: {
    background:
      "linear-gradient(rgba(13, 186, 134, 0.8), rgba(120, 80, 228, 0.8)), url('/static/images/bg.png') no-repeat center",
    backgroundSize: "cover",
    position: "relative",
    backgroundAttachment: "fixed",

    width: "100%",
    height: "100%",
    paddingBottom: theme.spacing(10),
  },

  svg: {
    width: "100%",
    //position: "absolute",
    //top: -5,
  },

  buttonGroup: {
    marginTop: theme.spacing(3),
  },

  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
  projectContainer: {
    //width: "100%",
    height: "100%",
    paddingBottom: theme.spacing(8),
    paddingTop: theme.spacing(8),
  },
  projects: {
    width: "calc(100% - 16px)",
    maxWidth: "1200px",
    paddingTop: theme.spacing(6),
  },
  card: {
    //background: "rgba(255, 255, 255, 0.6)",
    //color: "#000000",
    width: "384px",
  },
  cardContainer: {
    //padding: theme.spacing(1),
  },
  cardImage: {},

  titleFont: {
    fontWeight: 100,
  },

  projectGridItem: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),

    width: "700px",
    maxWidth: "100%",
  },

  projectDiv: {
    borderLeft: "1px solid transparent",
    padding: theme.spacing(2),
    transition: theme.transitions.create("background-color"),
    backgroundColor: fade(theme.palette.common.black, 0.25),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.5),
      transform: "scale(1.1)",
    },

    transition:
      "background-color 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
    transform: "scale(1, 1)",

    cursor: "pointer",
    borderRadius: "4px",
  },

  previewImageAvatar: {
    //margin: 10,
    maxWidth: 220,
    height: 150,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: "3px",
  },

  divider: {
    marginTop: theme.spacing(4),
  },
}))

const ProjectSection = ({ children }) => {
  const classes = useStyles()

  return (
    <Grid item className={classes.root}>
      <svg
        className={classes.svg}
        viewBox="0 0 1920 250"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="">
          <linearGradient
            id="lg-0.6590519274487807"
            x1="0"
            x2="0"
            y1="0"
            y2="100%"
          >
            <stop stopColor="#303030" stopOpacity="1" offset="0%" />
            <stop stopColor="#303030" stopOpacity="0.8" offset="25%" />
            <stop stopColor="#303030" stopOpacity="0.5" offset="50%" />
            <stop stopColor="#303030" stopOpacity="0.5" offset="75%" />
            <stop stopColor="#303030" stopOpacity="0.3" offset="100%" />
          </linearGradient>
          <path
            d="M 0 0 L 0 36.2045 Q 192 158.048 384 116.843 T 768 62.023 T 1152 125.819 T 1536 127.126 T 1920 78.8686 L 1920 0 Z"
            fill="url(#lg-0.6590519274487807)"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcmod="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="0s"
              values="M0 0L 0 28.756585450758706Q 192 200.92325715996435  384 158.91335650714007T 768 30.576440241964782T 1152 131.92304995670708T 1536 163.1748075122733T 1920 19.639875195966717L 1920 0 Z;M0 0L 0 50.65676475300098Q 192 74.85136262268789  384 35.208228821857944T 768 123.04289490542332T 1152 113.97372018048587T 1536 57.174934644869374T 1920 193.79780780222683L 1920 0 Z;M0 0L 0 191.48602938589528Q 192 212.67555460076449  384 186.3201585753905T 768 84.8205743530533T 1152 142.91676567612845T 1536 115.47044507117765T 1920 161.36222711323393L 1920 0 Z;M0 0L 0 28.756585450758706Q 192 200.92325715996435  384 158.91335650714007T 768 30.576440241964782T 1152 131.92304995670708T 1536 163.1748075122733T 1920 19.639875195966717L 1920 0 Z"
            />
          </path>
          <path
            d="M 0 0 L 0 53.7289 Q 192 145.332 384 122.041 T 768 155.519 T 1152 172.429 T 1536 80.4428 T 1920 89.6896 L 1920 0 Z"
            fill="url(#lg-0.6590519274487807)"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcmod="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="-2s"
              values="M0 0L 0 53.5931639929548Q 192 118.50267609125495  384 93.73928403241821T 768 169.4444676276869T 1152 153.989781665215T 1536 66.72747398168886T 1920 159.08675271517012L 1920 0 Z;M0 0L 0 53.73742973849285Q 192 147.0237015394786  384 123.82513863237587T 768 154.64070864980044T 1152 173.59124955333502T 1536 81.30758587527194T 1920 85.31396126069674L 1920 0 Z;M0 0L 0 53.58510242179811Q 192 65.2834859636189  384 44.256336667194006T 768 165.61720282269977T 1152 142.26322315082842T 1536 111.34048201745577T 1920 149.6787819679621L 1920 0 Z;M0 0L 0 53.5931639929548Q 192 118.50267609125495  384 93.73928403241821T 768 169.4444676276869T 1152 153.989781665215T 1536 66.72747398168886T 1920 159.08675271517012L 1920 0 Z"
            />
          </path>
          <path
            d="M 0 0 L 0 172.407 Q 192 169.925 384 135.344 T 768 115.569 T 1152 178.953 T 1536 81.8777 T 1920 80.4988 L 1920 0 Z"
            fill="url(#lg-0.6590519274487807)"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcmod="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="-4s"
              values="M0 0L 0 192.98736763252418Q 192 87.4460332887717  384 39.359993362326335T 768 114.17817119981348T 1152 190.88051440376304T 1536 67.50152647517918T 1920 152.81422895559504L 1920 0 Z;M0 0L 0 141.05036297285488Q 192 164.7355695272181  384 138.66065644401078T 768 60.078144388582935T 1152 186.2699934947617T 1536 77.58106610724559T 1920 74.46753221583191L 1920 0 Z;M0 0L 0 199.15316452920987Q 192 174.35097247675387  384 132.5140186601677T 768 162.90329414175642T 1152 172.71214362067172T 1536 85.54261556158406T 1920 85.64342774858528L 1920 0 Z;M0 0L 0 192.98736763252418Q 192 87.4460332887717  384 39.359993362326335T 768 114.17817119981348T 1152 190.88051440376304T 1536 67.50152647517918T 1920 152.81422895559504L 1920 0 Z"
            />
          </path>
          <path
            d="M 0 0 L 0 82.9192 Q 192 119.971 384 86.7467 T 768 68.2538 T 1152 169.708 T 1536 110.348 T 1920 154.984 L 1920 0 Z"
            fill="url(#lg-0.6590519274487807)"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcmod="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="-6s"
              values="M0 0L 0 91.13043230044175Q 192 125.75651334077597  384 100.13361257231654T 768 46.42587774821503T 1152 137.83247118275875T 1536 150.4664452111357T 1920 73.67272209000467L 1920 0 Z;M0 0L 0 119.55049844392911Q 192 153.47054441747645  384 108.05747322093214T 768 88.30989070164276T 1152 181.34193301581834T 1536 112.57242708276249T 1920 95.51762476931808L 1920 0 Z;M0 0L 0 81.59480788822167Q 192 119.03816581255788  384 84.58758983929155T 768 71.7743076429413T 1152 174.84934502262087T 1536 103.87703804861293T 1920 168.0984274403704L 1920 0 Z;M0 0L 0 91.13043230044175Q 192 125.75651334077597  384 100.13361257231654T 768 46.42587774821503T 1152 137.83247118275875T 1536 150.4664452111357T 1920 73.67272209000467L 1920 0 Z"
            />
          </path>
          <path
            d="M 0 0 L 0 157.586 Q 192 195.632 384 156.88 T 768 57.8927 T 1152 58.8645 T 1536 119.462 T 1920 126.791 L 1920 0 Z"
            fill="url(#lg-0.6590519274487807)"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcmod="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="-8s"
              values="M0 0L 0 162.92566838129002Q 192 214.32974352002782  384 174.6962735085632T 768 58.592666274995985T 1152 40.074327185179435T 1536 110.35842224092023T 1920 105.11914990929559L 1920 0 Z;M0 0L 0 94.85737518978915Q 192 124.48503130761982  384 108.40589907444496T 768 169.1013512242387T 1152 89.03439573913194T 1536 36.78551886680096T 1920 160.417662769284L 1920 0 Z;M0 0L 0 142.4274274727291Q 192 142.55767059589903  384 106.3083086492897T 768 55.90566866821289T 1152 112.20157153109962T 1536 145.30169396372412T 1920 188.30883665279853L 1920 0 Z;M0 0L 0 162.92566838129002Q 192 214.32974352002782  384 174.6962735085632T 768 58.592666274995985T 1152 40.074327185179435T 1536 110.35842224092023T 1920 105.11914990929559L 1920 0 Z"
            />
          </path>
        </g>
      </svg>

      <Grid container justify="center" className={classes.projectContainer}>
        {children}
        <Grid item xs={12}>
          <Fade up>
            <Typography
              variant="h3"
              align="center"
              className={classes.titleFont}
              gutterBottom
            >
              Projects
            </Typography>
          </Fade>
        </Grid>

        <Grid container direction="column" alignItems="center">
          {projects.map((project, index) => (
            <Grid
              item
              key={project.projectId}
              className={classes.projectGridItem}
            >
              <Fade>
                <Link
                  href={{
                    pathname: `/project`,
                    query: { id: project.projectId },
                  }}
                  as={`/project/${project.projectId}`}
                >
                  <Grid
                    container
                    className={classes.projectDiv}
                    justify="space-between"
                    alignItems="center"
                  >
                    {index % 2 !== 0 && (
                      <Grid item>
                        <div className={classes.previewImageAvatar}>
                          <img
                            src={project.images[0].link}
                            style={{ height: "100%" }}
                          />
                        </div>
                      </Grid>
                    )}
                    <Grid item xs>
                      <Grid
                        container
                        direction="column"
                        alignItems={index % 2 !== 0 ? "flex-end" : "flex-start"}
                      >
                        <Grid item>
                          <Typography
                            gutterBottom
                            variant="h4"
                            component="h2"
                            className={classes.titleFont}
                          >
                            {project.title}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="body1"
                            component="p"
                            color="textSecondary"
                            align={index % 2 !== 0 ? "right" : "left"}
                          >
                            {project.description}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button variant="outlined" style={{ marginTop: 8 }}>
                            View More
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    {index % 2 === 0 && (
                      <Grid item>
                        <div className={classes.previewImageAvatar}>
                          <img
                            src={project.images[0].link}
                            style={{ height: "100%" }}
                          />
                        </div>
                      </Grid>
                    )}
                  </Grid>
                </Link>
              </Fade>
            </Grid>
          ))}

          {/*
          <Grid container justify="center">
            <Grid item className={classes.projects}>
              <Grid container justify="center" spacing={2}>
                {projects.map((project, index) => (
                  <Grid
                    item
                    className={classes.cardContainer}
                    key={project.projectId}
                  >
                    <Fade>
                      <Link
                        href={{
                          pathname: `/project`,
                          query: { id: project.projectId },
                        }}
                        as={`/project/${project.projectId}`}
                      >
                        <Card className={classes.card} raised>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              alt="Contemplative Reptile"
                              height="200"
                              image={project.images[0].link}
                              title="Contemplative Reptile"
                              className={classes.cardImage}
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {project.title.length > 30
                                  ? project.title.substring(0, 25) + ".."
                                  : project.title}
                              </Typography>
                              <Typography variant="body2" component="p">
                                {project.description}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Button size="small">View More</Button>
                          </CardActions>
                        </Card>
                      </Link>
                    </Fade>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          */}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProjectSection
