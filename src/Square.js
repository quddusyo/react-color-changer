const Square = ({ colorValue, hexValue, isDarkText }) => {
    return (
        <section
            className="square"
            style={{
                backgroundColor: colorValue,
                color: isDarkText ? '#000' : '#FFF'
            }}
        >
            <p>
                { colorValue ? colorValue : 'Empty Search'}
            </p>
            <p>
                { hexValue ? hexValue : null}
            </p>
        </section>
    )
}

Square.defaultProps = {
    colorValue: "empty color value"
}

export default Square
