const client = require("contentful").createClient({
  space: "i4tg1odi6szf", //process.env.SPACE_ID,
  accessToken: "dyYpdf5QLOErJecEzpBQDxEJWOj4Pj8W71aU3gedPCY", //process.env.ACCESS_TOKEN
})

module.exports = {
  getPosts: async function() {
    const posts = await client.getEntries({
      content_type: "blogPost",
    })
    return posts.items
    //return posts.items
  },
  getPost: async function(id) {
    const post = await client.getEntry(id)
    //return post.items[0]
    return post
  },
}

const post = {
  sys: {
    type: "Array",
  },
  total: 1,
  skip: 0,
  limit: 100,
  items: [
    {
      sys: {
        space: {
          sys: {
            type: "Link",
            linkType: "Space",
            id: "i4tg1odi6szf",
          },
        },
        id: "3qyZQmguWxjqFpvWx4fYiJ",
        type: "Entry",
        createdAt: "2019-08-01T01:23:54.418Z",
        updatedAt: "2019-08-01T06:48:34.401Z",
        environment: {
          sys: {
            id: "master",
            type: "Link",
            linkType: "Environment",
          },
        },
        revision: 13,
        contentType: {
          sys: {
            type: "Link",
            linkType: "ContentType",
            id: "blogPost",
          },
        },
        locale: "en-US",
      },
      fields: {
        title: "Test content",
        media: [
          {
            sys: {
              type: "Link",
              linkType: "Asset",
              id: "D83MOaChUBqRpDHJv5hEB",
            },
          },
        ],
        body: {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value:
                    "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  value: "bold",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [
                    {
                      type: "bold",
                    },
                    {
                      type: "italic",
                    },
                  ],
                  value: "italic",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: "1",
                          nodeType: "text",
                        },
                      ],
                      nodeType: "paragraph",
                    },
                  ],
                  nodeType: "list-item",
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: "2",
                          nodeType: "text",
                        },
                      ],
                      nodeType: "paragraph",
                    },
                  ],
                  nodeType: "list-item",
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: "3",
                          nodeType: "text",
                        },
                      ],
                      nodeType: "paragraph",
                    },
                  ],
                  nodeType: "list-item",
                },
              ],
              nodeType: "unordered-list",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  value:
                    "divider: {    \n  marginBottom: theme.spacing(2),    \n  marginTop: theme.spacing(2),  \n},",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: "quote lol",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
              ],
              nodeType: "blockquote",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: "",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
            {
              data: {},
              content: [],
              nodeType: "hr",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: "test",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
          ],
          nodeType: "document",
        },
      },
    },
  ],
  includes: {
    Asset: [
      {
        sys: {
          space: {
            sys: {
              type: "Link",
              linkType: "Space",
              id: "i4tg1odi6szf",
            },
          },
          id: "D83MOaChUBqRpDHJv5hEB",
          type: "Asset",
          createdAt: "2019-08-01T04:57:40.402Z",
          updatedAt: "2019-08-01T04:57:40.402Z",
          environment: {
            sys: {
              id: "master",
              type: "Link",
              linkType: "Environment",
            },
          },
          revision: 1,
          locale: "en-US",
        },
        fields: {
          title: "preview image",
          file: {
            url:
              "//images.ctfassets.net/i4tg1odi6szf/D83MOaChUBqRpDHJv5hEB/2097a783f60167b6a0c7d9d02b2beaeb/58531d7356ce728d0ed604a3_denali-1.jpg",
            details: {
              size: 114881,
              image: {
                width: 1440,
                height: 900,
              },
            },
            fileName: "58531d7356ce728d0ed604a3_denali-1.jpg",
            contentType: "image/jpeg",
          },
        },
      },
    ],
  },
}

