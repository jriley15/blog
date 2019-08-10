import React, { Component } from "react"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,

    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing.unit * 4,
    },

    maxWidth: "700px",
  },
})

class JMarkdown extends Component {
  constructor() {
    super()
    this.listIndex = 200
  }

  getId = () => {
    return this.listIndex++
  }

  render() {
    const { content, classes } = this.props

    let componentTree = []

    let elementTree = []

    if (content) {
      let strings = content.split("</")

      let index = 0

      strings.forEach(string => {
        if (!string.startsWith("<")) {
          string = string.substring(string.indexOf("<"))
        }

        let tag = string.substring(1, string.indexOf(">"))
        let content = string.substring(string.indexOf(">") + 1)

        if (content) {
          elementTree.push({ tag: tag, content: content, id: index })

          index++
        }
      })
      elementTree.forEach(element => {
        switch (element.tag) {
          case "img":
            //lazy load image
            break

          case "code":
            //code block element
            break

          case "link":
            componentTree.push(
              <Typography
                key={element.id}
                variant="body1"
                component="a"
                href={element.content}
              >
                {element.content}
              </Typography>
            )
            break

          case "list":
            let items = element.content.split(",")

            componentTree.push(
              <Typography key={element.id} variant="body1" component="div">
                <ul>
                  {items.map(item => (
                    <li key={this.getId()}>{item}</li>
                  ))}
                </ul>
              </Typography>
            )

            break

          default:
            componentTree.push(
              <Typography key={element.id} variant={element.tag}>
                {element.content}
              </Typography>
            )
            break
        }
      })
    }

    return (
      <Grid container direction="column" spacing={2} className={classes.root}>
        {componentTree.map(component => (
          <Grid item key={component.key}>
            {component}
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default withStyles(styles)(JMarkdown)
