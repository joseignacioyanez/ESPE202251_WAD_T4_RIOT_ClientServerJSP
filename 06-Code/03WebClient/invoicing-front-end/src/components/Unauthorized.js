import { useNavigate } from "react-router-dom"

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <section>
            <h1>No Autorizado</h1>
            <br />
            <p>Usted no tiene los permisos necesarios para ver la página solicitada.</p>
            <div className="flexGrow">
                <button onClick={goBack}>Regresar</button>
            </div>
        </section>
    )
}

export default Unauthorized