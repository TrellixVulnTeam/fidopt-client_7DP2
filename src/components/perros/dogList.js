import SingleDogComponent from "./uniqueDog";


const DogListComponent = (props) => {
  let allDogs = props.dogs;
  return (
    <div>
      {allDogs.map((dog) => {
        return <SingleDogComponent dog={dog} />;
      })}
    </div>
  );
};

export default DogListComponent;
