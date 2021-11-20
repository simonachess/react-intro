import BorderWord from "./BorderWord";

function Hello({ to, color, size, element }) {
    return (
        <h1 style={{
            color: color,
            fontSize: size,
        }}>Hello, <BorderWord word={to}></BorderWord> {element}!</h1>
    )
}

export default Hello;