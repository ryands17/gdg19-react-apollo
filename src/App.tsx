import React from 'react'
import { useFeedQuery } from 'generated/graphql'

const App: React.FC = () => {
  const { loading, data } = useFeedQuery()

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
                  {post.content && (
                    <>
                      <strong>Content:</strong>{' '}
                      <a
                        href={post.content}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {post.content}
                      </a>
                    </>
                  )}
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
