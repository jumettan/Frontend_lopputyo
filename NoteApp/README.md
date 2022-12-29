NoteAppi toimii siten että ladataan ekana koko tiedosto koneelle ja sitten avataan se visual studio codessa.
ohjelmisto ei lähde käyntiin pelkästään painamalla run codea vaan pitää mennä command promtin kautta tiedostoon NoteApp tai ajaa visualstudio coden terminaalissa huom (tässäkin mentävä NoteApp tiedostoon.), jossa annetaan ensimmäisenä komento npm install.
jos App.jsx tiedosto sisältää " import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom' " niin tarvitsee terminaalissa ajaa komento npm install react-router-dom sekä toisessa componentissa käytetään react-iconia joten npm install react-icons
tämän jälkeen annetaan komento npm run dev ja ohjelma antaa sinulle http osoitteen, jonka laitat omaan verkkoselaimeesi.
(omaa mahdollista käyttöä varten)Ohjelma sisältää myös localStoragen, jos haluaa muistiinpanojen säilyvän tallessa refresh page jälkeen. ei tarvitse muutakuin ottaa kommentit pois. (toivottavasti)


HUOM! OHJELMA EI TOIMI JOS KOMENNOT ANNETAAN \Frontend_lopputyo KANSIOSSA!!! TÄYTYY OLLA \Frontend_lopputyo\NoteApp
