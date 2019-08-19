import { Box, Typography } from "@material-ui/core"
import { urlFor } from "../../data/blog"
import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import js from "../../node_modules/react-syntax-highlighter/dist/esm/languages/hljs/javascript"
import docco from "../../node_modules/react-syntax-highlighter/dist/esm/styles/hljs/shades-of-purple"

SyntaxHighlighter.registerLanguage("javascript", js)

export default {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },

  block: props => {
    const style = props.node.style || "normal"

    if (props.node._type === "image") {
      return (
        <Box display="flex" justifyContent="center">
          <img
            src={urlFor(props.node)
              .width(400)
              .url()}
            style={{ maxWidth: "calc(100% - 16px)" }}
          />
        </Box>
      )
    }
    //console.log(props.node)
    switch (style) {
      case "h1":
        return (
          <Typography
            variant="h4"
            style={{
              marginBlockStart: "1em",
              marginBlockEnd: "1em",
              fontWeight: 400,
            }}
          >
            {props.children}
          </Typography>
        )
      case "h2":
        return (
          <Typography
            variant="h5"
            style={{
              marginBlockStart: ".75em",
              marginBlockEnd: ".75em",
              fontWeight: 400,
            }}
          >
            {props.children}
          </Typography>
        )
      case "h3":
        return (
          <Typography
            variant="h6"
            component="h3"
            style={{
              marginBlockStart: "0.5em",
              marginBlockEnd: "0.5em",
              fontWeight: 400,
            }}
          >
            {props.children}
          </Typography>
        )
      case "code":
        return (
          <SyntaxHighlighter style={docco}>
            {props.node.children[0].text.replace(/(\r\n|\n|\r)/gm, "\n")}
          </SyntaxHighlighter>
        )
    }

    return <Typography gutterBottom>{props.children}</Typography>
  },
  listItem: props => (
    <li>
      <Typography variant="body1">{props.children}</Typography>
    </li>
  ),
}
