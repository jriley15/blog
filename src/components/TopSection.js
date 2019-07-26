import React from "react"
import { Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import {
  Typography,
  Grid,
  Button,
  Fade,
  Zoom,
  Paper,
  Avatar,
  Slide,
} from "@material-ui/core"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
  },

  topSection: {
    width: "100%",
    height: "100vh", //"55vh",

    [theme.breakpoints.up("sm")]: {
      //height: "55vh", //"55vh",
    },

    //backgroundColor: theme.palette.primary.main,
    //https://digileaders.com/wp-content/uploads/2018/09/coding-on-laptop_4460x4460-e1537450504196.jpg
    //https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/JrbItQz/white-polygonal-geometric-surface-seamless-loop-4k-uhd-3840x2160_nyllfzz7e__F0000.png

    background:
      "linear-gradient(rgba(120, 80, 228, 0.5), rgba(	48, 48, 48, 0.7)), url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/JrbItQz/white-polygonal-geometric-surface-seamless-loop-4k-uhd-3840x2160_nyllfzz7e__F0000.png') no-repeat center",
    backgroundSize: "cover",
    position: "relative",
    backgroundAttachment: "fixed",
  },

  svg: {
    width: "100%",
    position: "absolute",
    bottom: -5,
  },

  buttonGroup: {
    marginTop: theme.spacing(3),
  },

  greeting: {
    padding: theme.spacing(1),
    maxWidth: "750px",
    height: "100%",
    //paddingTop: theme.spacing(8),
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
  container: {
    width: "100%",
    height: "100%",
  },

  test: {
    position: "absolute",
    zIndex: 5,
    top: "30vh",
  },
}))

