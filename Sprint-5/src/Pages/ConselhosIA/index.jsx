import { useState } from "react"
import axios from "axios"
import './style.scss'

function Concelhos () {
 const [cont, setCont] = useState() 
 const url = "https://api.adviceslip.com/advice"

 function getMessage() {
  axios.get(url)
    .then((response) => {
      const data = response.data
      setCont(data.slip.advice)
    })
    .catch((error) => console.log(error))
   }

  return (
   <>
    <div className="container">
      <h1>
        Bem vindo (a) 👋
        <br></br>
        Click no botão abaixo para receber um conselho
        <div className="conselhos_tab">
         <p>{cont}</p>
        </div>
        
       <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="button" onClick={getMessage}>Gerar mensagem</button>
       </div>
      </h1>
    </div>
   </>
  )
}

export default Conselhos