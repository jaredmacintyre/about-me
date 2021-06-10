import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBicycle } from '@fortawesome/free-solid-svg-icons';
import 'react-vertical-timeline-component/style.min.css';

class Timeline extends Component {
  render() {
    const data = [
      {
        backgroundColor: '#fff',
        textColor: '#000',
        date: '2020-05-01',
        title: 'Honours Bachelor of Computing',
        icon: <FontAwesomeIcon icon={faCoffee} />,
        description:
          'Graduated from the University of Guelph with an honours degree in Computer Science and a minor in Business',
      },
      {
        backgroundColor: '#fff',
        textColor: '#000',
        date: '2020-05-01',
        title: 'Honours Bachelor of Computing',
        icon: <FontAwesomeIcon icon={faBicycle} />,
        description:
          'Graduated from the University of Guelph with an honours degree in Computer Science and a minor in Business',
      },
    ];
    return (
      <section id='timeline'>
        <VerticalTimeline>
          {data &&
            data.map(item => (
              <VerticalTimelineElement
                className='vertical-timeline-element'
                contentStyle={{ background: item.backgroundColor, color: item.textColor }}
                contentArrowStyle={{
                  borderRight: item.arrowRight ? '7px solid  rgb(33, 150, 243)' : null,
                  borderLeft: item.arrowLeft ? '7px solid  rgb(33, 150, 243)' : null,
                }}
                date={item.date}
                iconStyle={{
                    background: item.iconBackgroundColor || "#000",
                    color: item.iconColor || "#fff",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                icon={item.icon}
                dateClassName="vertical-timeline-element__dates"
              >
                <h3>{item.title}</h3> <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
      </section>
    );
  }
}

export default Timeline;