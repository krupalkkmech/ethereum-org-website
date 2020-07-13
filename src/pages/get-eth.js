import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import ActionCard from "../components/ActionCard"
import Callout from "../components/Callout"
import Card from "../components/Card"
import Link from "../components/Link"
import Button from "../components/Button"
import PageMetadata from "../components/PageMetadata"
import CalloutBanner from "../components/CalloutBanner"
import { Twemoji } from "react-emoji-render"

const Emoji = styled(Twemoji)`
  margin-right: 1rem;
  & > img {
    width: 1.5em !important;
    height: 1.5em !important;
  }
`

const InfoBanner = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  align-items: center;
  background: #f8f8fe;
  border-radius: 4px;
  margin-top: 2rem;
  border: 1px solid #a4a4f3;
`

const InfoLink = styled(Link)`
  margin-left: 1rem;
`

const InfoCopy = styled.p`
  margin-bottom: 0px;
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin: 4rem auto 0;
`

const Content = styled.div`
  padding: 1rem 2rem;
  width: 100%;
`

const Hero = styled(Img)`
  flex: 1 1 100%;
  max-width: 800px;
  background-size: cover;
  background-repeat: no-repeat;
`

const HeroContent = styled(Content)`
  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    padding: 1rem 2rem 2rem;
  }
`

const Slogan = styled.p`
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: 32px;
  line-height: 140%;
`

const Title = styled.h1`
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textSidebar};
`

const Subtitle = styled.div`
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  color: ${(props) => props.theme.colors.text200};
`
const SubtitleTwo = styled.div`
  font-size: 20px;
  line-height: 140%;
  margin-bottom: 2rem;
  text-align: center;
  color: ${(props) => props.theme.colors.text300};
`

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: column-reverse;
  }
`

const Header = styled.header`
  margin-top: 6rem;
  text-align: center;
`

const GrayContainer = styled.div`
  padding: -2rem 2rem;
  background: ${(props) => props.theme.colors.grayBackground};
  box-shadow: inset 0px -1px 0px ${(props) => props.theme.colors.tableItemBoxShadow};
`

const Intro = styled.div`
  max-width: 608px;
  margin-bottom: 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin-bottom: 3rem;
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0rem 2rem;
`

const ActionCardContainer = styled(CardContainer)`
  justify-content: center;
  margin-bottom: 3rem;
`

const StyledCard = styled(Card)`
  flex: 1 1 30%;
  min-width: 240px;
  margin: 1rem;
  padding: 1.5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex: 1 1 30%;
  }
`

const Banner = styled(Img)`
  opacity: 0.3;
  width: 100%;
  height: 400px;
`

const Image = styled(Img)`
  width: 100%;
  height: 100%;
`

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 4rem;
`

const BannerMessage = styled.h2`
  position: absolute;
  width: 100%;
  padding: 0.5rem;
  top: 30%;
  text-align: center;
  font-size: 48px;
  line-height: 140%;
  color: ${(props) => props.theme.colors.text};
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 32px;
    top: 35%;
  }
`

const Divider = styled.div`
  margin-bottom: 4rem;
  width: 10%;
  height: 0.25rem;
  background-color: ${(props) => props.theme.colors.homeDivider};
`

const ActionIntro = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`

const TwoColumnContent = styled(Content)`
  display: flex;
  align-items: center;
  padding: 2rem 3rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Column = styled.div`
  flex: 0 0 50%;
  max-width: 75%;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    max-width: 100%;
  }
  margin-bottom: 1.5rem;
`

const CardColumn = styled.div`
  flex: 0 1 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-bottom: 3rem;
`

const GradientContainer = styled.div`
  background: radial-gradient(
    46.28% 66.31% at 66.95% 58.35%,
    rgba(127, 127, 213, 0.2) 0%,
    rgba(134, 168, 231, 0.2) 50%,
    rgba(145, 234, 228, 0.2) 100%
  );
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  margin: 4rem 4rem;
`

const SingleCard = styled(StyledCard)`
  max-width: 420px;
  min-width: 320px;
  margin: 0;
  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-right: 7rem;
    margin-left: 7rem;
  }
  /* TODO remove once global link styles are updated */
  a {
    text-decoration: underline;
  }
`

const StyledCallout = styled(Callout)`
  flex: 1 1 424px;
  min-height: 100%;
`

const CodeBox = styled.div`
  background: #191919;
  border-radius: 4px;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
`

const Code = styled.p`
  font-family: monospace;
  color: #ffffff;
  margin-bottom: 0rem;
