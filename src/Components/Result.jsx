const Result = ({character}) => {
    
    const dataResults = 
    character.map((c) => (
        <tr key={c.id}>
            <td>{c.name}</td>
            <td>{c.birth_year}</td>
            <td>{c.height}</td>
            <td>{c.mass}</td>
            <td>{c.species}</td>
            <td>{c.homeworld}</td>
        </tr>
    ))
    
    return(
        <div>
            <table className="table active table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Ano Nascimento</th>
                        <th>Altura</th>
                        <th>Peso</th>
                        <th>Espécie</th>
                        <th>Planeta Natal</th>
                    </tr>
                </thead>
                <tbody>
                    {dataResults}
                </tbody>
            </table>
        </div>
    )
}

export default Result;