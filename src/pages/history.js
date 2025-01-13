import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container } from 'react-bootstrap';
import '../index.css';

const HistoryComp = () => {
    return (
        <Container>
            <div className='each-head mt-4 d-flex justify-content-center'>PLACES OF MINISTRIES AFTER ORDINATION</div>
            <div className='my-4 '>
                <VerticalTimeline lineColor={"black"}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="1 st Year"
                        contentStyle={{ borderTop: "3px solid  #124076" }}
                        contentArrowStyle={{ borderRight: "7px solid  #124076" }}
                        iconStyle={{ background: "#124076", color: "#fff" }}
                    //    icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Assistant Parish Priest at Kadayal</h3>
                        <p>Diocese of Kuzhithurai</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2 nd year"
                        contentStyle={{ borderTop: "3px solid   " }}
                        contentArrowStyle={{ borderRight: "7px solid  #124076" }}
                        iconStyle={{ background: "#124076", color: "#fff" }}
                    //    icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Assistant Parish Priest at Panbari</h3>

                        <p>
                            Diocese of Bongaigaon
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="3 rd Year"
                        contentStyle={{ borderTop: "3px solid  #124076" }}
                        contentArrowStyle={{ borderRight: "7px solid  #124076" }}
                        iconStyle={{ background: "#124076", color: "#fff" }}

                    >
                        <h3 className="vertical-timeline-element-title">Dean of Studies </h3>
                        <p>At SFS Minor Seminary, Pudukottai</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentArrowStyle={{ borderRight: "7px solid  #124076" }}
                        contentStyle={{ borderTop: "3px solid  #124076" }}
                        date="4&5 th year"
                        iconStyle={{ background: "#124076", color: "#fff" }}
                    //    icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            M. SC Studies at Montfort College
                        </h3>
                        <p>
                            Bangalore
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentArrowStyle={{ borderRight: "7px solid  #124076" }}
                        contentStyle={{ borderTop: "3px solid  #124076" }}
                        date="6 th year"
                        iconStyle={{ background: "#124076", color: "#fff" }}
                    //    icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Internship at Niraivagam Psychological Institute
                        </h3>
                        <p>
                            Chennai
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentArrowStyle={{ borderRight: "7px solid  #124076" }}
                        contentStyle={{ borderTop: "3px solid  #124076" }}
                        date="7 & 8 th year"
                        iconStyle={{ background: "#124076", color: "#fff" }}
                    //    icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Dean of Studies at St. Clement College </h3>
                        <p>
                            Assam
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentArrowStyle={{ borderRight: "7px solid  #124076" }}
                        contentStyle={{ borderTop: "3px solid  #124076" }}
                        date="9 th year"
                        iconStyle={{ background: "#124076", color: "#fff" }}
                    //    icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Director of Thedal Institute of Spirituality </h3>
                        <p>
                            Kodai Road,Dindigul
                        </p>
                    </VerticalTimelineElement>



                </VerticalTimeline>
            </div>
        </Container>
    )
}

export default HistoryComp