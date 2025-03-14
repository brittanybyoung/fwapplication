import TheoryForm from "../theories/TheoryForm";

const AddTheoriesPage = () => {
  const addTheory = (theory) => {
    // Handle the theory submission here
    console.log('New theory:', theory);
    // You can add API calls or state updates here
  };

  return (
    <div>
      <h1>Add Your Theories!</h1>
      <p>We can't wait to hear what you think is going to happen!</p>
      <TheoryForm addTheory={addTheory} />
    </div>
  )
}

export default AddTheoriesPage
