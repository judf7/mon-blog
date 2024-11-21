export function NotFound ({page}) {
    return <>
    <div className="alert alert-danger" role="alert">
        <h1>Page introuvable</h1>
        <p>
            La page demandée "{page}" n'existe pas
        </p>
        </div>
    </>
}
