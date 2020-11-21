import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Map from '../../../images/googlemap.png'

import { Link } from 'gatsby'

import timetableLargeStyles from "./home.module.css";

const TimeTableDesktop = () => (
<div className="NoMobile">
  {/*<section className={timetableLargeStyles.CenterDetails}>
    <Container>
      <Row>
        <div className="col-md-12">
          <h2> Get Back To Doing What You Love, Pain Free </h2>
          <br />
          
         
          
        </div>
      </Row>
    </Container>
  </section>*/}
  <section className={timetableLargeStyles.Table}>
    <Container>
      <Row>
        <div className="col-lg-12">
          <div className={timetableLargeStyles.TimeTable}>
            <div className="row d-flex flex-row">
              <div className="col-md-6 my-auto">
                <div className={timetableLargeStyles.LeftDetails}>
                <div className={timetableLargeStyles.AddressTitle}>
                <h2 style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>Locations</h2>
                    <h3 style={{textAlign: 'center', color: 'gray'}}><a href="https://www.google.com/maps/dir//Alberto's+Mexican+Food,+623+N+Escondido+Blvd+%231701,+Escondido,+CA+92025/@33.12649,-117.1062755,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80dbf4985ef3a7c3:0xc86555c85149b378!2m2!1d-117.088766!2d33.12649" rel="nofollow">623 N Escondido Blvd, Escondido, CA 92025</a></h3>
                    <br />
                    <h3 style={{textAlign: 'center', color: 'gray'}}><a href="https://www.google.com/maps/dir//Alberto's+Mexican+Food,+365+N+Rose+St+%233129,+Escondido,+CA+92027/@33.1415503,-117.0898944,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80dbf36a598ec3af:0x1312c27a9f5730e!2m2!1d-117.0591671!2d33.1331812" rel="nofollow">365 N Rose St, Escondido, CA 92025</a></h3>
                  
                  </div>
                  <table>
                    <tbody>
                      <tr>
                        <td>Monday</td>
                        <td>:</td>
                        <td><div className={timetableLargeStyles.TableDetails}> 8:30AM - 5:30PM </div></td>
                      </tr>
                      <tr>
                        <td>Tuesday</td>
                        <td>:</td>
                        <td><div className={timetableLargeStyles.TableDetails}> 8:30AM - 5:30PM </div></td>
                      </tr>
                      <tr>
                        <td>Wednesday</td>
                        <td>:</td>
                        <td><div className={timetableLargeStyles.TableDetails}> 8:30AM - 5:30PM </div></td>
                      </tr>
                      <tr>
                        <td>Thursday</td>
                        <td>:</td>
                        <td><div className={timetableLargeStyles.TableDetails}> 1:00PM - 6:00PM </div></td>
                      </tr>
                      <tr>
                        <td>Friday</td>
                        <td>:</td>
                        <td><div className={timetableLargeStyles.TableDetails}> 8:30AM - 5:30PM </div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/*<div className="col-md-6 my-auto">*/}
<Col style={{padding: '0'}}>
                <div className={timetableLargeStyles.MapResponsive}>
                  {/*<iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=place_id:ChIJNT5NO48L3IARRWKVIPGczIo" frameBorder={0} style={{border: 0}} allowFullScreen sameSite="Secure"/>*/}
                  <a href="https://www.google.com/maps/search/albertos/@33.1264876,-117.1062755,14z/data=!3m1!4b1" rel="nofollow">
                  <img src={Map} alt="Google Map Directions" />
                  </a>
                </div>
              {/*</div>*/}
              </Col>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  </section>
</div>


)

export default TimeTableDesktop