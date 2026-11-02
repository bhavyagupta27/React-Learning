export default function Price({oldPrices, newPrices}){
    let oldStyles = {
        textDecorationLine: "Line-through",
    };
    let newStyles = {
        fontWeight: "bold",
    };
    let styles = {
         backgroundColor: "#e0c367",
         height: "35px",
         borderRadius :"0 0 10px 10px ",
         borderBottomLeftRadius:"14px",
         textAlign:"center",
    }
    return(
    <div style = {styles}>
        <span style={oldStyles}>{oldPrices}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={newStyles}>{newPrices}</span>
    </div>
    );
}