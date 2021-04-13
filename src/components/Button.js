function Button({id, binBottom, bought}) {
return(
        <button className="btn" onClick={() => binBottom(id)} disabled={bought}>
            {bought ? "Добавлено в корзину" : "Добавить в корзину"}
        </button>
    )
}

export default Button;