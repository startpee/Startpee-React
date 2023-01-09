import React from 'react'
import Head from 'next/head'

const Privacidade = (props) => {
  return (
    <>
      <div className="privacidade-container">
        <Head>
          <title>privacidade - Startpee</title>
          <meta
            name="description"
            content="Somos uma startup BizDev desenvolvedora de novos negócios"
          />
          <meta property="og:title" content="privacidade - Startpee" />
          <meta
            property="og:description"
            content="Somos uma startup BizDev desenvolvedora de novos negócios"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/539ecc6c-e320-424f-866d-3ca30eee9c12/a9699d9d-71cd-4636-bb34-1600dc9bbae9?org_if_sml=1"
          />
        </Head>
        <div className="privacidade-quote">
          <span className="privacidade-message">
            <span className="privacidade-text">
              &quot;todos os dados estão seguros e protegidos seguindo a lei da
              proteção de dados&quot;
            </span>
            <br className="privacidade-text1"></br>
          </span>
          <div className="privacidade-author">
            <img
              alt="image"
              src="/playground_assets/img_20220824_110123-200w.png"
              className="privacidade-avatar"
            />
            <span className="privacidade-quote1">
              <span className="privacidade-text2">—francisco júnior</span>
              <span>, Fundador e CEO, Startpee</span>
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .privacidade-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .privacidade-quote {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: center;
          }
          .privacidade-message {
            color: var(--dl-color-gray-black);
            font-size: 40px;
            max-width: 800px;
            line-height: 52px;
          }
          .privacidade-text {
            font-size: 18px;
            line-height: 19px;
          }
          .privacidade-text1 {
            font-size: 18px;
            line-height: 19px;
          }
          .privacidade-author {
            width: 800px;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: row;
          }
          .privacidade-avatar {
            width: 64px;
            height: 64px;
            object-fit: cover;
            border-radius: 50%;
          }
          .privacidade-quote1 {
            color: #1a1b29;
            width: 100%;
            max-width: 800px;
            margin-left: var(--dl-space-space-unit);
          }
          .privacidade-text2 {
            font-style: normal;
            font-weight: 600;
          }
          @media (max-width: 991px) {
            .privacidade-message {
              width: 100%;
              max-width: 800px;
            }
            .privacidade-text {
              width: 100%;
              max-width: 800px;
            }
            .privacidade-author {
              width: 100%;
              max-width: 800px;
            }
          }
          @media (max-width: 767px) {
            .privacidade-message {
              font-size: 24px;
              line-height: 31px;
            }
            .privacidade-text {
              font-size: 24px;
              line-height: 31px;
            }
            .privacidade-author {
              width: 100%;
            }
            .privacidade-avatar {
              width: 40px;
              height: 40px;
            }
            .privacidade-quote1 {
              font-size: 14px;
              max-width: 800px;
            }
          }
          @media (max-width: 479px) {
            .privacidade-message {
              color: var(--dl-color-gray-black);
            }
            .privacidade-text {
              font-size: 18px;
              line-height: 19px;
            }
            .privacidade-text1 {
              font-size: 18px;
              line-height: 19px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Privacidade
