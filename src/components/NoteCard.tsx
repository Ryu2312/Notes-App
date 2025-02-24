import Badge from "./Badge";

function NoteCard () {
    return (
        <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex gap-3">
                      <h5 className="card-title ">Title 1</h5>
                      <Badge important={true} pending={true}/>
                    </div>
                    <p className="card-text">contenido de la primera nota</p>
                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                    <button
                      className="btn btn-sm btn-danger mx-3 position-absolute botton-0 end-0"
                    >
                      Eliminar
                    </button>
                  </div><s></s>
                </div>
    )
}

export default NoteCard;