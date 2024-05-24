import React from 'react';
import nonameVideo from '../../assets/img/video/Design sem nome.mp4'; // Importe o vídeo
import imageGirl from '../../assets/img/about/Design sem nome (1).svg'
import Team3 from '../../assets/img/Team/3.png'
import Team4 from '../../assets/img/Team/4.png'
import Team5 from '../../assets/img/Team/5.png'
import Team6 from '../../assets/img/Team/6.png'
import Team7 from '../../assets/img/Team/7.png'
import './style/style.scss';
import './style/sobre.scss'
import './style/team.scss'

function App() {
  return (
    <>
      <main>
        <section className="video">
          <video id="video" autoPlay playsInline loop muted>
            <source src={nonameVideo} type="video/mp4" />
          </video>
        </section>

        <div className='secao'>
    
            <h2>Realidade virtual para melhorar andamento de exames</h2>
            <p>As crianças muitas vezes têm medo de retirar sangue. Authenticals em parceria com o Instituto da criança e do adolescente se uniram para lutar contra esse medo usando VR para colocar as crianças em um mundo de fantasia imersivo e educativo. A experiência de Realidade virtual distrai as crianças, permitindo que o exame ocorra de uma forma mais ágil e prática.</p>
         
        </div>

        <section id="sobre">
          <div className="sobre_texto">
            <h2>Sobre</h2>
            <p>Gostaria de compartilhar um pouco sobre nosso trabalho, que atualmente está envolvido em um projeto apaixonante e transformador. Somos a Authenticals e um dedicado grupo de entusiastas de tecnologia, unidos por um propósito comum - utilizar a realidade virtual para melhorar a experiência das crianças em exames médicos.</p>
            <p>Imaginem crianças enfrentando exames médicos, um ambiente que muitas vezes pode ser intimidante e assustador para elas. Com a visão de trazer conforto e normalidade a essas experiências, decidimos embarcar em um projeto inovador de realidade virtual.</p>
            <p>Nosso objetivo é criar um ambiente virtual imersivo, onde as crianças possam se sentir acolhidas, distraídas e até mesmo empolgadas durante procedimentos médicos. Estamos desenvolvendo cenários lúdicos e interativos que não apenas aliviam o estresse, mas também educam e informam as crianças sobre o processo médico de uma maneira acessível e amigável.</p>
            <p>Acreditamos que ao proporcionar uma experiência positiva durante os exames médicos, podemos contribuir para a redução da ansiedade das crianças, o que pode, por sua vez, facilitar o trabalho dos profissionais de saúde e até mesmo melhorar os resultados dos tratamentos.</p>
            <p>Estamos empolgados com o potencial impacto positivo que nossa iniciativa pode ter na vida das crianças e de suas famílias. Além disso, esperamos inspirar outros a explorarem soluções inovadoras no campo da tecnologia para a saúde.</p>
          </div>
          <img src={imageGirl} alt="Garota usando óculos VR" />
        </section>

        <div className="team" id="Produtos">
          <h2>Nossa Equipe:</h2>
        </div>
        <div class="produtos-cards">
      <div class="produtos-card">
        <img class="produtos-cartaz" src={Team3} title="Imagem" alt="Imagem"/>
        <h3>Leonardo R.</h3>
        <p>Cargo</p>
      </div>
      <div class="produtos-card">
        <img class="produtos-cartaz" src={Team4} title="Imagem" alt="Imagem"/>
        <h3>Daniel W.</h3>
        <p>Cargo</p>
      </div>
      <div class="produtos-card">
        <img class="produtos-cartaz" src={Team5} title="Imagem" alt="Imagem"/>
        <h3>Gustavo F.</h3>
        <p>Cargo</p>
      </div>
      <div class="produtos-card">
        <img class="produtos-cartaz" src={Team7} title="Imagem" alt="Imagem"/>
        <h3>Vinicius I.</h3>
        <p>Cargo</p>
      </div>
      <div class="produtos-card">
        <img class="produtos-cartaz" src={Team6} title="Imagem" alt="Imagem"/>
        <h3>Gustavo B.</h3>
        <p>Cargo</p>
      </div>
    </div>
   </main>

      <footer>
        <p>&copy; 2023 Authenticals Programmers | Desenvolvido por Authenticals</p>
      </footer>
    </>
  );
}

export default App;
