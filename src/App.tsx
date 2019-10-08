import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { Query } from 'generated/graphql'

const FETCH_FEED = gql`
  query feed {
    feed {
      id
      title
      content
    }
  }
`

const App: React.FC = () => {
  const { loading, data } = useQuery<Query>(FETCH_FEED)

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h1>My Feed</h1>
      <ul>
        {data &&
          data.feed.map(post => {
            return (
              <React.Fragment key={post.id}>
                <li>
                  <strong>Title:</strong> {post.title}
                  <br />
                  <strong>Content:</strong> {post.content} <br />
                </li>
                <br />
              </React.Fragment>
            )
          })}
      </ul>
    </div>
  )
}

export default App
