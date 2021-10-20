import React from 'react';


class Calculadora extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            n1: 0,
            n2: 0,
            result: ''
        };
        this.handleN1 = this.handleN1.bind(this);
        this.handleN2 = this.handleN2.bind(this);
        
    }
    handleN1(event) {
        this.setState({
            n1: Number(event.target.value)
        });
    }
    handleN2(event) {
        this.setState({
            n2: Number(event.target.value)
        });
    }
      opera(op){
        switch (op) {
            case 'soma':
              this.setState({
                result :  parseFloat(this.state.n1) + parseFloat(this.state.n2)
                }) ;
              break;
            case 'subtrai':
                this.setState({
                    result : parseFloat(this.state.n1) - parseFloat(this.state.n2)
                }) ;
                break;
            case 'multiplica':
                this.setState({
                result : parseFloat(this.state.n1) * parseFloat(this.state.n2)
                }) ;
                break;
            case 'divide':
                this.setState({
                result : parseFloat(this.state.n1) / parseFloat(this.state.n2)
                }); 
                break;
        }
    }
    render() {
        return (
            <div class = "campo">
                <fieldset class="f1">
                    <h1 id='titulo'>Calculadora </h1>
                    <div>
                        <label >Número 1 :  </label>
                        <input value={this.state.n1} onChange={this.handleN1}  />    
                    </div>
                    <div>
                        <label >Número 2: </label>
                        <input value={this.state.n2} onChange={this.handleN2}  /> 
                    </div><br />
                    <div>
                        <p>Escolha a operação desejada:</p><br />
                        <fieldset>
                            <label>
                                <input type = "radio" name = "op" onClick= {() => this.opera('soma')}/> Adição
                            </label> 
                            <label>
                                <input type = "radio" name = "op" onClick= {() => this.opera('subtrai')}/> Subtração
                            </label>
                            <label>
                                <input type = "radio" name = "op" onClick= {() => this.opera('multiplica')}/> Multiplicação
                            </label>
                            <label>
                                <input type = "radio" name = "op" onClick= {() => this.opera('divide')}/> Divisão
                            </label>
                        </fieldset>
                        
                    </div>
                    <div>
                        <label >Resultado: </label>
                        <input value = {this.state.result}></input>
                    </div>
                </fieldset>   
            </div >
        );
    }
}
export default Calculadora;