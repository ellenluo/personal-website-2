import { scroller } from 'react-scroll'

export const scrollTo = (element: string) =>
  scroller.scrollTo(element, {
    duration: 1600,
    delay: 100,
    smooth: true,
  })
