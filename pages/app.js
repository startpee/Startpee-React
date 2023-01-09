import React from 'react'
import Head from 'next/head'

const App = (props) => {
  return (
    <>
      <div className="app-container">
        <Head>
          <title>app - Startpee</title>
          <meta
            name="description"
            content="Somos uma startup BizDev desenvolvedora de novos negócios"
          />
          <meta property="og:title" content="app - Startpee" />
          <meta
            property="og:description"
            content="Somos uma startup BizDev desenvolvedora de novos negócios"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/539ecc6c-e320-424f-866d-3ca30eee9c12/a9699d9d-71cd-4636-bb34-1600dc9bbae9?org_if_sml=1"
          />
        </Head>
        <iframe
          src="https://landbot.online/v3/H-1382194-D7SJO1Z7SNH7WUTD/index.html"
          className="app-iframe"
        ></iframe>
      </div>
      <style jsx>
        {`
          .app-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .app-iframe {
            width: 100%;
            height: 800px;
          }
          @media (max-width: 991px) {
            .app-iframe {
              width: 100%;
              height: 800px;
            }
          }
          @media (max-width: 767px) {
            .app-iframe {
              width: 100%;
              height: 800px;
            }
          }
          @media (max-width: 479px) {
            .app-iframe {
              width: 100%;
              height: 800px;
            }
          }
        `}
      </style>
    </>
  )
}

export default App
