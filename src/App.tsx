import { useSelector } from 'react-redux'
import type { RootState } from './store/store'
import './App.css'
import Section from './components/section'

function App() {

    const isDark = useSelector((state: RootState) => state.darkMode.isDark)
    return (
        <div className={`${isDark? "bg-[hsl(235,21%,11%)]" : "bg-[hsl(234,39%,85%)]"} relative w-screen h-screen flex items-center justify-center`}>
            <div className={`${isDark? "bg-[url('/bg-desktop-dark.jpg')]" : "bg-[url('/bg-desktop-light.jpg')]"} absolute z-0 top-0 left-0 w-full h-[40%] bg-cover bg-center bg-no-repeat`}></div>

            <Section></Section>
        </div>


    )
}

export default App
