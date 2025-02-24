import { Note } from "../Store/notesSlice";
import { filtersNotes } from "../utils/filterUtils";

function FilterForm ({filters}:{filters:React.Dispatch<React.SetStateAction<Note[]>>}) {
  
  const handleChange = (e:React.FormEvent<HTMLFormElement>) => {
    const field = Object.fromEntries(new FormData(e.currentTarget));
    const notes = filtersNotes(field)
    filters(notes)
  }
  
  
  return (
    <div className="mt-4">
      <form onChange={handleChange} className="sticky-top gap-4 d-flex flex-md-column flex-row justify-content-around" style={{top: "3rem"}}>
        <div className="mb-3">
          <label htmlFor="filterCategory" className="form-label">
            Ordenar por:
          </label>
          <select id="filterCategory" className="form-select" name="order">
            <option value="creacion" defaultChecked>
              Fecha de Creacion
            </option>
            <option value="modificacion">Fecha de modificacion</option>
            <option value="asc">Ascendente(A-Z)</option>
            <option value="desc">Desendente(Z-A)</option>
          </select>
        </div>
        <div className="mb-3">
          <span>Filtrar por:</span>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="radioAsc"
              value="pending"
              name="pending"
            />
            <label className="form-check-label" htmlFor="radioAsc">
              Pendiente
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="radioDesc"
              value="important"
              name="important"
            />
            <label className="form-check-label" htmlFor="radioDesc">
              Importante
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FilterForm