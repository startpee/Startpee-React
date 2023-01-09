import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Startpee</title>
          <meta
            name="description"
            content="Somos uma startup BizDev desenvolvedora de novos negócios"
          />
          <meta property="og:title" content="Startpee" />
          <meta
            property="og:description"
            content="Somos uma startup BizDev desenvolvedora de novos negócios"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/539ecc6c-e320-424f-866d-3ca30eee9c12/a9699d9d-71cd-4636-bb34-1600dc9bbae9?org_if_sml=1"
          />
        </Head>
        <div className="home-container1">
          <h1 className="home-text">Seu próprio negócio</h1>
          <a
            href="https://open.spotify.com/episode/7yNG9mBlqcJHpIIdRGEbHu"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link"
          >
            <h1 className="home-text01">Clique aqui -&gt;</h1>
          </a>
        </div>
        <section className="home-hero">
          <div className="home-menu">
            <div id="mobile-menu" className="home-mobile-navigation">
              <img
                alt="pastedImage"
                src="/playground_assets/handshake_1f91d-1500h.png"
                className="home-logo"
              />
              <div className="home-links">
                <a
                  href="https://api.whatsapp.com/send?phone=5511967272695"
                  className="home-link01 Link"
                >
                  Fale conosco
                </a>
                <a href="#servi" className="home-link02 Link">
                  Serviços
                </a>
                <Link href="/app">
                  <a className="home-link03 button">Contratar</a>
                </Link>
              </div>
              <div id="close-mobile-menu" className="home-close-mobile-menu">
                <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
                  <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
                </svg>
              </div>
            </div>
            <div className="home-desktop-navigation">
              <nav className="home-centered">
                <div className="home-left">
                  <img
                    alt="pastedImage"
                    src="/playground_assets/start%20%5B1%5D%20%5B3%5D-200h.png"
                    className="home-logo1"
                  />
                  <div className="home-links1">
                    <span className="Link">Inicio</span>
                    <a
                      href="https://g.page/r/CThVb5zDOnTaEBM"
                      className="home-link04 Link"
                    >
                      Quem somos
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=5511967272695"
                      className="home-link05 Link"
                    >
                      Fale conosco
                    </a>
                  </div>
                </div>
                <div className="home-right">
                  <Link href="/app">
                    <a className="home-link06">
                      <div className="home-get-started">
                        <span className="home-text03">Contratar</span>
                      </div>
                    </a>
                  </Link>
                  <div id="open-mobile-menu" className="home-burger-menu">
                    <img
                      alt="pastedImage"
                      src="/playground_assets/pastedimage-yxbd.svg"
                      className="home-mobile-menu-button"
                    />
                  </div>
                </div>
              </nav>
            </div>
            <div>
              <DangerousHTML
                html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
              ></DangerousHTML>
            </div>
          </div>
          <iframe
            src="https://www.youtube.com/embed/tk6ZiAca-8Y"
            className="home-iframe"
          ></iframe>
        </section>
        <div className="home-container2">
          <h1 className="home-text04">
            Startup desenvolvedora de novos negócios 🤝
          </h1>
        </div>
        <div className="home-div">
          <DangerousHTML
            html={`<storifyme-collection url="https://stories.storifyme.com/widgets/g-francisco-junior-70482/widget/custom/6913"></storifyme-collection>`}
          ></DangerousHTML>
        </div>
        <section className="home-quote-container">
          <div className="home-quote">
            <span className="home-message">
              <span className="home-text05">
                &quot;vai chegar um dia na qual você descobri que Existe
                infinitas possibilidades que as pessoas não estão enxergando,que
                só você consegue enxergar&quot;
              </span>
              <br className="home-text06"></br>
            </span>
            <div className="home-author">
              <img
                alt="image"
                src="/playground_assets/img_20220824_110123-200w.png"
                className="home-avatar"
              />
              <span className="home-quote1">
                <span className="home-text07">—francisco júnior</span>
                <span>, Fundador e CEO, Startpee</span>
              </span>
            </div>
          </div>
        </section>
        <section className="home-banners"></section>
        <section id="servi" className="home-pricing">
          <div className="home-centered-container">
            <div className="home-heading">
              <span className="home-text09 title">
                Nosso Principal serviço 
              </span>
              <span className="home-text10">
                <span>
                  {' '}
                  dúvidas entre em
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text12">contato pelo chat</span>
              </span>
            </div>
            <div className="home-card">
              <span className="home-text13">Plano de negócios</span>
              <img
                alt="image"
                src="/playground_assets/task-200h.png"
                className="home-image"
              />
              <span className="home-text14">
                o plano de negócios é desenvolvido de acordo com a sua realidade
              </span>
              <Link href="/app">
                <a className="home-link07">
                  <div className="home-get-started1 template-button">
                    <span className="home-text15">
                      <span>Saiba mais</span>
                      <br></br>
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-top">
            <div className="home-right1">
              <div className="home-category">
                <span className="home-text18">Soluções </span>
                <div className="home-links2">
                  <Link href="/app">
                    <a className="home-link08">Vendas online</a>
                  </Link>
                  <Link href="/app">
                    <a className="home-link09">Instagram shop</a>
                  </Link>
                  <Link href="/app">
                    <a className="home-link10">Plano de negócios</a>
                  </Link>
                </div>
              </div>
              <div className="home-category1">
                <span className="home-text19">Empresa</span>
                <div className="home-links3">
                  <span className="home-text20">Quem somos</span>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511967272695"
                    className="home-link11"
                  >
                    fale conosco
                  </a>
                  <a
                    href="https://g.page/r/CThVb5zDOnTaEBM/review"
                    className="home-link12"
                  >
                    Localização
                  </a>
                  <a
                    href="https://www.reclameaqui.com.br/empresa/startpee/"
                    className="home-link13"
                  >
                    Reclame aqui
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=55119967272695"
                    className="home-link14"
                  >
                    trabalhe conosco
                  </a>
                </div>
              </div>
              <div className="home-category2">
                <span className="home-text21">links uteis</span>
                <div className="home-links4">
                  <a
                    href="https://open.spotify.com/show/6v5Qp09reNLm5gWmySugNz"
                    className="home-link15"
                  >
                    Podcast
                  </a>
                  <a
                    href="https://www.linkedin.com/company/startpee/"
                    className="home-link16"
                  >
                    Linkedin
                  </a>
                  <a
                    href="https://www.instagram.com/start_pee"
                    className="home-link17"
                  >
                    Instagram
                  </a>
                  <span className="home-text22">Facebook</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <img
              alt="pastedImage"
              src="/playground_assets/start%20%5B1%5D%20%5B3%5D-200h.png"
              className="home-branding"
            />
            <span className="home-text23">
              CNPJ 20.369.543/0001-98  São Paulo- SP 
            </span>
            <span className="home-text24">Copyright © Startpee - 2022</span>
            <a
              href="https://www.reclameaqui.com.br/empresa/startpee/"
              className="home-link18"
            >
              <img
                alt="image"
                src="/playground_assets/reclame-aqui.svg"
                className="home-image1"
              />
            </a>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .home-container1 {
            width: 100%;
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fa7930;
          }
          .home-text {
            color: rgb(0, 0, 0);
            font-size: 26px;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-link {
            display: contents;
          }
          .home-text01 {
            color: var(--dl-color-gray-white);
            font-size: 19px;
            text-decoration: none;
          }
          .home-hero {
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
          .home-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-mobile-navigation {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100vw;
            height: 100vh;
            display: flex;
            z-index: 150;
            position: fixed;
            transform: translateX(100%);
            transition: transform 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-logo {
            width: 64px;
          }
          .home-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link01 {
            text-decoration: none;
          }
          .home-link02 {
            text-decoration: none;
          }
          .home-link03 {
            text-decoration: none;
          }
          .home-close-mobile-menu {
            top: var(--dl-space-space-oneandhalfunits);
            right: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-icon {
            width: 24px;
            height: 24px;
            display: flex;
          }
          .home-desktop-navigation {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .home-centered {
            width: 100%;
            display: flex;
            max-width: 1200px;
            box-sizing: initial;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .home-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .home-logo1 {
            width: var(--dl-size-size-xlarge);
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-links1 {
            display: flex;
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .home-link04 {
            text-decoration: none;
          }
          .home-link05 {
            text-decoration: none;
          }
          .home-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-link06 {
            display: contents;
          }
          .home-get-started {
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: #fa7930;
          }
          .home-get-started:hover {
            background-color: #5228f5;
          }
          .home-text03 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .home-burger-menu {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-mobile-menu-button {
            width: 40px;
            height: 40px;
            display: none;
          }
          .home-iframe {
            width: 547px;
            height: 372px;
            margin: var(--dl-space-space-threeunits);
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-text04 {
            color: var(--dl-color-gray-black);
            font-size: 29px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .home-div {
            width: 100%;
            height: 257px;
          }
          .home-quote-container {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 160px;
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: 160px;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-quote {
            width: 100%;
            display: flex;
            max-width: 1200px;
            flex-direction: column;
            justify-content: center;
          }
          .home-message {
            color: var(--dl-color-gray-black);
            font-size: 40px;
            max-width: 800px;
            line-height: 52px;
          }
          .home-text05 {
            font-size: 18px;
            line-height: 19px;
          }
          .home-text06 {
            font-size: 18px;
            line-height: 19px;
          }
          .home-author {
            width: 800px;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: row;
          }
          .home-avatar {
            width: 64px;
            height: 64px;
            object-fit: cover;
            border-radius: 50%;
          }
          .home-quote1 {
            color: #1a1b29;
            width: 100%;
            max-width: 800px;
            margin-left: var(--dl-space-space-unit);
          }
          .home-text07 {
            font-style: normal;
            font-weight: 600;
          }
          .home-banners {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-pricing {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: #fa7930;
          }
          .home-centered-container {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text09 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .home-text10 {
            color: rgb(238, 233, 254);
            width: 600px;
            font-size: 19px;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text12 {
            text-decoration: underline;
          }
          .home-card {
            flex: 1;
            width: 543px;
            height: 503px;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: 40px;
            border-radius: 50px;
            padding-right: 40px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .home-text13 {
            font-size: 28px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-image {
            width: 123px;
            height: 140px;
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
            object-fit: cover;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text14 {
            color: rgb(0, 0, 0);
            font-size: 22px;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-link07 {
            display: contents;
          }
          .home-get-started1 {
            align-self: center;
            margin-top: var(--dl-space-space-oneandhalfunits);
            transition: 0.3s;
            padding-top: var(--dl-space-space-oneandhalfunits);
            margin-bottom: 0px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
            background-color: #fa7930;
          }
          .home-get-started1:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-text15 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-footer {
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
          .home-top {
            width: 100%;
            display: flex;
            max-width: 1200px;
            border-color: #3b3b3b;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-right1 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-category {
            width: 240px;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .home-text18 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link08 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-link09 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-link10 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-category1 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text19 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-links3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text20 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-link11 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-link12 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-link13 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-link14 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-category2 {
            width: 240px;
            display: flex;
            flex-direction: column;
          }
          .home-text21 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-links4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link15 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-link16 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-link17 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-text22 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-bottom {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            user-select: none;
            flex-direction: column;
          }
          .home-branding {
            width: var(--dl-size-size-large);
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
              brightness(103%) contrast(103%);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text23 {
            color: var(--dl-color-gray-white);
            font-size: 14px;
            line-height: 30px;
          }
          .home-text24 {
            color: rgb(104, 104, 104);
            font-size: 14px;
            line-height: 30px;
          }
          .home-link18 {
            display: contents;
          }
          .home-image1 {
            width: 100px;
            object-fit: cover;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .home-hero {
              height: 453px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-close-mobile-menu {
              align-items: center;
              justify-content: center;
            }
            .home-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-centered {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .home-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-logo1 {
              width: var(--dl-size-size-large);
            }
            .home-links1 {
              display: none;
            }
            .home-get-started {
              display: none;
            }
            .home-mobile-menu-button {
              display: flex;
            }
            .home-iframe {
              width: 480px;
              height: 322px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .home-text04 {
              color: var(--dl-color-gray-black);
              width: 709px;
              font-size: 26px;
              font-style: normal;
              font-weight: 700;
              line-height: 45px;
            }
            .home-quote-container {
              padding-top: var(--dl-space-space-sevenunits);
              padding-bottom: var(--dl-space-space-sevenunits);
            }
            .home-message {
              width: 100%;
              max-width: 800px;
            }
            .home-text05 {
              width: 100%;
              max-width: 800px;
            }
            .home-author {
              width: 100%;
              max-width: 800px;
            }
            .home-text10 {
              width: 100%;
              max-width: 600px;
            }
            .home-card {
              width: 100%;
              align-items: flex-start;
            }
            .home-text13 {
              align-self: center;
            }
            .home-text14 {
              align-self: center;
            }
            .home-get-started1 {
              align-self: center;
            }
            .home-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .home-top {
              flex-direction: column;
            }
            .home-right1 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-links2 {
              gap: var(--dl-space-space-unit);
            }
            .home-links3 {
              gap: var(--dl-space-space-unit);
            }
            .home-links4 {
              gap: var(--dl-space-space-unit);
            }
            .home-branding {
              width: var(--dl-size-size-medium);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text23 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
            .home-text24 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              height: 620px;
              position: relative;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-threeunits);
              padding-bottom: 180px;
              background-color: #1a1b29;
            }
            .home-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-centered {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-left {
              margin-left: var(--dl-space-space-unit);
            }
            .home-logo1 {
              width: var(--dl-size-size-large);
            }
            .home-right {
              margin-right: var(--dl-space-space-unit);
            }
            .home-get-started {
              display: none;
            }
            .home-iframe {
              width: 482px;
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: 3px;
            }
            .home-text04 {
              color: var(--dl-color-gray-black);
              width: 576px;
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .home-quote-container {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-message {
              font-size: 24px;
              line-height: 31px;
            }
            .home-text05 {
              font-size: 24px;
              line-height: 31px;
            }
            .home-author {
              width: 100%;
            }
            .home-avatar {
              width: 40px;
              height: 40px;
            }
            .home-quote1 {
              font-size: 14px;
              max-width: 800px;
            }
            .home-pricing {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-card {
              align-self: center;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text13 {
              font-size: 28px;
              align-self: center;
            }
            .home-text14 {
              align-self: center;
            }
            .home-get-started1 {
              align-self: center;
            }
            .home-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-category {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-category1 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-category2 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-container1 {
              width: 437px;
              height: 39px;
              align-self: center;
              background-color: #fa7930;
            }
            .home-text {
              color: rgb(0, 0, 0);
              width: 202px;
              height: 24px;
              font-size: 16px;
              align-self: center;
              text-align: center;
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-text01 {
              color: var(--dl-color-gray-white);
              font-size: 17px;
              align-self: center;
              text-align: center;
              text-decoration: underline;
            }
            .home-hero {
              height: 373px;
              padding-bottom: 0px;
              background-color: #1a1b29;
            }
            .home-mobile-navigation {
              width: 453px;
              margin-right: 4px;
              padding-right: 84px;
            }
            .home-logo {
              margin-top: var(--dl-space-space-halfunit);
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-links {
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-link01 {
              align-self: center;
              margin-top: var(--dl-space-space-halfunit);
              text-align: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link02 {
              display: none;
              align-self: center;
              margin-top: var(--dl-space-space-halfunit);
              text-align: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link03 {
              color: var(--dl-color-gray-white);
              width: 162px;
              align-self: center;
              text-align: center;
              padding-top: var(--dl-space-space-oneandhalfunits);
              border-radius: var(--dl-radius-radius-radius8);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              background-color: #1a1b29;
            }
            .home-close-mobile-menu {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-icon {
              align-items: center;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              justify-content: center;
            }
            .home-centered {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-logo1 {
              width: var(--dl-size-size-large);
            }
            .home-iframe {
              width: 344px;
              height: 238px;
              margin: var(--dl-space-space-sixunits);
              margin-top: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-container2 {
              height: 73px;
              margin-top: var(--dl-space-space-halfunit);
              align-items: center;
              padding-bottom: 0px;
            }
            .home-text04 {
              color: var(--dl-color-gray-black);
              width: 396px;
              height: 41px;
              font-size: 14px;
              align-self: flex-end;
              font-style: normal;
              font-weight: 700;
              line-height: 20px;
              padding-right: 0px;
            }
            .home-div {
              margin-top: 2px;
              margin-bottom: 2px;
            }
            .home-quote-container {
              margin-top: var(--dl-space-space-halfunit);
            }
            .home-message {
              color: var(--dl-color-gray-black);
            }
            .home-text05 {
              font-size: 18px;
              line-height: 19px;
            }
            .home-text06 {
              font-size: 18px;
              line-height: 19px;
            }
            .home-pricing {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text09 {
              color: var(--dl-color-gray-white);
            }
            .home-text10 {
              color: rgb(238, 233, 254);
              font-size: 19px;
            }
            .home-text12 {
              text-decoration: underline;
            }
            .home-card {
              align-items: center;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text13 {
              font-size: 28px;
              font-style: normal;
              font-weight: 700;
            }
            .home-text14 {
              color: rgb(0, 0, 0);
              font-size: 18px;
              text-align: center;
              line-height: 24px;
            }
            .home-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-top {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-category {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-link09 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .home-link10 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .home-category1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-text20 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-category2 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-links4 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text23 {
              color: var(--dl-color-gray-white);
            }
            .home-text24 {
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

export default Home
