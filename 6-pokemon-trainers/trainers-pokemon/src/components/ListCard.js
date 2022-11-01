function ListCard(props){
    return(
        <>
            <div className="cards-container container-80">
                {props.children}
            </div>
        </>
    );
}

export default ListCard