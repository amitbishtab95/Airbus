import React from 'react'
import { useState } from "react";
// import useDrivePicker from "react-google-drive-picker";
import './frontend.css'
import plates from './links';
const Frontend = () => {

    const [Tech, setTech] = useState();
    const [Db, setDb] = useState();
    const [Backtech, setBacktech] = useState("");
 
    const openPlate = (tech, backtech, db) => {
       
        if (tech === 'React' && backtech === '.net' && db === 'Sql') {
            window.open(plates.RNS)
        }

        if (tech === 'Angular' && backtech === '.net' && db === 'Sql') {
            window.open(plates.ANS)
        }

        if (tech === 'Html' && backtech === 'Django' && db === 'Sql') {
            window.open(plates.HJS)
        }
    };

    return (
        <div className='frontend'>
            <div className='frontend_inner'>
                <div className='container_inner'>
                    <h1>Select Frontend</h1>
                    <p>You can choose frontend technology from below options</p>
                    <select name="front" id="front" onChange={(e) => setTech(e.target.value)}>
                        <option value="">Select</option>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Html">Html</option>
                    </select>
                </div>
                <div className='container_inner'>
                    <h1>Select Backend</h1>
                    <p>You can choose backend technology from below options</p>
                    <select name="backend" id="back" onChange={(e) => setBacktech(e.target.value)}>
                        <option value="">Select</option>
                        <option value=".net">.Net</option>
                        <option value="php">Php</option>
                        <option value="Django">Django</option>
                    </select>
                </div>
                <div className='container_inner'>
                    <h1>Select Database</h1>
                    <p>You can choose DataBase from below options</p>
                    <select name="backend" id="back" onChange={(e) => setDb(e.target.value)}>
                        <option value="">Select</option>
                        <option value="MongoDB">MongoDB</option>
                        <option value="Sql">Sql Server</option>
                        {/* <option value="Django">D</option> */}
                    </select>
                </div>

            </div>
            <div className='btn-custom'>
                <button className='btn' onClick={() => openPlate(`${Tech}`, `${Backtech}`, `${Db}`)}>Proceed</button>
            </div>
        </div>
    )
}

export default Frontend
