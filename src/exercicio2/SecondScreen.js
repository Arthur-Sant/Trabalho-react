import { Component } from 'react';
import Input from '../shared/components/Input/Input';

export default class SecondScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      media: 0,
      message: '',
      totalApro: 0,
      total: 0,
      totalRepro: 0,
      totalMedia: 0,
      mostrarTotal: false
    }
  }

  calculateNota(){
    const nota1 = document.getElementById('nota1')
    const nota2 = document.getElementById('nota2')

    const media = (Number(nota1.value) + Number(nota2.value)) / 2
    this.setState({media: media})

    let message = ""
    if(media < 3)
    message = "Reprovado"
    else if(media >= 3 && media <= 7)
    message = "Exame"
    else
    message = "Aprovado"
    
    this.setState({message: message})
    
    this.setState({total: this.state.total += 1 })

    if(message == "Aprovado")
    this.setState({totalApro: this.state.totalApro += 1})
    else if(message == "Reprovado")
    this.setState({totalRepro: this.state.totalRepro += 1})

    this.setState({totalMedia: this.state.totalMedia += media})

    nota1.value = ""
    nota2.value = ""
  }

  render(){
    return (
      <div className="second-screen">
        <Input id={'nota1'} type={'number'} padding={10}/>
        <Input id={'nota2'} type={'number'} padding={10}/>
        <button onClick={() => this.calculateNota()} >Calcular Nota</button>
        <button onClick={() => this.setState({mostrarTotal: true})}>Mostra tudo</button>
        {this.state.message? (
            <ul>
              <li><b>Media:</b> {this.state.media}</li>
              <li><b>Message:</b> {this.state.message}</li>
              {this.state.mostrarTotal? (
                <span>
                <li><b>Total de Alunos Aprovados:</b> {this.state.totalApro}</li>
                <li><b>Total de Alunos:</b> {this.state.total}</li>
                <li><b>Total de Alunos Reprovados:</b> {this.state.totalRepro}</li>
                <li><b>Média da classe:</b> {this.state.totalMedia}</li>
                </span>
              ) : ""}
            </ul>
          ) : ""
        }
      </div>
    );
  }
}