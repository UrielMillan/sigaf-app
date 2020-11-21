import React from 'react';

const UserTable = props =>{
    return(
        <table className='content-table'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Tipo de usuario</th>
                    <th>Stauts</th>
                </tr>
            </thead>
            <tbody>
                <RenderRows data={props.data} />
            </tbody>
        </table>
    )
}

const RenderRows = props =>{
    if(props.data !== null && props.data !== undefined){
        const rows = props.data.map((item, i)=>{
            return(
                <tr key={i}>
                    <td>{i}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.user_type}</td>
                    <td>{item.status}</td>
                </tr>
            );
        });
        return rows;
    }else{
        return(
            <tr key={1}>
                <td>Sin datos para mostrar</td>
            </tr>
        );
    }
}

export default UserTable;