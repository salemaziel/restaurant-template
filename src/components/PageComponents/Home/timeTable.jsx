import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Map from '../../../images/googlemap.png'


import { Link } from 'gatsby'

import homeStyles from "./home.module.css";

const TimeTable = () => (
    <>
{/*<div className="NoDesktop">
  <section className={homeStyles.TimeTable}>
<Container>*/}
      <Row>
        <div className="col-md-12">
          <div className={homeStyles.TimeTable}>
            {/*<div className="row d-flex flex-row">*/}
            <Row className={homeStyles.ReversedRow}>
              <Col>
                <div className={homeStyles.LeftDetails}>

                  <table>
                    <tbody>
                      <tr>
                        <td>Monday</td>
                        <td>:</td>
                        <td><div className={homeStyles.TableDetails}> 8:30AM - 5:30PM </div></td>
                      </tr>
                      <tr>
                        <td>Tuesday</td>
                        <td>:</td>
                        <td><div className={homeStyles.TableDetails}> 8:30AM - 5:30PM </div></td>
                      </tr>
                      <tr>
                        <td>Wednesday</td>
                        <td>:</td>
                        <td><div className={homeStyles.TableDetails}> 8:30AM - 5:30PM </div></td>
                      </tr>
                      <tr>
                        <td>Thursday</td>
                        <td>:</td>
                        <td><div className={homeStyles.TableDetails}> 1:00PM - 6:00PM </div></td>
                      </tr>
                      <tr>
                        <td>Friday</td>
                        <td>:</td>
                        <td><div className={homeStyles.TableDetails}> 8:30AM - 5:30PM </div></td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <hr />
                  <div className={homeStyles.AddressTitle}>
                    <h2 style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>Locations</h2>
                    <h3 style={{textAlign: 'center', color: 'gray'}}>623 N Escondido Blvd, Escondido, CA 92025</h3>
                    <br />
                    <h3 style={{textAlign: 'center', color: 'gray'}}>365 N Rose St, Escondido, CA 92025</h3>
                  </div>
                </div>
              </Col>
              <Col style={{padding: '0 10px'}}>
                <div className={homeStyles.MapResponsive}>
                  {/*<iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=place_id:ChIJNT5NO48L3IARRWKVIPGczIo" frameBorder={0} style={{border: 0}} allowFullScreen sameSite="Secure"/>*/}
                  <a href="https://www.google.com/maps/place/Elite+Care+Chiropractic+Center,+317+N+El+Camino+Real,+Encinitas,+CA+92024/@33.0544518,-117.2608602,16z/data=!4m2!3m1!1s0x80dc0b8f3b4d3e35:0x8acc9cf120956245" rel="nofollow">
                  <img src={Map} alt="Google Map Directions" />
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Row>
    {/*</Container>
  </section>
    </div>*/}
</>
)

export default TimeTable