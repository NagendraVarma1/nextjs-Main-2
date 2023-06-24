import MeetupDetail from "@/Components/meetups/MeetupDetail";

function DetailPage() {
  return (
    <MeetupDetail
      image="https://i.pinimg.com/564x/0c/1c/16/0c1c16488e652916f7e80e0a8f07207d.jpg"
      title="First Meetup"
      address="Some Street 5, some City"
      description="This is the first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://i.pinimg.com/564x/0c/1c/16/0c1c16488e652916f7e80e0a8f07207d.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 5, some City",
        description: "This is the first meetup",
      },
    },
  };
}
export default DetailPage;
