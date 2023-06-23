import NewMeetupForm from "@/Components/meetups/NewMeetupForm"

function NewMeetupPage() {
    function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData)
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}

export default NewMeetupPage