const posts = {
  sys: {
    type: "Array",
  },
  total: 2,
  skip: 0,
  limit: 100,
  items: [
    {
      sys: {
        space: {
          sys: {
            type: "Link",
            linkType: "Space",
            id: "i4tg1odi6szf",
          },
        },
        id: "3qyZQmguWxjqFpvWx4fYiJ",
        type: "Entry",
        createdAt: "2019-08-01T01:23:54.418Z",
        updatedAt: "2019-08-01T06:48:34.401Z",
        environment: {
          sys: {
            id: "master",
            type: "Link",
            linkType: "Environment",
          },
        },
        revision: 13,
        contentType: {
          sys: {
            type: "Link",
            linkType: "ContentType",
            id: "blogPost",
          },
        },
        locale: "en-US",
      },
      fields: {
        title: "Test content",
        media: [
          {
            sys: {
              type: "Link",
              linkType: "Asset",
              id: "D83MOaChUBqRpDHJv5hEB",
            },
          },
        ],
        body: {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value:
                    "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  value: "bold",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [
                    {
                      type: "bold",
                    },
                    {
                      type: "italic",
                    },
                  ],
                  value: "italic",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: "1",
                          nodeType: "text",
                        },
                      ],
                      nodeType: "paragraph",
                    },
                  ],
                  nodeType: "list-item",
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: "2",
                          nodeType: "text",
                        },
                      ],
                      nodeType: "paragraph",
                    },
                  ],
                  nodeType: "list-item",
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: "3",
                          nodeType: "text",
                        },
                      ],
                      nodeType: "paragraph",
                    },
                  ],
                  nodeType: "list-item",
                },
              ],
              nodeType: "unordered-list",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  value:
                    "divider: {    \n  marginBottom: theme.spacing(2),    \n  marginTop: theme.spacing(2),  \n},",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: "quote lol",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
              ],
              nodeType: "blockquote",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: "",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
            {
              data: {},
              content: [],
              nodeType: "hr",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: "test",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
          ],
          nodeType: "document",
        },
      },
    },
    {
      sys: {
        space: {
          sys: {
            type: "Link",
            linkType: "Space",
            id: "i4tg1odi6szf",
          },
        },
        id: "4Lu7a0RbOC8mAmhb7FNHHt",
        type: "Entry",
        createdAt: "2019-07-31T05:06:19.006Z",
        updatedAt: "2019-07-31T05:06:19.006Z",
        environment: {
          sys: {
            id: "master",
            type: "Link",
            linkType: "Environment",
          },
        },
        revision: 1,
        contentType: {
          sys: {
            type: "Link",
            linkType: "ContentType",
            id: "blogPost",
          },
        },
        locale: "en-US",
      },
      fields: {
        title: "Test post",
        date: "2019-07-09T00:00-07:00",
        body: {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: "First test blog post! ",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
          ],
          nodeType: "document",
        },
      },
    },
  ],
  includes: {
    Asset: [
      {
        sys: {
          space: {
            sys: {
              type: "Link",
              linkType: "Space",
              id: "i4tg1odi6szf",
            },
          },
          id: "D83MOaChUBqRpDHJv5hEB",
          type: "Asset",
          createdAt: "2019-08-01T04:57:40.402Z",
          updatedAt: "2019-08-01T04:57:40.402Z",
          environment: {
            sys: {
              id: "master",
              type: "Link",
              linkType: "Environment",
            },
          },
          revision: 1,
          locale: "en-US",
        },
        fields: {
          title: "preview image",
          file: {
            url:
              "//images.ctfassets.net/i4tg1odi6szf/D83MOaChUBqRpDHJv5hEB/2097a783f60167b6a0c7d9d02b2beaeb/58531d7356ce728d0ed604a3_denali-1.jpg",
            details: {
              size: 114881,
              image: {
                width: 1440,
                height: 900,
              },
            },
            fileName: "58531d7356ce728d0ed604a3_denali-1.jpg",
            contentType: "image/jpeg",
          },
        },
      },
    ],
  },
}
