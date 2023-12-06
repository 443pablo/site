import { Box, Container, Flex, Grid, Heading, Text } from 'theme-ui'
import Footer from '../components/footer'
import Nav from '../components/nav'
import Meta from '@hackclub/meta'
import Head from 'next/head'
import BGImg from '../components/background-image'
import OuternetImgFile from '../public/home/outernet-110.jpg'
import Sinerider from '../components/index/cards/sinerider'
import Angelhacks from '../components/index/cards/angelhacks'
import Winter from '../components/index/cards/winter'

function Card({ card, title, date, number, description, affect }) {
  return (
    <Box>
      {card}
      <Box sx={{ mx: 3 }}>
        <Text as="p" sx={{ fontWeight: 'bold' }}>
          {title}{' '}
          <Text sx={{ fontWeight: 'normal', color: '#8492a6' }}>
            — {date}, {affect || 'Used'} by {number} teenagers
          </Text>
        </Text>
        <Text as="p">{description}</Text>
      </Box>
    </Box>
  )
}

// This is just an initial sorta concept thingy!
// TODO:
// - Edit cards to not include things like "Sign up" or "Happening now, etc
// - Improve design
// - Change card copy
// - Find actual numbers

export default function Archive() {
  return (
    <div>
      <Meta
        as={Head}
        title="Hack Club Archive"
        description="An archive of Hack Club's awesome projects."
        image="" // TODO: replace
      />
      <Nav />
      <Box
        sx={{
          py: [5, 6],
          background: "rgba(0,0,0,0.45)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <BGImg
            src={OuternetImgFile}
            alt="Hack Clubbers coming together at Outernet"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Container>
          <Heading
            as="h1"
            sx={{
              fontSize: ["48px", "48px", "72px"],
              color: "white",
              textShadow: "elevated",
            }}
          >
            Hack Club Archive
          </Heading>
          <Heading
            sx={{
              color: "smoke",
              mt: 3,
              fontSize: ["18px", "24px"],
              lineHeight: ["1.5", "1.325"],
              maxWidth: "900px",
              margin: "auto",
              fontWeight: 400,
              textShadow: "small",
            }}
          >
            We&apos;ve dome some pretty awesome things. Take a look here!
          </Heading>
        </Container>
      </Box>
      <Flex
        sx={{
          width: "90vw",
          maxWidth: "layout",
          margin: "auto",
          position: "relative",
          mb: "5rem",
          gap: "5vh",
        }}
      >
        <Box sx={{ borderRadius: '100px', border: '5px', padding: '4px', backgroundColor: '#D9D9D9' }} />
        <Grid
          sx={{
            flexDirection: ["column", "column", "column", "row"],
            alignItems: ["flex-start", "flex-start", "flex-start", "center"],
            gap: "10px",
          }}
        >
          <Box>
            <Card
              card={<Angelhacks />}
              title="AngelHacks"
              date="2023"
              number="150"
              affect="Attended"
              description="AngelHacks is a hackathon where you build a project in 24 hours. It was created by Zach Latta and Max Wofford in 2014 and has been attended by over 5,000 people. (This was generated by Copilot lol.)"
            />
            <Card
              card={<Winter />}
              title="Winter"
              date="2022"
              number="500"
              description="Winter is a hardware hackathon where you build a project in 24 hours. It was created by Zach Latta and Max Wofford in 2014 and has been attended by over 500 people. (This was generated by Copilot lol.)"
            />
            <Card
              card={<Sinerider delay={200} />}
              title="SineRider"
              date="2019"
              number="20"
              affect="Created"
              description="SineRider is a game where you draw a sine wave to control a bike across a landscape. It was created by Zach Latta and Max Wofford in 2014 and has been played by over 1,000 people. (This was generated by Copilot lol.)"
            />
          </Box>
        </Grid>
      </Flex>
      <Footer />
    </div>
  );
}
