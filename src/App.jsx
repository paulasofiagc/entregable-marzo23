import { useState } from 'react'
import { Card } from './Components/Card'
import './styles/index.css'

function App() {
    const [nombre, setNombre] = useState('')
    const [color, setColor] = useState('')
    const [mostrarCard, setMostrarCard] = useState(false)
    const [mensaje, setMensaje] = useState(false)

    const onChangeNombre = e => setNombre(e.target.value)
    const onChangecolor = e => setColor(e.target.value)

    const espacioEnBlanco = texto => {
        let regex = /^\S/
        return regex.test(texto)
    }

    const isValidNombre = name => {
        const valid = name.trim().length > 2 ? true : false
        return valid
    }
    const isValidcolor = color => {
        const valid = color.trim().length > 5 ? true : false
        return valid
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (
            isValidNombre(nombre) &&
            espacioEnBlanco(nombre) &&
            isValidcolor(color)
        ) {
            setMostrarCard(true)
            setMensaje(false)
        } else {
            setMostrarCard(false)
            setMensaje(true)
        }
    }
    return (
        <>
            <div className="app">
                <h1 className="title">Parcial de Front </h1>
                <form onSubmit={handleSubmit} className="form-color">
                    <label htmlFor="">Nombre</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={onChangeNombre}
                    ></input>
                    <label htmlFor="">color</label>
                    <input
                        placeholder="Ejemplo: #ff0000"
                        type="text"
                        value={color}
                        onChange={onChangecolor}
                    ></input>
                    <button type="submit">Enviar</button>
                </form>
                {mensaje && (
                    <p style={{ color: 'red' }}>
                        Por favor chequea que la información sea correcta
                    </p>
                )}
                {mostrarCard && <Card nombre={nombre} color={color} />}
                {mostrarCard && isValidcolor(color) && (
                    <div
                        style={{
                            backgroundColor: color,
                            width: '100px',
                            height: '100px',
                            marginTop: '20px',
                        }}
                    ></div>
                )}
            </div>
        </>
    )
}

export default App
