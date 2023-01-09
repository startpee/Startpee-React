import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Ecommerce = (props) => {
  return (
    <>
      <div className="ecommerce-container">
        <Head>
          <title>ecommerce - Startpee</title>
          <meta
            name="description"
            content="Somos uma startup BizDev desenvolvedora de novos negócios"
          />
          <meta property="og:title" content="ecommerce - Startpee" />
          <meta
            property="og:description"
            content="Somos uma startup BizDev desenvolvedora de novos negócios"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/539ecc6c-e320-424f-866d-3ca30eee9c12/a9699d9d-71cd-4636-bb34-1600dc9bbae9?org_if_sml=1"
          />
        </Head>
        <section className="ecommerce-hero">
          <iframe
            src="https://www.youtube.com/embed/tk6ZiAca-8Y"
            className="ecommerce-iframe"
          ></iframe>
        </section>
        <a
          href="https://meet.sendinblue.com/startpee?t=0&amp;l=ajuda-no-e-commerce"
          className="ecommerce-link"
        >
          <div className="ecommerce-get-started template-button">
            <span className="ecommerce-text">
              <span>Agendar agora</span>
              <br></br>
            </span>
          </div>
        </a>
        <footer className="ecommerce-footer">
          <div className="ecommerce-top">
            <div className="ecommerce-right">
              <div className="ecommerce-category">
                <span className="ecommerce-text03">Soluções </span>
                <div className="ecommerce-links">
                  <span className="ecommerce-text04">
                    Consultoria de negócios
                  </span>
                  <Link href="/ecommerce">
                    <a className="ecommerce-link1">Ajuda  E-commerce</a>
                  </Link>
                  <Link href="/propaganda">
                    <a className="ecommerce-link2">
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
                  <span className="ecommerce-text08">Instagram shop</span>
                </div>
              </div>
              <div className="ecommerce-category1">
                <span className="ecommerce-text09">Empresa</span>
                <div className="ecommerce-links1">
                  <span className="ecommerce-text10">Quem somos</span>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511993619129"
                    className="ecommerce-link3"
                  >
                    fale conosco
                  </a>
                  <a
                    href="https://g.page/r/CThVb5zDOnTaEBM/review"
                    className="ecommerce-link4"
                  >
                    Localização
                  </a>
                  <a
                    href="https://www.reclameaqui.com.br/empresa/startpee/"
                    className="ecommerce-link5"
                  >
                    Reclame aqui
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511993619129"
                    className="ecommerce-link6"
                  >
                    Politica de privacidade
                  </a>
                </div>
              </div>
              <div className="ecommerce-category2">
                <span className="ecommerce-text11">links uteis</span>
                <div className="ecommerce-links2">
                  <a
                    href="https://open.spotify.com/show/6v5Qp09reNLm5gWmySugNz"
                    className="ecommerce-link7"
                  >
                    Podcast
                  </a>
                  <span className="ecommerce-text12">Linkedin</span>
                  <span className="ecommerce-text13">Instagram</span>
                  <span className="ecommerce-text14">Facebook</span>
                </div>
              </div>
            </div>
          </div>
          <Link href="/">
            <a className="ecommerce-link8">
              <div className="ecommerce-bottom">
                <img
                  alt="pastedImage"
                  src="/playground_assets/start%20%5B1%5D%20%5B3%5D-200h.png"
                  className="ecommerce-branding"
                />
                <span className="ecommerce-text15">
                  CNPJ 20.369.543/0001-98  São Paulo- SP 
                </span>
                <span className="ecommerce-text16">
                  Copyright © Startpee - 2022
                </span>
              </div>
            </a>
          </Link>
        </footer>
      </div>
      <style jsx>
        {`
          .ecommerce-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #1a1b29;
          }
          .ecommerce-hero {
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
          .ecommerce-iframe {
            width: 671px;
            height: 100%;
            margin-top: var(--dl-space-space-fourunits);
            margin-left: var(--dl-space-space-fiveunits);
            margin-right: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .ecommerce-link {
            display: contents;
          }
          .ecommerce-get-started {
            width: 283px;
            height: 96px;
            align-self: center;
            margin-top: var(--dl-space-space-fourunits);
            transition: 0.3s;
            text-decoration: none;
            background-color: #fa7930;
          }
          .ecommerce-get-started:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .ecommerce-text {
            font-size: 30px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 2;
          }
          .ecommerce-footer {
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
          .ecommerce-top {
            width: 100%;
            display: flex;
            max-width: 1200px;
            border-color: #3b3b3b;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .ecommerce-right {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .ecommerce-category {
            width: 240px;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .ecommerce-text03 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .ecommerce-links {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .ecommerce-text04 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .ecommerce-link1 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .ecommerce-link2 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .ecommerce-text08 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .ecommerce-category1 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .ecommerce-text09 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .ecommerce-links1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .ecommerce-text10 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .ecommerce-link3 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .ecommerce-link4 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .ecommerce-link5 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .ecommerce-link6 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .ecommerce-category2 {
            width: 240px;
            display: flex;
            flex-direction: column;
          }
          .ecommerce-text11 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .ecommerce-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .ecommerce-link7 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .ecommerce-text12 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .ecommerce-text13 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .ecommerce-text14 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .ecommerce-link8 {
            display: contents;
          }
          .ecommerce-bottom {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            user-select: none;
            flex-direction: column;
            text-decoration: none;
          }
          .ecommerce-branding {
            width: var(--dl-size-size-large);
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
              brightness(103%) contrast(103%);
            margin-bottom: var(--dl-space-space-unit);
          }
          .ecommerce-text15 {
            color: var(--dl-color-gray-white);
            font-size: 14px;
            line-height: 30px;
          }
          .ecommerce-text16 {
            color: rgb(104, 104, 104);
            font-size: 14px;
            line-height: 30px;
          }
          @media (max-width: 991px) {
            .ecommerce-hero {
              height: 453px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .ecommerce-get-started {
              align-self: center;
            }
            .ecommerce-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .ecommerce-top {
              flex-direction: column;
            }
            .ecommerce-right {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .ecommerce-links {
              gap: var(--dl-space-space-unit);
            }
            .ecommerce-links1 {
              gap: var(--dl-space-space-unit);
            }
            .ecommerce-links2 {
              gap: var(--dl-space-space-unit);
            }
            .ecommerce-branding {
              width: var(--dl-size-size-medium);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .ecommerce-text15 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
            .ecommerce-text16 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .ecommerce-container {
              background-color: #1a1b29;
            }
            .ecommerce-hero {
              height: 620px;
              position: relative;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-threeunits);
              padding-bottom: 180px;
              background-color: #1a1b29;
            }
            .ecommerce-iframe {
              width: 482px;
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: 3px;
            }
            .ecommerce-get-started {
              align-self: center;
              margin-top: 0px;
            }
            .ecommerce-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .ecommerce-category {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .ecommerce-category1 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .ecommerce-category2 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .ecommerce-hero {
              height: 375px;
              padding-bottom: 83px;
              background-color: #1a1b29;
            }
            .ecommerce-iframe {
              width: 400px;
              height: 100%;
              margin: var(--dl-space-space-twounits);
              margin-top: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .ecommerce-get-started {
              width: 250px;
              height: 76px;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .ecommerce-text {
              font-size: 30px;
              font-style: normal;
              font-weight: 600;
              line-height: 1.6;
            }
            .ecommerce-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .ecommerce-top {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .ecommerce-category {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .ecommerce-link1 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .ecommerce-link2 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .ecommerce-text08 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .ecommerce-category1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .ecommerce-text10 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .ecommerce-category2 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .ecommerce-links2 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .ecommerce-text15 {
              color: var(--dl-color-gray-white);
            }
            .ecommerce-text16 {
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

export default Ecommerce
