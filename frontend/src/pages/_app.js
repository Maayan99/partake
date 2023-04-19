import '@components/styles/globals.css'
import '@components/components/cards/smallChallengeCard/smallChallengeCard.css';



import Header from "@components/layout/header/header";
import Footer from "@components/layout/footer/footer";
import Nav from "@components/layout/nav/nav";


export default function App({ Component, pageProps }) {
  return (
      <>
        <Header/>
        <Nav/>
        <Component {...pageProps} />
        <Footer/>
      </>)
}