`

const GetETHPage = ({ data }) => {
  return (
    <Page>
      <PageMetadata
        title="Get ETH"
        description="How to get ETH based on where you live and some advice on how to look after it"
      />

      <HeroContainer>
        <Header>
          <Title>BREADCRUMB</Title>
          <Slogan>Where to buy ETH</Slogan>
          <Subtitle>
            You can buy ETH from exchanges or from wallets directly.
          </Subtitle>
          <SubtitleTwo>
            {" "}
            Check which services you can use based on where you live.
          </SubtitleTwo>
          <Button to="/get-eth/#country-picker">Search by country</Button>
        </Header>
      </HeroContainer>
      <CardContainer>
        <StyledCard
          emoji=":office_building:"
          title="Financial exchanges"
          description="Exchanges are businesses that let you buy crypto through a centralized marketplace. They have custody over any ETH you buy until you send it to a wallet you own."
        />
        <StyledCard
          emoji=":busts_in_silhouette:"
          title="Decentralized exchanges (DEXs)"
          description="If you want more control, buy ETH peer-to-peer. With a DEX, no centralized company ever stores your funds."
        >
          <Link to="/get-eth/#dex">Try a Dex</Link>
        </StyledCard>
        <StyledCard
          emoji=":robot:"
          title="Wallets"
          description="Some wallets let you buy crypto with a debit/credit card, bank transfer or even apple pay. Geographical restrictions apply."
        >
          <Link to="/wallets">More on wallets</Link>
        </StyledCard>
      </CardContainer>
      <InfoBanner>
        <Emoji svg text=":wave:" />
        <InfoCopy>New to ETH? Here's an overview to get you started.</InfoCopy>
        <InfoLink to="/eth">What's ETH?</InfoLink>
      </InfoBanner>
      <GradientContainer id="country-picker">
        <h2>What country do you live in?</h2>
      </GradientContainer>
      <TwoColumnContent id="dex">
        <Column>
          <h2>Decentralized exchanges</h2>
          <p>
            Decentralized exchanges are open marketplaces for ETH and other
            tokens.
          </p>
          <p>
            There are no geographical restrictions. If someone is selling what
            you want and accepting a payment method you can provide, you’re good
            to go. Some example payments include other tokens, paypal and even
            in-person cash deliveries.
          </p>
          <p>You will need a wallet to use a DEX.</p>
          <Button to="/wallets">Get a wallet</Button>
        </Column>
        <CardColumn>
          <SingleCard
            emoji=":gear:"
            title="Localcryptos.com"
            description="Accepts a wide range of payment types"
          >
            <Link to="https://localcryptos.com">Try Localcryptos</Link>
          </SingleCard>
        </CardColumn>
      </TwoColumnContent>
      <TwoColumnContent>
        <Image fluid={data.image.childImageSharp.fluid} />
        <Column>
          <h2>Keeping your ETH safe</h2>
          <p>
            The supply of ETH isn’t controlled by any government or company - it
            is decentralized. This is great because it means it’s open to
            everyone.{" "}
          </p>
          <p>
            This means you need to take the security of your funds seriously.
            With ETH, you’re not trusting a bank to look after your money,
            you’re trusting yourself.
          </p>
          <h3>Protect your ETH in a wallet</h3>
          <p>
            You should keep your ETH in a wallet you control, not an exchange.
            This helps keep your funds safe because only you can access it. If
            you leave it in an exchange account and that exchange is hacked, you
            could lose your funds.{" "}
          </p>
          <h3>Your public address</h3>
          <p>Your wallet should have a public address that looks like this:</p>
          <CodeBox>
            <Code>
              0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A
            </Code>
          </CodeBox>
          <p>
            You should be able to send your ETH from the exchange to your wallet
            using this address. Copy it carefully and double check before you
            send!
          </p>
          <h3>Follow wallet instructions</h3>
          <p>
            If you lose access to your wallet, you’ll lose access to your funds.
            Your wallet should give you instructions on protecting against this.
            Be sure to follow them carefully – in most cases, no one can help
            you if you lose access to your wallet.{" "}
          </p>
        </Column>
      </TwoColumnContent>
      <Divider />
      <CalloutBanner
        title="Use your ETH"
        description="Now that you own some ETH, check out the Ethereum applications (dapps) that are out there. There’s apps for finance, social media, gaming and lots of other categories."
        image={data.dapps.childImageSharp.fluid}
      >
        <div>
          <Button to="/dapps">Check out dapps</Button>
        </div>
      </CalloutBanner>
    </Page>
  )
}

export default GetETHPage

export const calloutBannerImage = graphql`
  fragment calloutBannerImage on File {
    childImageSharp {
      fluid(maxHeight: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    image: file(relativePath: { eq: "wallet.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dapps: file(relativePath: { eq: "home/doge_computer.png" }) {
      ...calloutBannerImage
    }
  }
`
