import SingleDogComponent from "./uniqueDog";


const DogListComponent = (props) => {
  let allDogs = props.dogs;
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1">
      {allDogs.map((dog) => {
        return <SingleDogComponent dog={dog} />;
      })}
    </div>
  );
};

export default DogListComponent;
