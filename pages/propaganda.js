import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Propaganda = (props) => {
  return (
    <>
      <div className="propaganda-container">
        <Head>
          <title>propaganda - Startpee</title>
          <meta
            name="description"
            content="Somos uma startup BizDev desenvolvedora de novos negócios"
          />
          <meta property="og:title" content="propaganda - Startpee" />
          <meta
            property="og:description"
            content="Somos uma startup BizDev desenvolvedora de novos negócios"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/539ecc6c-e320-424f-866d-3ca30eee9c12/a9699d9d-71cd-4636-bb34-1600dc9bbae9?org_if_sml=1"
          />
        </Head>
        <section className="propaganda-hero">
          <iframe
            src="https://www.youtube.com/embed/_JxAK-KXJD0"
            className="propaganda-iframe"
          ></iframe>
        </section>
        <Link href="/ecommerce">
          <a className="propaganda-link">
            <div className="propaganda-get-started template-button">
              <span className="propaganda-text">
                <span>eu quero</span>
                <br></br>
              </span>
            </div>
          </a>
        </Link>
        <footer className="propaganda-footer">
          <div className="propaganda-top">
            <div className="propaganda-right">
              <div className="propaganda-category">
                <span className="propaganda-text03">Soluções </span>
                <div className="propaganda-links">
                  <div className="propaganda-links1">
                    <span className="propaganda-text04">
                      Consultoria de negócios
                    </span>
                    <Link href="/ecommerce">
                      <a className="propaganda-link1">Ajuda  E-commerce</a>
                    </Link>
                    <Link href="/propaganda">
                      <a className="propaganda-link2">
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
                    <span className="propaganda-text08">Instagram shop</span>
                  </div>
                </div>
              </div>
              <div className="propaganda-category1">
                <span className="propaganda-text09">Empresa</span>
                <div className="propaganda-links2">
                  <span className="propaganda-text10">Quem somos</span>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511993619129"
                    className="propaganda-link3"
                  >
                    fale conosco
                  </a>
                  <a
                    href="https://g.page/r/CThVb5zDOnTaEBM/review"
                    className="propaganda-link4"
                  >
                    Localização
                  </a>
                  <a
                    href="https://www.reclameaqui.com.br/empresa/startpee/"
                    className="propaganda-link5"
                  >
                    Reclame aqui
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511993619129"
                    className="propaganda-link6"
                  >
                    Politica de privacidade
                  </a>
                </div>
              </div>
              <div className="propaganda-category2">
                <span className="propaganda-text11">links uteis</span>
                <div className="propaganda-links3">
                  <a
                    href="https://open.spotify.com/show/6v5Qp09reNLm5gWmySugNz"
                    className="propaganda-link7"
                  >
                    Podcast
                  </a>
                  <span className="propaganda-text12">Linkedin</span>
                  <span className="propaganda-text13">Instagram</span>
                  <span className="propaganda-text14">Facebook</span>
                </div>
              </div>
            </div>
          </div>
          <div className="propaganda-bottom">
            <img
              alt="pastedImage"
              src="/playground_assets/start%20%5B1%5D%20%5B3%5D-200h.png"
              className="propaganda-branding"
            />
            <span className="propaganda-text15">
              CNPJ 20.369.543/0001-98  São Paulo- SP 
            </span>
            <span className="propaganda-text16">
              Copyright © Startpee - 2022
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .propaganda-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #1a1b29;
          }
          .propaganda-hero {
            width: 100%;
            height: 595px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #1a1b29;
          }
          .propaganda-iframe {
            width: 671px;
            height: 100%;
            margin-top: var(--dl-space-space-fourunits);
            margin-left: var(--dl-space-space-fiveunits);
            margin-right: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .propaganda-link {
            display: contents;
          }
          .propaganda-get-started {
            width: 283px;
            height: 96px;
            align-self: center;
            margin-top: var(--dl-space-space-fourunits);
            transition: 0.3s;
            text-decoration: none;
            background-color: #fa7930;
          }
          .propaganda-get-started:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .propaganda-text {
            font-size: 30px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 2;
          }
          .propaganda-footer {
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
          .propaganda-top {
            width: 100%;
            display: flex;
            max-width: 1200px;
            border-color: #3b3b3b;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .propaganda-right {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .propaganda-category {
            width: 240px;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .propaganda-text03 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .propaganda-links {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .propaganda-links1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .propaganda-text04 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .propaganda-link1 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .propaganda-link2 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .propaganda-text08 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .propaganda-category1 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .propaganda-text09 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .propaganda-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .propaganda-text10 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .propaganda-link3 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .propaganda-link4 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .propaganda-link5 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .propaganda-link6 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .propaganda-category2 {
            width: 240px;
            display: flex;
            flex-direction: column;
          }
          .propaganda-text11 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .propaganda-links3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .propaganda-link7 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .propaganda-text12 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .propaganda-text13 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .propaganda-text14 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .propaganda-bottom {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            user-select: none;
            flex-direction: column;
          }
          .propaganda-branding {
            width: var(--dl-size-size-large);
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
              brightness(103%) contrast(103%);
            margin-bottom: var(--dl-space-space-unit);
          }
          .propaganda-text15 {
            color: var(--dl-color-gray-white);
            font-size: 14px;
            line-height: 30px;
          }
          .propaganda-text16 {
            color: rgb(104, 104, 104);
            font-size: 14px;
            line-height: 30px;
          }
          @media (max-width: 991px) {
            .propaganda-hero {
              height: 453px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .propaganda-get-started {
              align-self: center;
            }
            .propaganda-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .propaganda-top {
              flex-direction: column;
            }
            .propaganda-right {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .propaganda-links {
              gap: var(--dl-space-space-unit);
            }
            .propaganda-links1 {
              gap: var(--dl-space-space-unit);
            }
            .propaganda-links2 {
              gap: var(--dl-space-space-unit);
            }
            .propaganda-links3 {
              gap: var(--dl-space-space-unit);
            }
            .propaganda-branding {
              width: var(--dl-size-size-medium);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .propaganda-text15 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
            .propaganda-text16 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .propaganda-container {
              background-color: #1a1b29;
            }
            .propaganda-hero {
              height: 620px;
              position: relative;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-threeunits);
              padding-bottom: 180px;
              background-color: #1a1b29;
            }
            .propaganda-iframe {
              width: 482px;
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: 3px;
            }
            .propaganda-get-started {
              align-self: center;
            }
            .propaganda-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .propaganda-category {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .propaganda-category1 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .propaganda-category2 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .propaganda-hero {
              height: 373px;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: 0px;
              padding-bottom: 83px;
              background-color: #1a1b29;
            }
            .propaganda-iframe {
              width: 400px;
              height: 100%;
              margin: var(--dl-space-space-twounits);
              margin-top: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .propaganda-get-started {
              width: 250px;
              height: 76px;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .propaganda-text {
              font-size: 30px;
              font-style: normal;
              font-weight: 600;
              line-height: 1.6;
            }
            .propaganda-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .propaganda-top {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .propaganda-category {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .propaganda-link1 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .propaganda-link2 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .propaganda-text08 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .propaganda-category1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .propaganda-text10 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .propaganda-category2 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .propaganda-links3 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .propaganda-text15 {
              color: var(--dl-color-gray-white);
            }
            .propaganda-text16 {
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

export default Propaganda
