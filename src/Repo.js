import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";


function Repo({ repo }) {
  

    return (
      
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                            <img src={repo.owner.avatar_url} width="40px" alt={repo.name} />
                            &nbsp; &nbsp; {repo.name.toUpperCase()}
                        </Card.Title>
                    </div>
                    <Card.Text>
                    
                    <Link to="/repo">
                        <Button variant = "primary">
                            View Details 
                        </Button>
                        </Link> 

                    </Card.Text>
                </div>
            </Card.Body>
         
        </Card>
    );
}

export default Repo;
