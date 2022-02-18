import React, {useEffect} from "react";
import './main.css'
import Converter from "./Converter";
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/react-fontawesome'

const Main = () => {
    const date = () => {
        const dates = new Date().toDateString()
        return dates
    }
    useEffect(() => {
        date()
    },)
    const dateRefresh = setInterval(date, 1000)

    return (
        <div>
            <section id='' className="bg-header p-3">
                <h1 className='text-center text-white'> 💵 Fast, Free on fly Currency exchanger 💶</h1>
                <hr/>
                <h2 className='text-center text-white'>{date()} ⏲</h2>
            </section>
            <Converter/>
        </div>
    )
}
export default Main
