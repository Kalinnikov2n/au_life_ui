import anya1 from '../assets/images/memoji/anya1.png'
import arkadi1 from '../assets/images/memoji/arkadi1.png'
import blm1 from '../assets/images/memoji/blm1.png'
import kalina1 from '../assets/images/memoji/kalina1.png'
import manya1 from '../assets/images/memoji/manya1.png'
import masha1 from '../assets/images/memoji/masha1.png'
import mitay1 from '../assets/images/memoji/mitay1.png'
import nikita1 from '../assets/images/memoji/nikita1.png'
import pesok1 from '../assets/images/memoji/pesok1.png'
import petya1 from '../assets/images/memoji/petya1.png'
import stasya1 from '../assets/images/memoji/stasya1.png'
import vlad1 from '../assets/images/memoji/vlad1.png'
import vlad2 from '../assets/images/memoji/vlad2.png'
import zgdan1 from '../assets/images/memoji/zgdan1.png'
import zlata1 from '../assets/images/memoji/zlata1.png'

export const memojiConfig = [
  {
    name: 'anya1',
    src: anya1,
  },
  {
    name: 'arkadi1',
    src: arkadi1,
  },
  {
    name: 'blm1',
    src: blm1,
  },
  {
    name: 'kalina1',
    src: kalina1,
  },
  {
    name: 'manya1',
    src: manya1,
  },
  {
    name: 'masha1',
    src: masha1,
  },
  {
    name: 'mitay1',
    src: mitay1,
  },
  {
    name: 'nikita1',
    src: nikita1,
  },
  {
    name: 'pesok1',
    src: pesok1,
  },
  {
    name: 'petya1',
    src: petya1,
  },
  {
    name: 'stasya1',
    src: stasya1,
  },
  {
    name: 'vlad1',
    src: vlad1,
  },
  {
    name: 'vlad2',
    src: vlad2,
  },
  {
    name: 'zgdan1',
    src: zgdan1,
  },
  {
    name: 'zlata1',
    src: zlata1,
  },
]
export const getImg = (name: string) => memojiConfig.filter(el => el.name === name)?.[0]?.src
