import { Box, Typography } from "@material-ui/core"
import { urlFor } from "../../data/blog"
import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import js from "../../node_modules/react-syntax-highlighter/dist/esm/languages/hljs/javascript"
import docco from "../../node_modules/react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark"

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

    //console.log("block: ", props.node)
    if (props.node._type === "Inline Image") {
      return (
        <Box display="flex" justifyContent="center">
          <img
            src={props.node.src}
            style={{
              maxWidth: "calc(100% - 8px)",
              paddingTop: 8,
              paddingBottom: 8,
            }}
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
              marginBlockStart: "0.5em",
              marginBlockEnd: "0.5em",
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
              marginBlockStart: "0.5em",
              marginBlockEnd: "0.5em",
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

    return (
      <Typography gutterBottom style={{ paddingTop: 4, paddingBottom: 4 }}>
        {props.children}
      </Typography>
    )
  },
  listItem: props => (
    <li>
      <Typography variant="body1">{props.children}</Typography>
    </li>
  ),
}
