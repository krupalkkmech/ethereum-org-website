import React, { useState, useEffect } from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"

import { languageMetadata } from "../utils/translations"
import { Mixins } from "../components/Theme"
import PageMetadata from "../components/PageMetadata"
import Translation from "../components/Translation"
import Link from "../components/Link"
import { PageContainer, FakeLink } from "../components/SharedStyledComponents"

import axios from "axios"

const ContentContainer = styled.div`
  max-width: ${(props) => props.theme.breakpoints.m};
`

const LangContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
`

const LangItem = styled(GatsbyLink)`
  text-decoration: none;
  margin: 1rem 1rem 1rem 0;
  padding: 1rem;
  flex: 0 1 260px;
  list-style: none;
  border-radius: 0.5rem;
  width: 100%;
  border: 1px dotted ${(props) => props.theme.colors.lightBorder};
  box-shadow: 0 1px 4px ${(props) => props.theme.colors.boxShadow};
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: ${(props) => props.theme.colors.text};

  &:hover {
    box-shadow: 0 4px 8px ${(props) => props.theme.colors.boxShadowHover};
    border: 1px dotted ${(props) => props.theme.colors.primary};
  }
`

const LangTitle = styled.div`
  ${Mixins.textLevel6}
`

const LanguagesPage = () => {
  const intl = useIntl()
  const [translationsInProgress, setTranslationsInProgress] = useState([])

  let translationsCompleted = []
  for (const lang in languageMetadata) {
    const langMetadata = languageMetadata[lang]
    langMetadata["path"] = `/${lang}/`
    translationsCompleted.push(languageMetadata[lang])
  }
  translationsCompleted.sort((a, b) =>
    a["language-english"].localeCompare(b["language-english"])
  )

  useEffect(() => {
    axios
      .get("/.netlify/functions/translations")
      .then((response) => {
        let languages = []
        if (response.data && response.data.data) {
          languages = response.data.data
        }
        languages.sort((a, b) => a.name.localeCompare(b.name))
        setTranslationsInProgress(languages)
      })
      .catch((error) => {
        // TODO add toast message on fails
        console.error(error)
      })
  }, [])

  return (
    <PageContainer>
      <PageMetadata
        title={intl.formatMessage({ id: "page-translations-meta-title" })}
        description={intl.formatMessage({ id: "page-translations-meta-desc" })}
      />
      <ContentContainer>
        <h1>
          <Translation id="page-translations-h1" />
        </h1>
        <p>
          <Translation id="page-translations-p1" />
        </p>
        <p>
          <Translation id="page-translations-interested" />{" "}
          <a href="#ethereum-org-translation-program">
            <Translation id="page-translations-learn-more" />
          </a>
        </p>
        <h2>
          <Translation id="page-translations-translations-available" />:
        </h2>
      </ContentContainer>

      <LangContainer>
        {translationsCompleted.map((lang) => {
          return (
            <LangItem to={lang.path} key={lang["language-english"]}>
              <LangTitle>{lang["language-english"]}</LangTitle>
              <h4>{lang.language}</h4>
            </LangItem>
          )
        })}
      </LangContainer>

      <ContentContainer>
        <h2 id="ethereum-org-translation-program">
          <Translation id="page-translations-program" />
        </h2>
        <p>
          <Translation id="page-translations-program-intro" />
        </p>
        <ol>
          <li>
            <Translation id="page-translations-program-follow" />{" "}
            <Link to="https://crowdin.com/project/ethereumfoundation/invite">
              <Translation id="page-translations-program-invite" />
            </Link>{" "}
            <Translation id="page-translations-program-join" />.
            <ul>
              <li>
                <Translation id="page-translations-program-account" />{" "}
                <Link to="https://support.crowdin.com/online-editor/">
                  <Translation id="page-translations-program-docs" />
                </Link>
                .
              </li>
            </ul>
          </li>
          <li>
            <Translation id="page-translations-program-find" />{" "}
            <Link to="https://github.com/ethereum/ethereum-org-website/issues/new/choose">
              <Translation id="page-translations-program-issue" />
            </Link>
            .
            <ul>
              <li>
                <Translation id="page-translations-program-version" />{" "}
                <Link to="https://crowdin.com/project/ethereumfoundation/fil#">
                  <Translation id="page-translations-program-filipino" />
                </Link>{" "}
                <Translation id="page-translations-program-version-two" />.
              </li>
            </ul>
          </li>
          <li>
            <Translation id="page-translations-program-complete" />
          </li>
        </ol>
        <p>
          <Translation id="page-translations-program-question" />{" "}
          <Link to="https://crowdin.com/project/ethereumfoundation/fil#">
            <Translation id="page-translations-program-discord" />
          </Link>{" "}
          <Translation id="page-translations-program-channel" />.
        </p>
        <p>
          <Translation id="page-translations-program-participate" />.
        </p>
        <h2>
          <Translation id="page-translations-translations-in-progress" />:
        </h2>
      </ContentContainer>

      <LangContainer>
        {translationsInProgress.map((lang) => {
          const url = `https://crowdin.com/project/ethereumfoundation/${lang.code}`
          return (
            <LangItem to={url} key={lang.code}>
              <h4>{lang.name}</h4>
              <div>
                <Translation id="page-translations-translation-progress" />:{" "}
                {lang.translated_progress}%
              </div>
              <div>
                <Translation id="page-translations-review-progress" />:{" "}
                {lang.approved_progress}%
              </div>
              <FakeLink>
                <Translation id="page-translations-contribute" />
              </FakeLink>
            </LangItem>
          )
        })}
      </LangContainer>
    </PageContainer>
  )
}

export default LanguagesPage
