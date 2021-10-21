import React from "react";
import './Cadastro.css';

const Cadastro = () => {
    return (
        <div className="div1">
        <div className="container cadastro">
            Cadastro de Tarefas
                <p className="p1">
                    <label for="Título" >Título:</label>
                    <br /><input type="text" id="Título" placeholder="Título da tarefa" ></input>
                </p>

                <p className="p1">
                    <label for="Descrição" >Descrição:</label>
                    <br /><input type="text" id="Descrição" placeholder="Descrição da tarefa" ></input>
                </p>

                <p class="p1"> 
                    <label for="Prioridade">Prioridade :</label>
                    <br /><select name="tarefa" id="Prioridade" >
                        <option value="---">---</option>
                        <option value="Alta">Alta</option>
                        <option value="Média ">Média </option>
                        <option value="Baixa">Baixa</option>
                    </select>
                </p>

                <p class="p1"> 
                    <label for="Status ">Status  :</label>
                    <br /><select name="tarefa" id="Status " >
                        <option value="---">---</option>
                        <option value="Fazer">Fazer</option>
                        <option value="Fazendo ">Fazendo </option>
                        <option value="Feito">Feito</option>
                    </select>
                </p>

            <br/><button type="submit" class="btn btn-primary">Submit</button>  
        </div>
        </div>
    )
}

export default Cadastro 