import React from 'react';
import {Col, Row} from "react-bootstrap";
import planets from "../data/planets.json";
import CardItem from "../comps/PlanetCard";
import {v4 as uuidv4} from "uuid";

const Planets = (props) => {

    const {searchText} = props;

    let curPlanets = planets;
    if(searchText){
        console.log("SEARCH TEXT: " + searchText)
        curPlanets = planets.filter(planet => {
            return planet.name.toLowerCase().includes(searchText.toLowerCase());
        })
    }

    for(let i = 0; i < curPlanets.length; i++) {
        curPlanets[i].id = uuidv4();
    }

    return (
        <div className="mt-3">
            <Row xs={1} md={2} lg={3}>
                {curPlanets.map(planet =>
                    <Col key={planet.id} className="mb-4">
                        <CardItem planet={planet}/>
                    </Col>
                )}
            </Row>
        </div>
    );
};

export default Planets;