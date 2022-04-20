export const Caracters = (props) => {
  const { caracters, setCaracters } = props;
  const resetCaracters =()=> {
    setCaracters(null);
  }

  return (
    <div className="caracters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCaracters}>
        Volvel al Home
      </span>
      <div className="container-caracters">
        {caracters.map((caracter, index) => (
          <div className="caracter-container" key={index}>
            <div>
              <img src={caracter.image} alt={caracter.name}></img>
            </div>
            <div>
              <h3>{caracter.name}</h3>
              <h6>
                {caracter.status === "Alive" ? (
                  <>
                    <span className="alive" />
                    Vivo
                  </>
                ) : (
                  <>
                    <span className="dead" />
                    Muerto
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios:</span>
                <span> {caracter.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Especies:</span>
                <span> {caracter.species}</span>
              </p>
            </div>
          </div>
        ))}
        <span className="back-home" onClick={resetCaracters}>
          Volvel al Home
        </span>
      </div>
    </div>
  );
};
