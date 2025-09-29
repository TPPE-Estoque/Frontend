import React, { useState, useEffect } from 'react'
import { getHelloWorld } from './services/api'

function App() {
  const [message, setMessage] = useState('Carregando mensagem do backend...')

  useEffect(() => {
    getHelloWorld()
      .then(response => {
        setMessage(response.data.message)
      })
      .catch(error => {
        console.error("Erro ao buscar dados do backend:", error)
        setMessage('Falha ao conectar com o backend.')
      })
  }, [])

  return (
    <div>
      <header>
        <h1>Teste de Conexão Frontend-Backend</h1>
        <p>
          <strong>Mensagem recebida:</strong> {message}
        </p>
      </header>
    </div>
  )
}

export default App
