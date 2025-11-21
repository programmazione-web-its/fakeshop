import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError()

    return (
        <div>
            <h1>Ops! Qualcosa è andato storto</h1>
            <p>{error.data} - {error.status}</p>
        </div>
    )
}