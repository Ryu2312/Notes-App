function FilterForm () {
return (
    <div className="mt-4 ">
          <form className="col gap-4 d-flex flex-md-column flex-row justify-content-around">
            <div className="mb-3">
              <label htmlFor="filterCategory" className="form-label">Ordenar por:</label>
              <select id="filterCategory" className="form-select">
                <option value="creacion" defaultChecked>Fecha de Creacion</option>
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
                  type="radio"
                  name="order"
                  id="radioAsc"
                  value="pending"
                />
                <label className="form-check-label" htmlFor="radioAsc">
                  Pendiente
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="order"
                  id="radioDesc"
                  value="important"
                />
                <label className="form-check-label" htmlFor="radioDesc">
                  Importante
                </label>
              </div>
            </div>
          </form>
        </div>
)
}

export default FilterForm