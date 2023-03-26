function Kisi({veri}) {

    return(
        <div className="col-md-3">
            <img src={veri.picture.medium} alt="" />
            <p className="mb-0">{veri.name.first} {veri.name.last}</p>
            <p>{new Date(veri.dob.date).getFullYear()}</p>
        </div>
    )
}

export default Kisi;