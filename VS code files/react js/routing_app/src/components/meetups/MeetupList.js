import ListCss from './MeetupList.module.css';
import MeetupItem from './MeetupItem';

import React from 'react';

function MeetupList({meetups}) {
  return (
    <ul className={ListCss.list}>
      {meetups.map((meetup) => (
        <MeetupItem 
           key={meetup.id}
           meetup={meetup}
          // id={meetup.id}
          // image={meetup.image}
          // title={meetup.title}
          // address={meetup.address}
          // description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
