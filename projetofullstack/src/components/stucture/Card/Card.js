import React from 'react';
import './Card.css'

const Card = (props) => {
    const tarefa = props.data;
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ tarefa.titulo }</h5>
                    <span className="badge bg-primary">Tarefa</span>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <br/><button type="submit" className="btn btn-success">Editar</button>
                    <br/><button type="submit" className="btn btn-danger">Excluir</button>  
                </div>
            </div>
        </div>
    )
}

export default Card
