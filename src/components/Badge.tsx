function Badge ({important,pending}:{important: boolean,pending: boolean}) {
    return (
        <div className="d-flex gap-2">
            <div className="form-check p-0">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="radioImportant"
                    checked={important}
                    hidden
                />
                <label className={`form-check-label badge rounded-pill ${important ? "text-bg-warning" : "text-bg-secondary"}`} htmlFor="radioImportant">
                    Importante
                </label>
            </div>
            <div className="form-check p-0">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="radioPending"
                    checked={pending}
                    hidden
                />
                <label className={`form-check-label badge rounded-pill ${pending ? "text-bg-primary" : "text-bg-secondary"}`} htmlFor="radioPending">
                    Pendiente
                </label>
            </div>
        </div>
    )
}

export default Badge;