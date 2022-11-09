function ListCard(props){
    return(
        <>
            {/* <div className="cards-container container-80"> */}
            <div>
                {props.children}
            </div>
        </>
    );
}

export default ListCard