import '../styles/components/_banner.scss'

export default function Banner() {
    return (
        <div className="banner">
            <h1 className="banner__title">Всё для тебя</h1>
            <p className="banner__subtitle">Найди свой идеальный трек</p>
            <button className="banner__play">▶ Play</button>
        </div>
    )
}