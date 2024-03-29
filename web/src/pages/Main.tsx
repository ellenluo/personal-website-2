import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import {
  Box,
  Container,
  IconButton,
  ImageList,
  ImageListItem,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import { Element } from 'react-scroll'

import { scrollTo } from '../utils'

import styles from './Main.module.css'

type Props = {
  setActivePage: (page: string) => {}
}

type ArrowButtonProps = {
  targetPage: string
  up: boolean
}

const Main = ({ setActivePage }: Props) => {
  const ArrowButton = ({ targetPage, up }: ArrowButtonProps) => (
    <Box>
      <IconButton
        color="info"
        edge="start"
        disableRipple
        onClick={() => {
          scrollTo(targetPage)
          setActivePage(targetPage)
        }}
      >
        {up ? <KeyboardArrowUpIcon fontSize="large" /> : <KeyboardArrowDownIcon fontSize="large" />}
      </IconButton>
    </Box>
  )

  return (
    <Stack spacing={0}>
      <Element name="home">
        <Container maxWidth="md" sx={{ height: '100vh', padding: '32px' }}>
          <Stack spacing={3} sx={{ marginTop: '20vh' }}>
            <div className={styles.fade_title}>
              <Typography className="fade-in" variant="h4">
                Hi, I'm Ellen.
              </Typography>
            </div>
            <div className={styles.fade_body}>
              <Typography variant="body1">
                I'm a software engineer, climber and mountaineer based out of the SF Bay Area,
                California.
              </Typography>
            </div>
            <div className={styles.fade_images}>
              <ImageList cols={3}>
                <ImageListItem>
                  <img src="/assets/scarface.jpg" />
                </ImageListItem>
                <ImageListItem>
                  <img src="/assets/professional.jpg" />
                </ImageListItem>
                <ImageListItem>
                  <img src="/assets/lassen.jpg" />
                </ImageListItem>
              </ImageList>
            </div>
            <div className={styles.fade_arrow}>
              <ArrowButton targetPage="work" up={false} />
            </div>
          </Stack>
        </Container>
      </Element>
      <Element name="work">
        <Container maxWidth="md" sx={{ height: '100vh', padding: '32px' }}>
          <Stack spacing={3} sx={{ marginTop: '20vh' }}>
            <Typography variant="h4" sx={{ marginBottom: '8px' }}>
              Work
            </Typography>
            <Typography variant="body1">
              I currently work as a Senior Software Engineer at Robinhood. I help build and maintain
              large-scale systems for both dynamic configuration and experimentation. Previously I
              interned at Meta, Airbnb and Kloudless while studying EECS at UC Berkeley.
            </Typography>
            <Typography variant="body1">
              I researched with UC Berkeley RISELab on{' '}
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
              . I am currently not looking for new opportunities, but my{' '}
              <Link href="mailto:ellenyilan.luo@gmail.com" target="_blank" rel="noreferrer">
                email
              </Link>{' '}
              inbox is always open!
            </Typography>
            <Stack direction="row">
              <ArrowButton targetPage="home" up />
              <ArrowButton targetPage="climbing" up={false} />
            </Stack>
          </Stack>
        </Container>
      </Element>
      <Element name="climbing">
        <Container maxWidth="md" sx={{ height: '100vh', padding: '32px' }}>
          <Stack spacing={3} sx={{ marginTop: '20vh' }}>
            <Typography variant="h4" sx={{ marginBottom: '8px' }}>
              Climbing
            </Typography>
            <Typography variant="body1">
              I spend most of my free time rock climbing. I enjoy all types of climbing: boulder,
              sport, trad/traditional and alpine. Some of my favorite areas include Yosemite, Red
              Rock Canyon and Lake Tahoe. I log most of my adventures on my{' '}
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
              I also spend time climbing and exploring mountains. Some of my favorite places include
              the prominent, glaciated volcanoes of the Cascades, and the awe-inspiring granite
              peaks of the Sierras. I hope to dive more into splitboard-mountaineering and ice
              climbing in the future.
            </Typography>
            <Typography variant="body1">
              Photos of my climbing adventures can be found on my{' '}
              <Link href="https://www.instagram.com/ellenn_luo/" target="_blank" rel="noreferrer">
                Instagram
              </Link>
              .
            </Typography>
            <ArrowButton targetPage="work" up />
          </Stack>
        </Container>
      </Element>
    </Stack>
  )
}

export default Main
