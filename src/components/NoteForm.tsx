 function NoteForm () {
    return (
        <form >
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="titulo"
            placeholder="Ingresa el título"
           
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="contenido"
            rows={3}
            placeholder="Escribe tu nota"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success col-12  p-2">Agregar Nota</button>
      </form>
    )
}

export default NoteForm;