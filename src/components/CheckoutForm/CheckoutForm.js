import './CheckoutForm.css'
import { useState } from 'react'

const CheckoutForm = ({onConfirm}) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    } 

    return (
        <div className="checkoutform">
            <h1>Checkout Form aqui</h1>
            <form onSubmit={handleConfirm}>
                <label className='label'>
                    Nombre
                    <input type='text' className='input' value={name} onChange= {({ target }) => setName(target.value)}></input>
                </label>
                <label className='label'>
                    Teléfono
                    <input type='text' className='input' value={phone} onChange= {({ target }) => setPhone(target.value)}></input>
                </label>
                <label className='label'>
                    Email
                    <input type='text' className='input' value={email} onChange= {({ target }) => setEmail(target.value)}></input>
                </label>
                <div className='label'>
                    <button className='button' type='submit'>Crear orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm