import '../styles/global.css'

const App = ({Component, pageProps}) => {
    return <Component {...pageProps}/>
}
export default App
// top level component that wraps all other pages in this.
// Useful for maintaining state when navigating pages or 
// adding global styles 