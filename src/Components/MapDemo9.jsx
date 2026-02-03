import React from 'react'

export const MapDemo9 = () => {
    var img = [
        {id:1,name:"tommy",imgsrc:"https://picsum.photos/id/237/200/300", info:"this is dog image"},
        {id:2,name:"Sky-Scraper",imgsrc:"https://picsum.photos/id/238/200/300", info:" this is image is bulding"},
        {id:3,name:"Dandelyen",imgsrc:"https://picsum.photos/id/239/200/300", info:"this is flower imagee"},
        {id:4,name:"wallbo",imgsrc:"https://picsum.photos/id/240/200/300", info:"this is  wall image"},
        
    ]
  return (
    <div>
        <h2 style={{textAlign:'center'}}>Map Demo 9 - List of Images with Names</h2>
        <table border={1} style={{textAlign:'center'}}>
            <thead> 
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Info</th>
                </tr>
            </thead>
            <tbody>
                {
                    img.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td><img src={item.imgsrc} width={'auto'} height={200}/></td>
                            <td>{item.info}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    </div>
  )
}
