import Card from '../components/Card';
function Favorits(props) {

    return (
        <div className="content">
            <div className="content__header">
                <h1 >Мои закладки</h1>
            </div>
            <div className="sneakers">
                { 
                    props.items.map(obj =>
                        <Card key={obj.title}
                            title={obj.name}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                            addToFavorite={ props.addToFavorite}
                        />
                    )
                }
            </div>
     
        </div>
    )
}

export default Favorits;