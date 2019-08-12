import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import AccountBox from "@material-ui/icons/AccountBox"
import List from "@material-ui/icons/List"
import School from "@material-ui/icons/School"
import Work from "@material-ui/icons/Work"
import ContactMail from "@material-ui/icons/ContactMail"
import About from "./About"

const useStylesTabPanel = makeStyles(theme => ({
  root: {
    width: "100%",
  },

  box: {
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4),
    },
  },
}))

function TabPanel(props) {
  const { children, value, index, ...other } = props
  const classes = useStylesTabPanel()

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={classes.root}
      {...other}
    >
      <Box className={classes.box}>{children}</Box>
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

    display: "flex",
    minHeight: "calc(100vh - 306px)",

    //maxWidth: 1080,
    width: "100%",
    maxWidth: 850,

    justifyContent: "center",

    color: theme.palette.common.black,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  titleFont: {
    fontWeight: 100,
  },
}))

export default function VerticalTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        indicatorColor="primary"
      >
        <Tab icon={<AccountBox />} label="About" {...a11yProps(0)} />
        <Tab icon={<Work />} label="Experience" {...a11yProps(1)} />
        <Tab icon={<School />} label="Education" {...a11yProps(2)} />
        <Tab icon={<List />} label="Skills" {...a11yProps(3)} />
        <Tab icon={<ContactMail />} label="Contact" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Six
      </TabPanel>
    </div>
  )
}
