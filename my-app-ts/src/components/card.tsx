interface ICard{
    id:number,
    paragraph:string,
    details:string
}

export const Card = ({ id, paragraph, details }: ICard) => {
    return(
       <div>
            <h1>Card {id}</h1>
            <p>paragrafo{paragraph}</p>
            <p>Detalhes para todos os cards{details}</p>
       </div>
    )
}