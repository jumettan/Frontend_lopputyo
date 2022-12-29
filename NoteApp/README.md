NoteAppi toimii siten että ladataan ekana koko tiedosto koneelle ja sitten avataan se visual studio codessa.
ohjelmisto ei lähde käyntiin pelkästään painamalla run codea vaan pitää mennä command promtin kautta tiedostoon NoteApp, jossa annetaan ensimmäisenä komento npm install.
tämän jälkeen annetaan komento npm run dev ja ohjelma antaa sinulle http osoitteen, jonka laitat omaan verkkoselaimeesi.
jos App.jsx tiedosto sisältää " import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom' " nii tarvitsee terminaalissa ajaa komento npm install react-router-dom sekä npm install react-icons