const TopSection = () => {
  const classes = useStyles()

  return (
    <Grid item className={classes.topSection}>
      {/*<div className={classes.box}>
        <div className={clsx(classes.wave, classes.one)}></div>
        <div className={clsx(classes.wave, classes.two)}></div>
        <div className={clsx(classes.wave, classes.three)}></div>
        <div className={clsx(classes.wave, classes.four)}></div>
        <div className={clsx(classes.wave, classes.five)}></div>
        <div className={clsx(classes.wave, classes.six)}></div>
        <div className={clsx(classes.wave, classes.seven)}></div>
  </div>*/}
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",

            top: 0,
          }}
        >
          <div
            class="inner"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <svg
              style={{ position: "relative", margin: "auto", display: "block" }}
              viewBox="0 0 1920 1280"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMax slice"
            >
              <g transform="">
                <linearGradient
                  id="lg-0.6590519274487807"
                  x1="0"
                  x2="1"
                  y1="0"
                  y2="0"
                >
                  <stop stop-color="#ff00ff" offset="0"></stop>
                  <stop stop-color="#00ffff" offset="1"></stop>
                </linearGradient>
                <path
                  d="M 0 0 L 0 946.944 Q 192 919.136 384 879.409 T 768 934.969 T 1152 874.414 T 1536 747.774 T 1920 866.671 L 1920 0 Z"
                  fill="url(#lg-0.6590519274487807)"
                  opacity="0.4"
                >
                  <animate
                    attributeName="d"
                    dur="10s"
                    repeatCount="indefinite"
                    keyTimes="0;0.333;0.667;1"
                    calcmod="spline"
                    keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                    begin="0s"
                    values="M0 0L 0 918.182099153369Q 192 1088.3007740550825  384 1046.290873402258T 768 822.3741986244019T 1152 911.2483204223499T 1536 904.6649010266431T 1920 660.0510537949781L 1920 0 Z;M0 0L 0 948.0065042772274Q 192 912.8844571111398  384 873.2413233103099T 768 939.1307012337198T 1152 873.0531501907192T 1536 741.9758003069832T 1920 874.3066092777858L 1920 0 Z;M0 0L 0 1139.792561539163Q 192 1106.716191293859  384 1080.3607952684852T 768 889.7385188093365T 1152 916.4591691012669T 1536 826.6851324847336T 1920 836.7854053052695L 1920 0 Z;M0 0L 0 918.182099153369Q 192 1088.3007740550825  384 1046.290873402258T 768 822.3741986244019T 1152 911.2483204223499T 1536 904.6649010266431T 1920 660.0510537949781L 1920 0 Z"
                  ></animate>
                </path>
                <path
                  d="M 0 0 L 0 952.085 Q 192 962.704 384 940.729 T 768 1006.26 T 1152 953.735 T 1536 829.243 T 1920 815.149 L 1920 0 Z"
                  fill="url(#lg-0.6590519274487807)"
                  opacity="0.4"
                >
                  <animate
                    attributeName="d"
                    dur="10s"
                    repeatCount="indefinite"
                    keyTimes="0;0.333;0.667;1"
                    calcmod="spline"
                    keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                    begin="-2s"
                    values="M0 0L 0 952.0053921095661Q 192 985.1207788468778  384 960.357386788041T 768 1017.1349172887172T 1152 949.7678532083906T 1536 784.6107403968092T 1920 864.0683811156914L 1920 0 Z;M0 0L 0 952.2018580827913Q 192 1022.5251549963294  384 999.3265920892267T 768 992.9691986770977T 1152 970.4536071874398T 1536 796.4555125051236T 1920 753.5884508060659L 1920 0 Z;M0 0L 0 951.9944135892173Q 192 916.321693363391  384 895.2945440669661T 768 1016.5722369099674T 1152 940.7723565592879T 1536 854.6650807759802T 1920 862.8798340536085L 1920 0 Z;M0 0L 0 952.0053921095661Q 192 985.1207788468778  384 960.357386788041T 768 1017.1349172887172T 1152 949.7678532083906T 1536 784.6107403968092T 1920 864.0683811156914L 1920 0 Z"
                  ></animate>
                </path>
                <path
                  d="M 0 0 L 0 1148.87 Q 192 1033.63 384 990.773 T 768 993.906 T 1152 973.985 T 1536 799.171 T 1920 770.084 L 1920 0 Z"
                  fill="url(#lg-0.6590519274487807)"
                  opacity="0.4"
                >
                  <animate
                    attributeName="d"
                    dur="10s"
                    repeatCount="indefinite"
                    keyTimes="0;0.333;0.667;1"
                    calcmod="spline"
                    keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                    begin="-4s"
                    values="M0 0L 0 1141.8371347582881Q 192 932.0652954097119  384 883.9792554832666T 768 937.2262580803995T 1152 993.0391808206593T 1536 776.3745774610962T 1920 843.9133787788439L 1920 0 Z;M0 0L 0 1071.1075646249924Q 192 1048.3527319390203  384 1022.2778188558128T 768 869.6861326848244T 1152 995.9630996868143T 1536 802.3714785244531T 1920 752.5560001636322L 1920 0 Z;M0 0L 0 1150.2339255799666Q 192 1053.3395745655337  384 1011.5026207489476T 768 1004.90790288155T 1152 970.2860645849386T 1536 803.5957906818776T 1920 755.7532187485363L 1920 0 Z;M0 0L 0 1141.8371347582881Q 192 932.0652954097119  384 883.9792554832666T 768 937.2262580803995T 1152 993.0391808206593T 1536 776.3745774610962T 1920 843.9133787788439L 1920 0 Z"
                  ></animate>
                </path>
                <path
                  d="M 0 0 L 0 1000.05 Q 192 984.693 384 956.979 T 768 843.635 T 1152 918.487 T 1536 855.333 T 1920 742.843 L 1920 0 Z"
                  fill="url(#lg-0.6590519274487807)"
                  opacity="0.4"
                >
                  <animate
                    attributeName="d"
                    dur="10s"
                    repeatCount="indefinite"
                    keyTimes="0;0.333;0.667;1"
                    calcmod="spline"
                    keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                    begin="-6s"
                    values="M0 0L 0 1003.1249140913261Q 192 985.8840054220539  384 960.2611046535944T 768 831.9954493360539T 1152 901.3513959028082T 1536 863.4321242435417T 1920 703.7271889934955L 1920 0 Z;M0 0L 0 1041.82832170331Q 192 1017.5148178960585  384 972.1017466995143T 768 891.1338362927007T 1152 963.7530346638338T 1536 816.0254103905119T 1920 738.7246191730105L 1920 0 Z;M0 0L 0 990.1389781474186Q 192 980.8535463869775  384 946.4029704137112T 768 881.1417297565417T 1152 973.7011235543969T 1536 829.2369552572795T 1920 868.8841366874066L 1920 0 Z;M0 0L 0 1003.1249140913261Q 192 985.8840054220539  384 960.2611046535944T 768 831.9954493360539T 1152 901.3513959028082T 1536 863.4321242435417T 1920 703.7271889934955L 1920 0 Z"
                  ></animate>
                </path>
                <path
                  d="M 0 0 L 0 1067.18 Q 192 1064.19 384 1033.13 T 768 911.63 T 1152 804.958 T 1536 789.009 T 1920 794.751 L 1920 0 Z"
                  fill="url(#lg-0.6590519274487807)"
                  opacity="0.4"
                >
                  <animate
                    attributeName="d"
                    dur="10s"
                    repeatCount="indefinite"
                    keyTimes="0;0.333;0.667;1"
                    calcmod="spline"
                    keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                    begin="-8s"
                    values="M0 0L 0 1100.8980956387043Q 192 1106.9179686038976  384 1067.284498592433T 768 859.5274727773609T 1152 784.6653667286113T 1536 830.7374199573014T 1920 773.9591962913105L 1920 0 Z;M0 0L 0 1008.2003910119191Q 192 989.4572349728917  384 973.3781027397168T 768 1002.7620965037983T 1152 840.4510811277893T 1536 716.0236663773613T 1920 831.116976311079L 1920 0 Z;M0 0L 0 1072.982897651226Q 192 1014.595993477129  384 978.3466315305196T 768 864.2585830421245T 1152 895.476220136765T 1536 895.1050586572601T 1920 908.2256125477921L 1920 0 Z;M0 0L 0 1100.8980956387043Q 192 1106.9179686038976  384 1067.284498592433T 768 859.5274727773609T 1152 784.6653667286113T 1536 830.7374199573014T 1920 773.9591962913105L 1920 0 Z"
                  ></animate>
                </path>
              </g>
            </svg>
          </div>
        </div>

        <Grid item className={classes.test}>
          <Fade in={true} timeout={500}>
            <div className={classes.greeting}>
              <Grid container justify="center" alignItems="center">
                <Grid item>
                  <Avatar
                    alt="Me"
                    src="https://www.jordanriley.me/static/media/me.c702f970.jpg"
                    className={classes.bigAvatar}
                  />
                </Grid>
                <Grid>
                  <Typography variant="h2" align="center">
                    Hello, I'm Jordan Riley
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body1" align="center" color="textSecondary">
                A software developer / student based in Phoenix, Arizona.
              </Typography>
              <Grid
                container
                justify="center"
                spacing={1}
                className={classes.buttonGroup}
              >
                <Grid item>
                  <Button variant="outlined">About Me</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">Projects</Button>
                </Grid>
              </Grid>
            </div>
          </Fade>
        </Grid>
      </Grid>
      <svg viewBox="0 0 100 15" className={classes.svg}>
        <path fill="#303030" opacity="0.5" d="M0 30 V15 Q30 3 60 15 V30z" />
        <path fill="#303030" d="M0 30 V12 Q30 17 55 12 T100 11 V30z" />
      </svg>
    </Grid>
  )
}

export default TopSection
