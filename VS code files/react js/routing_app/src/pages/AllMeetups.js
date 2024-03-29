import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';

// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://tropicallifedambulla.com/wp-content/uploads/2019/07/sigiriya2.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
// ];

function AllMeetups() {
  const [isLoading, setLoading] = useState(true);
  const [loadedMeetups, setloadedMeetups] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      'https://react-getting-started-92d91-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setLoading(false);
        setloadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading .....</p>
      </section>
    );
  }

  return (
    <div>
      <h2>all meetups</h2>
      <ul>
        <MeetupList meetups={loadedMeetups} />
      </ul>
    </div>
  );
}

export default AllMeetups;
