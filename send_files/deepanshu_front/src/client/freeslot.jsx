import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Free() {
    const ae = localStorage.getItem("a_email");
  var navigate = useNavigate();

  const [obj, updateobj] = useState({
    aemail:ae,
    licenseplate:"",
    slotno:""
  });

  const [p,updatep] =useState("");

  const [validated, setValidated] = useState(false);

  useEffect(() => {
    console.log("object:" + JSON.stringify(obj));
    fetchrate();
  }, []);

  const fetchrate=async()=>{
     
    var url = "http://localhost:2002/provider/rate-post";

    var response = await axios.post(url,{email:obj.aemail});
    alert(JSON.stringify(response.data));
    if (response.data.status) {
      updatep(response.data.price);
    }


  }

  const update = (event) => {
    var { name, value } = event.target;

    updateobj({ ...obj, [name]: value });
  };

  
  async function savepost() {
    var url = "http://localhost:2002/provider/freeparking-post";
    var formData = new FormData();

    for (var x in obj) {
      formData.append(x, obj[x]);
    }

    var response = await axios.post(url, formData);
    var bill=p*response.data.time;
    alert("BILL="+bill);

    if (response.data.status) {
      navigate("/pdash");
    }
  }

  return (
    <div>
      <div>
        <br />
        <h1>FREE SLOT</h1>
        <br />
        <br />
      </div>
      <Container>
        <Form noValidate validated={validated}>
          
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>Slotno:</Form.Label>
              <Form.Control
                type="text"
                placeholder="slotno"
                required
                name="slotno"
                value={obj.slotno}
                onChange={update}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>License plate no</Form.Label>
              <Form.Control
                type="text"
                placeholder="plateno"
                required
                name="licenseplate"
                value={obj.licenseplate}
                onChange={update}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

         
          
            <Button type="button" onClick={savepost}>
              Generate Bill
            </Button>
          
        </Form>
      </Container>
      <p>{JSON.stringify(obj)}</p>
    </div>
  );
}

export default Free;
