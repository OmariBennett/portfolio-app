import { css } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}
// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }`

  return acc
}, {})

  /* Now we have our methods on media and can use them instead of raw queries */
// ${media.desktop`background: dodgerblue;`}
// ${media.tablet`background: mediumseagreen;`}
// ${media.phone`background: palevioletred;`}

export default media;