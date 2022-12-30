NoteAppi toimii siten että ladataan ekana koko tiedosto koneelle ja sitten avataan se visual studio codessa.
ohjelmisto ei lähde käyntiin pelkästään painamalla run codea vaan pitää mennä command promtin kautta tiedostoon NoteApp tai ajaa visualstudio coden terminaalissa huom (tässäkin mentävä NoteApp tiedostoon.), jossa annetaan ensimmäisenä komento npm install.
jos App.jsx tiedosto sisältää " import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom' " niin tarvitsee terminaalissa ajaa komento npm install react-router-dom sekä toisessa componentissa käytetään react-iconia joten npm install react-icons
tämän jälkeen annetaan komento npm run dev ja ohjelma antaa sinulle http osoitteen, jonka laitat omaan verkkoselaimeesi.
(omaa mahdollista käyttöä varten)Ohjelma sisältää myös localStoragen, jos haluaa muistiinpanojen säilyvän tallessa refresh page jälkeen. ei tarvitse muutakuin ottaa kommentit pois. (toivottavasti)


HUOM! OHJELMA EI TOIMI JOS KOMENNOT ANNETAAN \Frontend_lopputyo KANSIOSSA!!! TÄYTYY OLLA \Frontend_lopputyo\NoteApp
Ohjeet lyhyesti ja selkeämmin.
1. avaa ohjelma github desktopissa tai lataa koko tiedosto zippinä omalle koneellesi. 
2. Huom. jumettan/Frontend_lopputyo kansiossa paina vihreää code nappulaa ja valitse sopiva vaihtoehto
3. Kun olet saanut tiedostot koneellesi suunnista kansioon C:\...\Frontend_lopputyo\NoteApp cmd ja anna komento code .
4. jos avasit tiedosto github desktopissa ja sitten visual studio codessa suunnista samaan tiedostoon terminaalissa. ei tarvitse antaa komentoa code .
5. tarkista että olet C:\...\Frontend_lopputyo\NoteApp ja anna seuraavat komennot
npm install
npm install react-router-dom
npm install react-icons
npm run dev
6. sinulla pitäisi näkyä http osoite terminaalissa tai command promtissa riippuen kumpaa käytit.
7. kopioi osoite ja laita se nettiselaimeen.
8. NoteApp pitäisi näin aueta selaimeesi valmiina käyttöön.
