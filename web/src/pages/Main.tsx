import React, { useEffect, useRef } from 'react'
import { useTheme } from '@mui/material/styles'
import { Box, Container, IconButton, Link, Stack, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const Main = () => {
  const location = useLocation()

  const homeRef = useRef(null)
  const workRef = useRef(null)
  const climbingRef = useRef(null)

  const hashMap = {
    '': homeRef,
    '#work': workRef,
    '#climbing': climbingRef,
  }

  useEffect(() => {
    const hash = location.hash
    const ref = (hashMap as any)[hash]
    console.log(ref)
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }, [location])

  return (
    <Stack spacing={0}>
      <Container maxWidth="md" sx={{ height: '100vh', padding: '32px' }} ref={homeRef}>
        <Stack spacing={3} sx={{ marginTop: '20vh' }}>
          <Typography variant="h4">Hi, I'm Ellen.</Typography>
          <Typography variant="body1">
            I'm a software engineer, climber and mountaineer based out of the SF Bay Area,
            California.
          </Typography>
          <Link href="#work">
            <KeyboardArrowDownIcon fontSize="large" />
          </Link>
        </Stack>
      </Container>
      <Container maxWidth="md" sx={{ height: '100vh', padding: '32px' }} ref={workRef}>
        <Stack spacing={3} sx={{ marginTop: '20vh' }}>
          <Typography variant="h4" sx={{ marginBottom: '8px' }}>
            Work
          </Typography>
          <Typography variant="body1">
            I currently work as a Senior Software Engineer at Robinhood. I build large-scale systems
            for dynamic configuration and experimentation. Previously I have interned at Meta,
            Airbnb and Kloudless.
          </Typography>
          <Typography variant="body1">
            I researched with Berkeley RISELab on{' '}
            <Link
              href="https://www.usenix.org/conference/osdi20/presentation/dauterman-dory"
              target="_blank"
              rel="noreferrer"
            >
              DORY
            </Link>
            , an encrypted search system with distributed trust.
          </Typography>
          <Typography variant="body1">
            Here is my{' '}
            <Link href="/assets/resume.pdf" target="_blank" rel="noreferrer">
              resume
            </Link>{' '}
            and my{' '}
            <Link href="https://www.linkedin.com/in/ellenluo/" target="_blank" rel="noreferrer">
              LinkedIn profile
            </Link>
            . I am currently not looking for new opportunities, but my email inbox is always open!
          </Typography>
        </Stack>
      </Container>
      <Container maxWidth="md" sx={{ height: '100vh', padding: '32px' }} ref={climbingRef}>
        <Stack spacing={3} sx={{ marginTop: '20vh' }}>
          <Typography variant="h4" sx={{ marginBottom: '8px' }}>
            Climbing
          </Typography>
          <Typography variant="body1">
            I spend most of my free time rock climbing. I do bouldering, sport climbing and
            trad/alpine climbing. Some of my favorite areas include Yosemite, Red Rock Canyon and
            Lake Tahoe. I log my adventures on my{' '}
            <Link
              href="https://www.mountainproject.com/user/200439642/ellen-luo"
              target="_blank"
              rel="noreferrer"
            >
              Mountain Project
            </Link>{' '}
            profile.
          </Typography>
          <Typography variant="body1">
            I also spend time climbing mountains. I have summited the Matterhorn, Mt Rainier, Mt
            Baker, Mt Adams and Mt Shasta, all unguided. I hope to dive more into
            splitboard-mountaineering and ice climbing in the future.
          </Typography>
          <Typography variant="body1">
            Photos of my climbing adventures can be found on my{' '}
            <Link href="https://www.instagram.com/ellenn_luo/" target="_blank" rel="noreferrer">
              Instagram
            </Link>
            . I have also recently started to write trip reports. You can find them here.
          </Typography>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Main
