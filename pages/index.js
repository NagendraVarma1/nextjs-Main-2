import MeetupList from "@/Components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://i.pinimg.com/564x/c2/c1/ae/c2c1aef0bb5f621e564c30c3296e975e.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://i.pinimg.com/564x/0c/1c/16/0c1c16488e652916f7e80e0a8f07207d.jpg",
    address: "Some address 5, 12345 Some Other City",
    description: "This is a second meetup!",
  },
];

function HomePage() {
  return (
      <MeetupList meetups={DUMMY_MEETUPS} />
  );
}

export default HomePage;
