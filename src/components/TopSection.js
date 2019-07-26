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

            margin: "0 auto",
          }}
        >
          <div
            class="inner"
            style={{
              width: "100%",
            }}
          >
            <svg
              style={{ position: "relative", margin: "auto", display: "block" }}
              viewBox="0 0 1131 1280"
              preserveAspectRatio="xMidYMid"
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
                  d="M 0 0 L 0 925.209 Q 113.1 1046.97 226.2 1005.52 T 452.4 849.883 T 678.6 902.249 T 904.8 866.335 T 1131 710.53 L 1131 0 Z"
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
                    values="M0 0L 0 918.182099153369Q 113.1 1088.3007740550825  226.2 1046.290873402258T 452.4 822.3741986244019T 678.6 911.2483204223499T 904.8 904.6649010266431T 1131 660.0510537949781L 1131 0 Z;M0 0L 0 948.0065042772274Q 113.1 912.8844571111398  226.2 873.2413233103099T 452.4 939.1307012337198T 678.6 873.0531501907192T 904.8 741.9758003069832T 1131 874.3066092777858L 1131 0 Z;M0 0L 0 1139.792561539163Q 113.1 1106.716191293859  226.2 1080.3607952684852T 452.4 889.7385188093365T 678.6 916.4591691012669T 904.8 826.6851324847336T 1131 836.7854053052695L 1131 0 Z;M0 0L 0 918.182099153369Q 113.1 1088.3007740550825  226.2 1046.290873402258T 452.4 822.3741986244019T 678.6 911.2483204223499T 904.8 904.6649010266431T 1131 660.0510537949781L 1131 0 Z"
                  ></animate>
                </path>
                <path
                  d="M 0 0 L 0 952.17 Q 113.1 1016.4 226.2 992.944 T 452.4 996.927 T 678.6 967.065 T 904.8 794.515 T 1131 771.685 L 1131 0 Z"
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
                    values="M0 0L 0 952.0053921095661Q 113.1 985.1207788468778  226.2 960.357386788041T 452.4 1017.1349172887172T 678.6 949.7678532083906T 904.8 784.6107403968092T 1131 864.0683811156914L 1131 0 Z;M0 0L 0 952.2018580827913Q 113.1 1022.5251549963294  226.2 999.3265920892267T 452.4 992.9691986770977T 678.6 970.4536071874398T 904.8 796.4555125051236T 1131 753.5884508060659L 1131 0 Z;M0 0L 0 951.9944135892173Q 113.1 916.321693363391  226.2 895.2945440669661T 452.4 1016.5722369099674T 678.6 940.7723565592879T 904.8 854.6650807759802T 1131 862.8798340536085L 1131 0 Z;M0 0L 0 952.0053921095661Q 113.1 985.1207788468778  226.2 960.357386788041T 452.4 1017.1349172887172T 678.6 949.7678532083906T 904.8 784.6107403968092T 1131 864.0683811156914L 1131 0 Z"
                  ></animate>
                </path>
                <path
                  d="M 0 0 L 0 1105.57 Q 113.1 1050.52 226.2 1017.59 T 452.4 928.575 T 678.6 984.781 T 904.8 802.905 T 1131 753.948 L 1131 0 Z"
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
                    values="M0 0L 0 1141.8371347582881Q 113.1 932.0652954097119  226.2 883.9792554832666T 452.4 937.2262580803995T 678.6 993.0391808206593T 904.8 776.3745774610962T 1131 843.9133787788439L 1131 0 Z;M0 0L 0 1071.1075646249924Q 113.1 1048.3527319390203  226.2 1022.2778188558128T 452.4 869.6861326848244T 678.6 995.9630996868143T 904.8 802.3714785244531T 1131 752.5560001636322L 1131 0 Z;M0 0L 0 1150.2339255799666Q 113.1 1053.3395745655337  226.2 1011.5026207489476T 452.4 1004.90790288155T 678.6 970.2860645849386T 904.8 803.5957906818776T 1131 755.7532187485363L 1131 0 Z;M0 0L 0 1141.8371347582881Q 113.1 932.0652954097119  226.2 883.9792554832666T 452.4 937.2262580803995T 678.6 993.0391808206593T 904.8 776.3745774610962T 1131 843.9133787788439L 1131 0 Z"
                  ></animate>
                </path>
                <path
                  d="M 0 0 L 0 990.586 Q 113.1 981.027 226.2 946.88 T 452.4 879.451 T 678.6 971.212 T 904.8 830.413 T 1131 863.202 L 1131 0 Z"
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
                    values="M0 0L 0 1003.1249140913261Q 113.1 985.8840054220539  226.2 960.2611046535944T 452.4 831.9954493360539T 678.6 901.3513959028082T 904.8 863.4321242435417T 1131 703.7271889934955L 1131 0 Z;M0 0L 0 1041.82832170331Q 113.1 1017.5148178960585  226.2 972.1017466995143T 452.4 891.1338362927007T 678.6 963.7530346638338T 904.8 816.0254103905119T 1131 738.7246191730105L 1131 0 Z;M0 0L 0 990.1389781474186Q 113.1 980.8535463869775  226.2 946.4029704137112T 452.4 881.1417297565417T 678.6 973.7011235543969T 904.8 829.2369552572795T 1131 868.8841366874066L 1131 0 Z;M0 0L 0 1003.1249140913261Q 113.1 985.8840054220539  226.2 960.2611046535944T 452.4 831.9954493360539T 678.6 901.3513959028082T 904.8 863.4321242435417T 1131 703.7271889934955L 1131 0 Z"
                  ></animate>
                </path>
                <path
                  d="M 0 0 L 0 1090.71 Q 113.1 1073.22 226.2 1034.82 T 452.4 861.254 T 678.6 825.111 T 904.8 854.231 T 1131 822.966 L 1131 0 Z"
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
                    values="M0 0L 0 1100.8980956387043Q 113.1 1106.9179686038976  226.2 1067.284498592433T 452.4 859.5274727773609T 678.6 784.6653667286113T 904.8 830.7374199573014T 1131 773.9591962913105L 1131 0 Z;M0 0L 0 1008.2003910119191Q 113.1 989.4572349728917  226.2 973.3781027397168T 452.4 1002.7620965037983T 678.6 840.4510811277893T 904.8 716.0236663773613T 1131 831.116976311079L 1131 0 Z;M0 0L 0 1072.982897651226Q 113.1 1014.595993477129  226.2 978.3466315305196T 452.4 864.2585830421245T 678.6 895.476220136765T 904.8 895.1050586572601T 1131 908.2256125477921L 1131 0 Z;M0 0L 0 1100.8980956387043Q 113.1 1106.9179686038976  226.2 1067.284498592433T 452.4 859.5274727773609T 678.6 784.6653667286113T 904.8 830.7374199573014T 1131 773.9591962913105L 1131 0 Z"
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
