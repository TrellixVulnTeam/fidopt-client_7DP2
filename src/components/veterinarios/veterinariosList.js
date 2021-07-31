import VeterinariosCard from "./veterinarioProfile"

const VeterinariosComponent = (props) => {
    let allVets = props.vets;
    console.log(allVets)
    return (
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 py-3">
        {allVets.map((vet) => {
          return <VeterinariosCard vet={vet} />;
        })}
      </div>
    );
  };
  
  export default VeterinariosComponent;