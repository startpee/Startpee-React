import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

const Sacolinha = (props) => {
  return (
    <>
      <div className="sacolinha-container">
        <Head>
          <title>sacolinha - Startpee</title>
          <meta
            name="description"
            content="Somos uma startup BizDev desenvolvedora de novos negócios"
          />
          <meta property="og:title" content="sacolinha - Startpee" />
          <meta
            property="og:description"
            content="Somos uma startup BizDev desenvolvedora de novos negócios"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/539ecc6c-e320-424f-866d-3ca30eee9c12/a9699d9d-71cd-4636-bb34-1600dc9bbae9?org_if_sml=1"
          />
        </Head>
        <section className="sacolinha-hero">
          <iframe
            src="https://www.youtube.com/embed/tk6ZiAca-8Y"
            className="sacolinha-iframe"
          ></iframe>
        </section>
        <a
          href="https://meet.sendinblue.com/startpee?t=0&amp;l=ajuda-no-e-commerce"
          className="sacolinha-link"
        >
          <div className="sacolinha-get-started template-button">
            <span className="sacolinha-text">
              <span>Agendar agora</span>
              <br></br>
            </span>
          </div>
        </a>
        <div className="sacolinha-div">
          <DangerousHTML
            html={`<script async src="https://cdn.now4real.com/now4real.js"></script>`}
          ></DangerousHTML>
        </div>
        <footer className="sacolinha-footer">
          <div className="sacolinha-top">
            <div className="sacolinha-right">
              <div className="sacolinha-category">
                <span className="sacolinha-text03">Soluções </span>
                <div className="sacolinha-links">
                  <a
                    href="https://api.whatsapp.com/send?phone=5511993619129"
                    className="sacolinha-link01"
                  >
                    Consultoria de negócios
                  </a>
                  <Link href="/ecommerce">
                    <a className="sacolinha-link02">Ajuda  E-commerce</a>
                  </Link>
                  <Link href="/propaganda">
                    <a className="sacolinha-link03">
                      <span>
                        Patrocinar
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>anúncio</span>
                      <span>s</span>
                    </a>
                  </Link>
                  <Link href="/sacolinha">
                    <a className="sacolinha-link04">Instagram shop</a>
                  </Link>
                </div>
              </div>
              <div className="sacolinha-category1">
                <span className="sacolinha-text07">Empresa</span>
                <div className="sacolinha-links1">
                  <span className="sacolinha-text08">Quem somos</span>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511993619129"
                    className="sacolinha-link05"
                  >
                    fale conosco
                  </a>
                  <a
                    href="https://g.page/r/CThVb5zDOnTaEBM/review"
                    className="sacolinha-link06"
                  >
                    Localização
                  </a>
                  <a
                    href="https://www.reclameaqui.com.br/empresa/startpee/"
                    className="sacolinha-link07"
                  >
                    Reclame aqui
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511993619129"
                    className="sacolinha-link08"
                  >
                    Politica de privacidade
                  </a>
                </div>
              </div>
              <div className="sacolinha-category2">
                <span className="sacolinha-text09">links uteis</span>
                <div className="sacolinha-links2">
                  <a
                    href="https://open.spotify.com/show/6v5Qp09reNLm5gWmySugNz"
                    className="sacolinha-link09"
                  >
                    Podcast
                  </a>
                  <span className="sacolinha-text10">Linkedin</span>
                  <span className="sacolinha-text11">Instagram</span>
                  <span className="sacolinha-text12">Facebook</span>
                </div>
              </div>
            </div>
          </div>
          <Link href="/">
            <a className="sacolinha-link10">
              <div className="sacolinha-bottom">
                <img
                  alt="pastedImage"
                  src="/playground_assets/start%20%5B1%5D%20%5B3%5D-200h.png"
                  className="sacolinha-branding"
                />
                <span className="sacolinha-text13">
                  CNPJ 20.369.543/0001-98  São Paulo- SP 
                </span>
                <span className="sacolinha-text14">
                  Copyright © Startpee - 2022
                </span>
              </div>
            </a>
          </Link>
        </footer>
      </div>
      <style jsx>
        {`
          .sacolinha-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #1a1b29;
          }
          .sacolinha-hero {
            width: 100%;
            height: 595px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: #1a1b29;
          }
          .sacolinha-iframe {
            width: 671px;
            height: 100%;
            margin-top: var(--dl-space-space-fourunits);
            margin-left: var(--dl-space-space-fiveunits);
            margin-right: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .sacolinha-link {
            display: contents;
          }
          .sacolinha-get-started {
            width: 283px;
            height: 96px;
            align-self: center;
            margin-top: var(--dl-space-space-fourunits);
            transition: 0.3s;
            text-decoration: none;
            background-color: #fa7930;
          }
          .sacolinha-get-started:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .sacolinha-text {
            font-size: 30px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 2;
          }
          .sacolinha-div {
            width: 100%;
            height: 100%;
          }
          .sacolinha-footer {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
            background-color: #1a1b29;
          }
          .sacolinha-top {
            width: 100%;
            display: flex;
            max-width: 1200px;
            border-color: #3b3b3b;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .sacolinha-right {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .sacolinha-category {
            width: 240px;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .sacolinha-text03 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .sacolinha-links {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sacolinha-link01 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .sacolinha-link02 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .sacolinha-link03 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .sacolinha-link04 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .sacolinha-category1 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sacolinha-text07 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .sacolinha-links1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sacolinha-text08 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .sacolinha-link05 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .sacolinha-link06 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .sacolinha-link07 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .sacolinha-link08 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .sacolinha-category2 {
            width: 240px;
            display: flex;
            flex-direction: column;
          }
          .sacolinha-text09 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .sacolinha-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sacolinha-link09 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .sacolinha-text10 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .sacolinha-text11 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .sacolinha-text12 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .sacolinha-link10 {
            display: contents;
          }
          .sacolinha-bottom {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            user-select: none;
            flex-direction: column;
            text-decoration: none;
          }
          .sacolinha-branding {
            width: var(--dl-size-size-large);
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
              brightness(103%) contrast(103%);
            margin-bottom: var(--dl-space-space-unit);
          }
          .sacolinha-text13 {
            color: var(--dl-color-gray-white);
            font-size: 14px;
            line-height: 30px;
          }
          .sacolinha-text14 {
            color: rgb(104, 104, 104);
            font-size: 14px;
            line-height: 30px;
          }
          @media (max-width: 991px) {
            .sacolinha-hero {
              height: 453px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .sacolinha-get-started {
              align-self: center;
            }
            .sacolinha-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .sacolinha-top {
              flex-direction: column;
            }
            .sacolinha-right {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .sacolinha-links {
              gap: var(--dl-space-space-unit);
            }
            .sacolinha-links1 {
              gap: var(--dl-space-space-unit);
            }
            .sacolinha-links2 {
              gap: var(--dl-space-space-unit);
            }
            .sacolinha-branding {
              width: var(--dl-size-size-medium);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .sacolinha-text13 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
            .sacolinha-text14 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .sacolinha-container {
              background-color: #1a1b29;
            }
            .sacolinha-hero {
              height: 620px;
              position: relative;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-threeunits);
              padding-bottom: 180px;
              background-color: #1a1b29;
            }
            .sacolinha-iframe {
              width: 482px;
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: 3px;
            }
            .sacolinha-get-started {
              align-self: center;
              margin-top: 0px;
            }
            .sacolinha-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .sacolinha-category {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .sacolinha-category1 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .sacolinha-category2 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .sacolinha-hero {
              height: 375px;
              padding-bottom: 83px;
              background-color: #1a1b29;
            }
            .sacolinha-iframe {
              width: 400px;
              height: 100%;
              margin: var(--dl-space-space-twounits);
              margin-top: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .sacolinha-get-started {
              width: 250px;
              height: 76px;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .sacolinha-text {
              font-size: 30px;
              font-style: normal;
              font-weight: 600;
              line-height: 1.6;
            }
            .sacolinha-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .sacolinha-top {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .sacolinha-category {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .sacolinha-link02 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .sacolinha-link03 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .sacolinha-link04 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .sacolinha-category1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .sacolinha-text08 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .sacolinha-category2 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .sacolinha-links2 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .sacolinha-text13 {
              color: var(--dl-color-gray-white);
            }
            .sacolinha-text14 {
              color: var(--dl-color-gray-700);
              font-size: 12px;
              line-height: 25px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Sacolinha
