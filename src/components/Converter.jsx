import React, {useEffect, useState} from "react";
import axios from "axios";
import './main.css'
const Converter = () => {
    const [amount, setAmount] = useState('')
    const [currency, setCurrency] = useState([])
    const [base_currency, setBase_currency] = useState('USD')
    const [to, setTo] = useState('')
    const [symbols, setSymbol] = useState('')
    const [som, setSom] = useState("")
    const [result, setResult] = useState('Please select currency and insert amount')
    const keys = Object.keys(currency)
    useEffect(() => {
        axios.get(`https://freecurrencyapi.net/api/v2/latest?apikey=1cca5ee0-90dc-11ec-9a6b-0bf8a328fcf7&base_currency=${base_currency}`)
            .then(res => setCurrency(res.data.data))
    }, [base_currency])
    // console.log(base_currency)

    const handleConvert = (e) => {
        if (to === '' || base_currency === '') {
            setResult('please select currency type')
        } else {

            const resNew = (currency[`${to.toUpperCase()}`] * amount).toFixed(2).toString()
            setResult(resNew)
        }
        prefix()

    }

    function prefix() {
        switch (to) {
            case 'USD':
                return setSymbol('$')
                break
            case 'GBP':
                return setSymbol('£')
                break
            case "EUR":
                return setSymbol('€')
                break
            case "RUB":
                return setSymbol('₽')
                break
            case "UZS":
                return setSom("SO'M")
                break
            default:
                setSymbol('')
                setSom(' Amount')
        }
    }

    return (<div>
            <div className="container p-5 mt-5">
                <h1 className="text-center "><span className='opacity-100'>{amount} </span> <span
                    className='opacity-50'> {amount ? base_currency : ''} {amount ? 'in' : ''}</span> <span
                    className='opacity-100'>{result}</span> <span className='opacity-50'>{to}</span></h1>

            </div>
            <section className="container mt-4  p-3  converter-main">
                <div style={{borderRadius: '35px'}} className="row main-row bg-light ">
                    <div className="col-sm-12">
                        <div className="container  p-2">
                            <label htmlFor="" className='col-form-label'> Amount:</label>
                            <input className="form-control  form-control-lg"
                                   type="number"
                                   min={1}
                                   value={amount}
                                   onChange={e => {
                                       setAmount(e.target.value)
                                       setResult('')

                                   }}
                                   aria-label=".form-control-lg example"/>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="container p-2">
                            <label htmlFor="" className='col-form-label'> From:</label>

                            <select className="form-select "
                                    onChange={event => {
                                        setBase_currency(event.target.value)
                                    }}
                                    aria-label="Default select example">
                                <option value="USD">USD</option>
                                {keys.map(k => (<option key={k} value={k}>{k}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="container p-2">
                            <label htmlFor="" className='col-form-label'> To:</label>
                            <select className="form-select "
                                    onChange={event => {
                                        setTo(event.target.value)
                                    }}
                                    aria-label="Default select example">
                                {keys.map(k => (<option key={k} value={k}>{k}</option>))}
                                <option value="USD">USD</option>

                            </select>
                        </div>
                    </div>
                </div>
            </section>

            <div className='text-center'>
                <button class style={{
                    borderRadius: '100px', backgroundColor: '#370665', padding:'15px 30px'
                }}
                        onClick={e => handleConvert()}
                        className='btn text-center p-3 table-hover fs-2   btn-dark'
                > 🔄 Convert 🔄
                </button>
            </div>

                        <hr/>
            <br/>
            <div className="row ">
                <div className="col-sm-3 d-flex justify-content-center align-items-center ">
                    <a type="button" className="btn w-100 fs-3 btn-primary p-2">
                        1 {base_currency} in UZS <span
                        className="badge bg-secondary">{parseInt(currency['UZS']).toFixed(2)}</span>
                    </a>
                </div>
                <div className="col-sm-3 d-flex justify-content-center align-items-center ">
                    <a type="button" className="btn w-100 fs-3 btn-dark p-2">
                        1 {base_currency} in EURO <span
                        className="badge bg-secondary">{currency['EUR']}</span>
                    </a>
                </div>

                <div className="col-sm-3 d-flex justify-content-center align-items-center ">
                    <a type="button" className="btn  fs-3 btn-danger w-100">
                        1 {base_currency} in GBP <span
                        className="badge bg-secondary">{currency['GBP']}</span>
                    </a>
                </div>

                <div className="col-sm-3 d-flex justify-content-center align-items-center ">
                    <a type="button" className="btn w-100 fs-3 btn-warning p-2">
                        1 {base_currency} in RUBLE <span
                        className="badge bg-secondary">{parseInt(currency['RUB']).toFixed(2)}</span>
                    </a>
                </div>
            </div>
            <br/>
            <hr/>
            <br/>


        </div>)
}
export default Converter
