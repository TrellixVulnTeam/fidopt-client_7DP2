import SingleDogComponent from "./uniqueDog";

const DogListComponent = (props) => {
  let allDogs = props.dogs;
  return (
    <div className="all-dog-container col-md-4 col-sm-6">
      {allDogs.map((dog) => {
        return <SingleDogComponent dog={dog} />;
      })}
    </div>
  );
};

export default DogListComponent;
