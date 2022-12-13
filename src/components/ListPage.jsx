import ListItem from './ListItem';

const ListPage = ({docs, currentScreen}) => {

    const listItems = docs.map((row) => {
        return ListItem(row, currentScreen);
    })

    return (
        <div className="card">
            <div className="card-body p-0">
                {listItems}
            </div>
        </div>
    )

    // return (
    //     <div className="listPage">
    //         <div className="listItems">
    //             {listItems}
    //         </div>
    //     </div>
    // )
}

export default ListPage;