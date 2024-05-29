import React from 'react';
import {Card} from "react-bootstrap";
import "../styles/App.css";

const PlanetCard = (props) => {

    const {planet} = props;

    return (
        <Card className="Card">
            <Card.Body>
                <Card.Title>
                    Planet Name: <strong>{planet.name}</strong>
                </Card.Title>
                <hr/>
                <Card.Text className="d-flex flex-column justify-content-between">
                    <h6>Main Info About the Planet:</h6>

                    <div className="d-flex justify-content-between">
                        <span>
                            Rotational Period:
                        </span>

                        <span>
                            {planet.rotation_period}
                        </span>
                    </div>

                    <div className="d-flex justify-content-between">
                        <span>
                            Orbital Period:
                        </span>

                        <span>
                            {planet.orbital_period}
                        </span>
                    </div>

                    <div className="d-flex justify-content-between">
                        <span>
                            Diameter:
                        </span>

                        <span>
                            {planet.diameter}
                        </span>
                    </div>

                    <div className="d-flex justify-content-between">
                        <span>
                            Climate:
                        </span>

                        <span>
                            {planet.climate}
                        </span>
                    </div>

                    <div className="d-flex justify-content-between">
                        <span>
                            Gravity:
                        </span>

                        <span>
                            {planet.gravity}
                        </span>
                    </div>

                    <div className="d-flex justify-content-between">
                        <span>
                            Terrain:
                        </span>

                        <span>
                            {planet.terrain}
                        </span>
                    </div>

                    <div className="d-flex justify-content-between">
                        <span>
                            Surface Water:
                        </span>

                        <span>
                            {planet.surface_water}
                        </span>
                    </div>

                    <div className="d-flex justify-content-between">
                        <span>
                            Population:
                        </span>

                        <span>
                            {planet.population}
                        </span>
                    </div>

                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PlanetCard;