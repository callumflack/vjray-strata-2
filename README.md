# vjray-strata-2

This is a working attempt to setup a design system using Next.js + styled-components + Rebass.

The example: https://vj-ray-client-prmitercdg.now.sh/

In the original VJ Ray Strata project, we couldn't import the 'styled-system' library *and* have the styles render on deployment. Seems this rebuild on a small use case works.

You will notice, however, that the display font _did not render_. The styled-component classes are there and all styles render, except the font file itself is not part of the SSR bundle.

*So my question for you is, how can it be made to part of the bundle?*

The answer probably lies in the fact I've assigned the display font to the headline styled-components… Works locally!

To run locally:
$ npm i
then $ npm run dev
