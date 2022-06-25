import { useNavigate } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetups() {
  const history=useNavigate();
  
  const addMeetupHandler = (meetupdata) => {
    fetch(
      'https://react-getting-started-92d91-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupdata),
        headers: {
          'Content-Type': 'application/jason',
        },
      }
    ).then(()=>{
      history('/');
    })
  };

  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetups;
