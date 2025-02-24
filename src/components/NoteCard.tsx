function NoteCard () {
    return (
        <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Title 1</h5>
                    <p className="card-text">contenido de la primera nota</p>
                    <button
                      className="btn btn-sm btn-danger"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
    )
}

export default NoteCard;