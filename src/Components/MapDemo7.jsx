import React from 'react'

export const MapDemo7 = () => {
    var charm = [
        { id: 1,name:"Pikachu", type: "Fire", power: 52 },
        { id: 2, name:"Squirtle", type: "Water", power: 48 },
        { id: 3, name:"Bulbasaur", type: "Grass", power: 49 },
        { id: 4, name:"Raichu", type: "Electric", power: 55 },
        { id: 5, name:"Articuno", type: "Ice", power: 50 },
        { id: 6, name:"Machamp", type: "Fighting", power: 51 },
        { id: 7, name:"Gengar", type: "Poison", power: 53 }
    ];
  return (
    <div>
        <h2 style={{textAlign:'center'}}>Map Demo 7 - List of Pokemon Types with Power</h2>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Power</th>
                </tr>
            </thead>

            <tbody>
                {charm.map((item) => (
                    <tr style={{background:item.id == 4 && 'lightgrey'}}>
                        <td>{item.id}</td>
                        <td style={{background:item.type == "Fire" ? "red" : item.type == "Water" ? "blue" : item.type == "Grass" ? "green" : item.type == "Electric" ? "yellow" : item.type == "Ice" ? "lightblue" : item.type == "Fighting" ? "blue" : item.type == "Poison" ? "purple" : "#ccc"}}>{item.type}</td>
                        <td style={{color:item.name == "Pikachu" && "yellow" }}>{item.name}</td>
                        <td style={{color:item.power>50 ? "red" : ""}}>{item.power}</td>
                    </tr>
                ))}
            </tbody>
</table>
    </div>
)
}
