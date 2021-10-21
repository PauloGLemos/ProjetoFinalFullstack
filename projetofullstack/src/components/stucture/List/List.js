import React, {useState} from 'react';
import Card from '../Card/Card';

const List = () => {
    const [tarefas, setTarefas] = useState ([
        {
            titulo: 'tarefa 1',
        },
        {
            titulo: 'tarefa 2',
        },
        {
            titulo: 'tarefa 3',
        }
    ]);

    return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    tarefas.map((tarefa) => (
                        <Card data={tarefa} key={tarefa.titulo} />
                    ))
                }
            </div>
    )
}

export default List
