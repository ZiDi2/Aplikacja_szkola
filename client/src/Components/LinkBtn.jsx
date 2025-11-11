export function LinkBtn({Text, img, bg_color}){
   
    const btn_style={
        backgroundColor: 'white',
        border: "3px solid black",
        borderRadius: '5px',
        width: '15vw',
        height: '10vh',
        cursor: 'pointer',
        fontSize: '1.5vw',
        fontWeight: 'bold',
    }


    const img_style={
        zIndex: 2,
        width: '5vw',
        height: '8vh',
        position: 'absolute',
        marginLeft: '-18vw',
        marginTop: '0.5vh',
        border: "3px solid black",
        backgroundColor: bg_color,
    }
   
    
    
    return (
        <>
            <div>
                <button style={btn_style}>{Text}</button>
                <img src={img}  style={img_style}/>
                
            </div>
        </>
    )
}