import itemCss from './MeetupItem.module.css';

import Card from '../ui/Card';

function MeetupItem({meetup}) {
  return (
    <Card>
    <li className={itemCss.item}>
      <div className={itemCss.image}>
        <img src={meetup.image} alt={meetup.title} />
      </div>
      <div className={itemCss.content}>
        <h3>{meetup.title}</h3>
        <address>{meetup.address}</address>
        <p>{meetup.description}</p>
      </div>
      <div className={itemCss.actions}>
        <button>To favorite</button>
      </div>
    </li>
    </Card>
  );
}

export default MeetupItem;
