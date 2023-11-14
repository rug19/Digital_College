import { useState } from 'react'
import './App.css'

function App() {
  const [cep, setCep] = useState("")
  const [endereco, setEndereco] = useState("")
  const [numero, setNumero] = useState("")
  const [bairro, setBairro] = useState("")
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")

  const consultar_cep = async () => {
    const enderecoDados = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        setCidade(data.localidade)
        setBairro(data.bairro)
        setEstado(data.uf)
        setEndereco(data.logradouro)
      })
      .catch(error => console.log(error))
  }

  return (
    <>
      <div className="container">
        <section className="row mt-5 align-items-center">

          <div className="col-6">
            <img className="img-fluid" src="undraw_delivery_address_re_cjca.svg" alt="" />
          </div>

          <div className="col-6 data-bs-theme bg-white rounded ">
            <form className="mb-md-5">
              <label htmlFor="cep">CEP</label>
              <input
                id="cep"
                type="text"
                className="form-control mb-3"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                onBlur={consultar_cep}
              />

              <label htmlFor="endereco">Endereço</label>
              <input id="endereco" type="text" className="form-control mb-3" value={endereco} onChange={(e) => setEndereco(e.target.value)} />

              <label htmlFor="numero">Número</label>
              <input id="numero" type="text" className="form-control mb-3" value={numero} onChange={(e) => setNumero(e.target.value)} />

              <label htmlFor="bairro">Bairro</label>
              <input id="bairro" type="text" className="form-control mb-3" value={bairro} onChange={(e) => setBairro(e.target.value)} />

              <label htmlFor="cidade">Cidade</label>
              <input id="cidade" type="text" className="form-control mb-3" value={cidade} onChange={(e) => setCidade(e.target.value)} />

              <label htmlFor="estado">Estado</label>
              <input id="estado" type="text" className="form-control mb-3" value={estado} onChange={(e) => setEstado(e.target.value)} />
              <div className="d-grid">
                <button className="btn btn-primary">ENVIAR</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
