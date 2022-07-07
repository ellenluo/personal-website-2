import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Box, Container, Stack, Typography } from '@mui/material'

const Main = () => {
  const theme = useTheme()
  return (
    <Stack spacing={0}>
      <Container maxWidth="md" sx={{ height: '100vh', padding: '32px' }}>
        <Stack spacing={3} sx={{ marginTop: '20vh' }}>
          <Typography variant="h4">Hi, I'm Ellen.</Typography>
          <Typography variant="body1">
            I'm a software engineer, climber and mountaineer based out of the SF Bay Area,
            California.
          </Typography>
        </Stack>
      </Container>
      <Container maxWidth="md" sx={{ height: '100vh', padding: '32px' }}>
        <Stack spacing={3} sx={{ marginTop: '20vh' }}>
          <Typography variant="h4" sx={{ marginBottom: '8px' }}>
            Work
          </Typography>
          <Typography variant="body1">
            I currently work as a software engineer at Robinhood. I work with large-scale systems on
            dynamic configuration and experimentation. Previously I have interned at Meta, Airbnb
            and Kloudless.
          </Typography>
          <Typography variant="body1">
            I researched with Berkeley RISELab on DORY, an encrypted search system with distributed
            trust.
          </Typography>
          <Typography variant="body1">
            Some of my past personal projects include LoL Match Predictor, Petreon, MinimaList,
            DreamPainter, Simple Weather and this website.
          </Typography>
          <Typography variant="body1">
            Here is my resume and my LinkedIn profile. I am currently not looking for new
            opportunities, but my email inbox is always open!
          </Typography>
        </Stack>
      </Container>
      <Container maxWidth="md" sx={{ height: '100vh', padding: '32px' }}>
        <Stack spacing={3} sx={{ marginTop: '20vh' }}>
          <Typography variant="h4" sx={{ marginBottom: '8px' }}>
            Climbing
          </Typography>
          <Typography variant="body1">
            I spend most of my free time rock climbing. I do bouldering, sport climbing and
            trad/alpine climbing. Some of my favorite areas include Yosemite, Red Rock Canyon and
            Lake Tahoe. All my climbing is ticked on my Mountain Project profile.
          </Typography>
          <Typography variant="body1">
            I also spend time climbing in the snow. I have summited Mt Rainier, Mt Baker, Mt Adams
            and Mt Shasta, all unguided. I hope to dive more into splitboard-mountaineering and ice
            climbing in the future.
          </Typography>
          <Typography variant="body1">
            My climbing adventures are well-documented on my Instagram. I have also recently started
            to write trip reports. You can find them here.
          </Typography>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Main
